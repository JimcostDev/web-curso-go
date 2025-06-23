export interface Video {
  title: string;
  youtubeId: string;
  repoPath: string;
  description: string; 
}

export const videos: Video[] = [
  // Ejemplo: actualiza estos objetos con tus datos reales de la playlist
  {
    title: '🔹 Introducción a Go: ¿Qué es Go y por qué aprenderlo? 🚀',
    youtubeId: 'U-BfNz6ISdw',
    repoPath: '',
    description: 'Bienvenido al primer video del curso de Go. En esta introducción, descubrirás qué es Go, por qué es tan popular y cuáles son sus principales ventajas. También te daré una visión general de lo que cubriremos en el curso y cómo puedes aprovechar al máximo este lenguaje de programación.'
  },
  {
    title: '🛠️ Instalación de Go, Hola Mundo y Configuración del Entorno 🚀',
    youtubeId: 'n1tM86Zzbdw',
    repoPath: 'blob/master/guia_instalacion_go.md',
    description: 'En este video, aprenderás a instalar Go, configurar tu entorno de desarrollo y escribir tu primer programa en Go. También organizaremos el proyecto en paquetes para que esté listo para los próximos videos.'
  },
  {
    title:'🔢 Tipos de Datos en Go: Declaración de Variables y Constantes 🚀',
    youtubeId: '275kxocPtS8',
    repoPath: 'tree/master/fundamentals/data-types.go',
    description: 'En este video, exploraremos las variables y los tipos de datos en Go. Aprenderás a declarar variables, definir constantes y conocerás los tipos de datos más utilizados en Go para escribir código más eficiente y seguro.'
  },
  {
    title:'🛠️ Custom Types en Go: Creando Tipos de Datos Personalizados 🚀',
    youtubeId: 'tHYCRJMaz7Y',
    repoPath: 'tree/master/fundamentals/custom-types.go',
    description: 'En este video, aprenderás sobre Custom Types en Go, una poderosa funcionalidad que permite definir tipos de datos personalizados para mejorar la estructura y legibilidad de tu código. Veremos cómo declarar tipos personalizados, trabajar con constantes y utilizarlos en funciones.'
  },
  {
    title:'🖨️ Salida Formateada en Go: Todo Sobre printf 🚀',
    youtubeId: 'vcMouHIk_R8',
    repoPath: 'tree/master/fundamentals/printf.go',
    description: 'En este video, exploraremos printf en Go, una herramienta clave para formatear texto de manera precisa y profesional. Aprenderás a usar los principales especificadores de formato para mostrar datos de manera eficiente y alineada en la consola.'
  },
  {
    title: '🔗 Punteros en Go: Conceptos y Ejemplo Práctico 🚀',
    youtubeId: 'yi7mftzZPNI',
    repoPath: 'tree/master/fundamentals/pointers.go',
    description: 'En este video, exploraremos los apuntadores (punteros) en Go, una herramienta esencial para manejar direcciones de memoria y optimizar tu código.'
  },
  {
    title: '⌨️ Entrada de Datos en Go: Leer Datos con Scan, Scanln, Scanf y bufio 🚀',
    youtubeId: 'raqsZbDlUCU',
    repoPath: 'tree/master/fundamentals/inputs.go',
    description: 'En este video, aprenderás cómo leer datos en Go utilizando diferentes métodos de entrada. Veremos cómo capturar datos simples, leer líneas completas y manejar formatos específicos.'
  },
  {
    title: '🔄 Generics en Go: Funciones y Tipos Genéricos 🚀',
    youtubeId: 'b4eqRCfKg6c',
    repoPath: 'tree/master/fundamentals/generics.go',
    description: 'En este video, exploraremos Generics en Go, una funcionalidad introducida en Go 1.18 que permite escribir funciones y estructuras reutilizables sin necesidad de duplicar código.'
  },
  {
    title: '🏆 Reto #1 en Go: Registro de Usuario con Entrada y Formateo 🚀',
    youtubeId: '1UOg2r0BZXs',
    repoPath: 'tree/master/exercises/challenge01.go',
    description: '¡Es hora de poner en práctica lo aprendido! En este primer reto de programación en Go, crearemos un registro de usuario donde el programa capturará y mostrará los datos de forma organizada.'
  },
  
];
