# Documentación Técnica del Proyecto Integrador DevOps

Este documento explica de forma detallada y bloque por bloque cada uno de los archivos creados para contenerizar, desplegar y monitorear el servicio web. Puedes usar esta información para armar el documento PDF final de tu proyecto.

---

## 1. `Dockerfile`
Este archivo es la "receta" para crear la imagen de tu aplicación web. Utiliza una técnica muy valorada llamada **Multi-stage Build** (Construcción en múltiples etapas) para que la imagen final sea muy ligera y segura.

```dockerfile
# ETAPA 1: Construcción (Build)
# Descarga Node.js versión 22 en su versión ligera (alpine) y la nombra "build"
FROM node:22-alpine as build

# Crea la carpeta /app dentro del contenedor y se mueve adentro
WORKDIR /app

# Copia solo los archivos de dependencias primero (optimiza la caché de Docker)
COPY package*.json ./

# Instala las dependencias del proyecto (Astro, Tailwind, etc.)
RUN npm install

# Copia el resto de tu código fuente
COPY . .

# Compila tu sitio de Astro convirtiéndolo en puro código estático HTML/CSS
RUN npm run build


# ETAPA 2: Servidor de Producción
# Descarga un servidor Nginx súper ligero para la fase final
FROM nginx:alpine

# Elimina la página de bienvenida por defecto que trae Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia tu propia configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# LA MAGIA: Copia SOLAMENTE la carpeta /dist (resultado final compilado) de la ETAPA 1. 
# Esto descarta el código fuente original y Node.js, liberando gigabytes de espacio.
COPY --from=build /app/dist /usr/share/nginx/html

# Indica que el contenedor internamente escuchará el puerto 80
EXPOSE 80

# Comando final que mantiene el servidor Nginx encendido en primer plano
CMD ["nginx", "-g", "daemon off;"]
```

---

## 2. `.dockerignore`
Funciona exactamente igual que `.gitignore`, pero para Docker. Su objetivo es indicarle a Docker qué carpetas de tu computadora **NO** debe copiar hacia dentro del contenedor durante la construcción.

```text
node_modules   # Evita copiar gigabytes de dependencias inútiles que se volverán a instalar adentro
npm-debug.log  # Evita subir logs locales
.git           # Evita subir el historial de versiones (por seguridad y peso)
.DS_Store      # Archivos basura de macOS
dist           # Evita subir versiones compiladas antiguas
.astro         # Caché local de Astro
.vscode        # Configuraciones de tu editor de código
```

---

## 3. `nginx.conf`
Configura el comportamiento del servidor Nginx que expone tu página web (actuando como servidor web y también brindándole "pistas" al sistema de monitoreo).

```nginx
server {
    # Escucha el puerto interno 80
    listen 80;
    server_name localhost;

    # Bloque principal de la web
    location / {
        # Donde Nginx debe buscar los archivos estáticos de tu Astro
        root /usr/share/nginx/html;
        
        # Archivos principales de lectura
        index index.html index.htm;
        
        # Enrutamiento: Si el usuario entra a una URL, busca un archivo, si no existe, 
        # busca una carpeta, si no existe envía todo al index.html (muy útil en Single Page Apps).
        try_files $uri $uri/ /index.html;
    }

    # Bloque Oculto para Monitoreo de Recursos (Vital para DevOps)
    location /stub_status {
        # Habilita el módulo de estado de Nginx
        stub_status on;
        
        # Desactiva los logs de acceso de esta URL para no llenar el disco duro con millones de peticiones internas de monitoreo
        access_log off;
        
        # Permite acceso a cualquiera (Idealmente en Prod se limitaría solo a la IP de Prometheus)
        allow all; 
    }
}
```

---

## 4. `prometheus/prometheus.yml`
El cerebro del monitoreo. Este archivo le dice a la base de datos de Prometheus, a qué contenedores debe tocar la puerta cada ciertos segundos para preguntarles cómo se sienten.

```yaml
global:
  # Intervalo general: se recolectarán datos de rendimiento nuevo cada 15 segundos
  scrape_interval: 15s 

scrape_configs:
  # Trabajo 1: Prometheus se monitorea la salud informática de sí mismo
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  # Trabajo 2: Monitorea el contenedor Exporter de Nginx
  # El "exporter" es el traductor entre Nginx y Prometheus
  - job_name: 'nginx'
    static_configs:
      # Llama por red a la dirección HTTP de tu contenedor exportador en el puerto 9113
      - targets: ['nginx-exporter:9113'] 
```

---

## 5. `docker-compose.yml`
Este es el **Orquestador**. Permite definir, agrupar y correr los 4 servicios de tu arquitectura global al mismo tiempo e interconectados bajo una misma red privada inquebrantable.

```yaml
services:
  # Microservicio 1: Tu Aplicación Web
  webapp:
    build:
      context: .           # Le dice que construya la imagen leyendo la carpeta actual
      dockerfile: Dockerfile # Usar nuestra receta de Dockerfile
    container_name: astro_webapp
    ports:
      - "8080:80"          # Tu compu accede en el puerto 8080, el contenedor responde en el 80
    restart: unless-stopped # Política: Si el servidor físico se reinicia, este contenedor prenderá solo

  # Microservicio 2: El espía de Nginx (Traduce métricas a Prometheus)
  nginx-exporter:
    image: nginx/nginx-prometheus-exporter:latest # Descarga una imagen oficial ya hecha
    container_name: nginx_exporter
    command:
      # Aquí le decimos: "Saca las estadísticas del contenedor hermano 'webapp' en su ruta oculta"
      - "-nginx.scrape-uri=http://webapp:80/stub_status"
    ports:
      - "9113:9113"
    depends_on:
      - webapp             # Este contenedor no va a prender hasta que la web exista
    restart: unless-stopped

  # Microservicio 3: Base de datos de métricas
  prometheus:
    image: prom/prometheus:latest
    container_name: prometheus
    volumes:
      # Sincroniza el archivo local (afuera) con la configuración interna del contenedor (adentro)
      - ./prometheus/prometheus.yml:/etc/prometheus/prometheus.yml
    ports:
      - "9090:9090"        # Puerto donde verás la API y UI cruda de Prometheus
    depends_on:
      - nginx-exporter
    restart: unless-stopped

  # Microservicio 4: Panel visual 
  grafana:
    image: grafana/grafana:latest
    container_name: grafana
    ports:
      - "3000:3000"        # Puerto de tu panel principal visual
    environment:
      # Inyecta variables de entorno con credenciales de seguridad iniciales
      - GF_SECURITY_ADMIN_USER=admin
      - GF_SECURITY_ADMIN_PASSWORD=admin
    depends_on:
      - prometheus         # No enciende sin Prometheus ya listo
    restart: unless-stopped
```

---

## 6. `deploy.sh`
Tu archivo de **Automatización de Infraestructura**. Es un script en lenguaje Bash que resume docenas de sub-comandos técnicos en un solo doble-click o enter para el humano operador.

```bash
#!/bin/bash
# Le indica a Linux que ejecute este archivo usando la consola Bash

# Seguridad estricta: si cualquier comando inferior falla o tira error crítico,
# obliga la cancelación total e inmediata del script para evitar romper el servidor
set -e

echo "🚀 Iniciando despliegue de Astro Web App y Stack de Monitoreo..."
echo "----------------------------------------------------------------"

echo "🧹 [1/3] Limpiando infraestructura anterior (si existe)..."
# Desconecta red, elimina recursos y limpia el ambiente anterior de orquestación
sudo docker compose down

echo "🏗️  [2/3] Construyendo contenedores (esto puede tomar varios segundos)..."
# Manda a compilar de nuevo usando el Dockerfile la nueva versión del código fuente Astro
# --no-cache: le exige que compile dese cero y no recicle pedazos antiguos
sudo docker compose build --no-cache webapp

echo "🚀 [3/3] Levantando los microservicios en background..."
# Levanta los 4 servicios integrándolos
# -d (detached): Libera la terminal y deja los servicios corriendo eternamente por detrás vivos
sudo docker compose up -d

echo "✅ ¡Despliegue automatizado finalizado con éxito!"
```
