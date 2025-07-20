export interface Video {
  title: string;
  youtubeId: string;
  repoPath: string;
  description: string; 
}

export const videos: Video[] = [
  // Ejemplo: actualiza estos objetos con tus datos reales de la playlist
  {
    title: '🚀 Introducción a Go: ¿Qué es Go y por qué aprenderlo? ',
    youtubeId: 'U-BfNz6ISdw',
    repoPath: '',
    description: 'Bienvenido al primer video del curso de Go. En esta introducción, descubrirás qué es Go, por qué es tan popular y cuáles son sus principales ventajas. También te daré una visión general de lo que cubriremos en el curso y cómo puedes aprovechar al máximo este lenguaje de programación.'
  },
  {
    title: '🛠️ Instalación de Go, Hola Mundo y Configuración del Entorno ',
    youtubeId: 'n1tM86Zzbdw',
    repoPath: 'blob/master/guia_instalacion_go.md',
    description: 'En este video, aprenderás a instalar Go, configurar tu entorno de desarrollo y escribir tu primer programa en Go. También organizaremos el proyecto en paquetes para que esté listo para los próximos videos.'
  },
  {
    title:'🔢 Tipos de Datos en Go: Declaración de Variables y Constantes ',
    youtubeId: '275kxocPtS8',
    repoPath: 'tree/master/fundamentals/data-types.go',
    description: 'En este video, exploraremos las variables y los tipos de datos en Go. Aprenderás a declarar variables, definir constantes y conocerás los tipos de datos más utilizados en Go para escribir código más eficiente y seguro.'
  },
  {
    title:'🛠️ Custom Types en Go: Creando Tipos de Datos Personalizados ',
    youtubeId: 'tHYCRJMaz7Y',
    repoPath: 'tree/master/fundamentals/custom-types.go',
    description: 'En este video, aprenderás sobre Custom Types en Go, una poderosa funcionalidad que permite definir tipos de datos personalizados para mejorar la estructura y legibilidad de tu código. Veremos cómo declarar tipos personalizados, trabajar con constantes y utilizarlos en funciones.'
  },
  {
    title:'🖨️ Salida Formateada en Go: Todo Sobre printf ',
    youtubeId: 'vcMouHIk_R8',
    repoPath: 'tree/master/fundamentals/printf.go',
    description: 'En este video, exploraremos printf en Go, una herramienta clave para formatear texto de manera precisa y profesional. Aprenderás a usar los principales especificadores de formato para mostrar datos de manera eficiente y alineada en la consola.'
  },
  {
    title: '🔗 Punteros en Go: Conceptos y Ejemplo Práctico ',
    youtubeId: 'yi7mftzZPNI',
    repoPath: 'tree/master/fundamentals/pointers.go',
    description: 'En este video, exploraremos los apuntadores (punteros) en Go, una herramienta esencial para manejar direcciones de memoria y optimizar tu código.'
  },
  {
    title: '⌨️ Entrada de Datos en Go: Leer Datos con Scan, Scanln, Scanf y bufio ',
    youtubeId: 'raqsZbDlUCU',
    repoPath: 'tree/master/fundamentals/inputs.go',
    description: 'En este video, aprenderás cómo leer datos en Go utilizando diferentes métodos de entrada. Veremos cómo capturar datos simples, leer líneas completas y manejar formatos específicos.'
  },
  {
    title: '🔄 Generics en Go: Funciones y Tipos Genéricos ',
    youtubeId: 'b4eqRCfKg6c',
    repoPath: 'tree/master/fundamentals/generics.go',
    description: 'En este video, exploraremos Generics en Go, una funcionalidad introducida en Go 1.18 que permite escribir funciones y estructuras reutilizables sin necesidad de duplicar código.'
  },
  {
    title: '🏆 Reto #1 en Go: Registro de Usuario con Entrada y Formateo ',
    youtubeId: '1UOg2r0BZXs',
    repoPath: 'tree/master/exercises/challenge01.go',
    description: '¡Es hora de poner en práctica lo aprendido! En este primer reto de programación en Go, crearemos un registro de usuario donde el programa capturará y mostrará los datos de forma organizada.'
  },
  {
    title: '🏆 Reto #2 en Go: Promedios con Generics y Tipos Personalizados ',
    youtubeId: 'URdqtCTfYd4',
    repoPath: 'tree/master/exercises/challenge02.go',
    description: 'En este segundo reto práctico, combinamos dos conceptos fundamentales de Go: tipos personalizados (type) y funciones genéricas (generics). Vamos a construir una función que calcule promedios y utilizar un tipo personalizado para representar calificaciones. ¡Ideal para reforzar lo aprendido!'
  },
  {
    title: '🔀 Condicionales en Go: Estructuras de Control (Selección) ',
    youtubeId: '--sp1XBXSHI',
    repoPath: 'tree/master/flow_control/selection.go',
    description: 'En este video, exploraremos las estructuras de control en Go enfocadas en las condicionales y la selección. Aprenderás a utilizar bloques condicionales con if-else.'
  },
  {
    title: '🎯 Switch en Go: Control de Flujo con Casos Múltiples 🚦',
    youtubeId: 'Teku56BqTJ4',
    repoPath: 'tree/master/flow_control/selection.go',
    description: 'En este video aprenderás a dominar el uso de la estructura switch en Go. Es una forma limpia y poderosa de manejar múltiples condiciones sin escribir muchos if-else. Veremos ejemplos prácticos como identificar el día de la semana o detectar vocales.'
  },
  {
    title: '📌 Calcula tu IMC y Peso Ideal con Go! ',
    youtubeId: 'gafYwDD0lfI',
    repoPath: 'tree/master/exercises/imc.go',
    description: 'En este video, aprenderás a programar un algoritmo para calcular el Índice de Masa Corporal (IMC) y determinar tu peso ideal según la OMS.'
  },
  {
    title: '🔁 Bucles en Go: for, while, range, break y continue ',
    youtubeId: 'vhtuveKqwdY',
    repoPath: 'tree/master/flow_control/iterators.go',
    description: 'En este video aprenderás a utilizar los diferentes tipos de bucles en Go para controlar el flujo de tus programas. Veremos el uso de for tradicional, for tipo while, range, y las instrucciones break y continue. Todo con ejemplos prácticos que te ayudarán a dominar las iteraciones en Go.'
  },
  {
    title: '🏆 Reto #3 en Go: Juego de adivinar el número 🕹️',
    youtubeId: 'GoWZ0-ndJ7c',
    repoPath: 'tree/master/exercises/challenge03.go',
    description: 'En este reto pondrás en práctica lo aprendido sobre bucles, condicionales y números aleatorios en Go creando un divertido juego de adivinanzas. El usuario deberá adivinar un número entre 1 y 100 con un número limitado de intentos. ¿Serás capaz de lograrlo?'
  },
  {
    title: '⚙️ Funciones en Go: Parámetros, Retorno de Valores y Parámetros Variables ',
    youtubeId: 'bPT3mp1j3r0',
    repoPath: 'tree/master/functions',
    description: 'En este video aprenderás todo lo necesario para dominar las funciones en Go, desde las más simples hasta las más avanzadas. Veremos cómo definir funciones con parámetros, retornar valores (simples, múltiples y nombrados) y crear funciones con parámetros variables (variadic).'
  },
  {
    title: '🏆 Reto #4 en Go: ¿Cómo determinar si un número es primo?',
    youtubeId: 'CCVj3-JbeVU',
    repoPath: 'tree/master/exercises/challenge04.go',
    description: 'En este reto pondremos en práctica funciones, condicionales y lógica matemática para determinar si un número es primo y generar una lista de todos los números primos hasta uno dado. Este es un excelente ejercicio para afianzar el uso de funciones y bucles en Go.'
  },
  {
    title: '📦 Arrays en Go: Cómo Usar Arreglos Paso a Paso ',
    youtubeId: 'VU99zN0wQxs',
    repoPath: 'tree/master/data_structure/array.go',
    description: 'En este video aprenderás a trabajar con arrays en Go de manera clara y sencilla. Verás cómo declararlos, inicializarlos y recorrerlos con un bucle for. También exploraremos cómo Go maneja los tipos de datos cuando usamos arrays.'
  },
  {
    title: '🔪 Slices en Go: Cómo Funcionan, Cómo Usarlos y Qué los Hace Poderosos ',
    youtubeId: 'wZG2guabcmE',
    repoPath: 'tree/master/data_structure/slice.go',
    description: 'En este video aprenderás qué son los slices en Go, cómo se diferencian de los arrays y por qué son una de las estructuras más útiles del lenguaje. Exploramos cómo modificarlos, extenderlos con append, crear sub-slices, y hasta combinarlos usando el operador (...).'
  },
  {
    title: '🧠 ¿Array o Slice en Go? Entiende la Diferencia de una Vez por Todas ',
    youtubeId: 'JqO8NLYW7ss',
    repoPath: 'tree/master/data_structure/diff.go',
    description: 'En este video exploramos la diferencia fundamental entre arrays y slices en Go: los arrays se pasan por valor, mientras que los slices se pasan por referencia. Verás ejemplos claros que muestran cómo los cambios afectan (o no) a las variables originales.'
  },
  {
    title: '🗺️ Mapas en Go: Clave-Valor, Uso de make, Búsqueda y Eliminación ',
    youtubeId: 'C_8krw3Nr0Y',
    repoPath: 'tree/master/data_structure/map.go',
    description: 'En este video exploramos cómo trabajar con mapas en Go, una estructura clave-valor esencial para el manejo eficiente de datos. Verás cómo usar make, agregar, eliminar, buscar elementos y recorrer un mapa.'
  },
  {
    title: '🧱 Structs en Go: Crea tus propios tipos y métodos ',
    youtubeId: 'h2GVNam8KpA',
    repoPath: 'tree/master/types/structs.go',
    description: 'En este video exploramos los structs en Go, una poderosa forma de agrupar datos bajo un mismo tipo. Aprenderás cómo crear tus propios tipos personalizados, cómo declarar métodos que operan sobre ellos y por qué es importante el uso de punteros (*) cuando quieres modificar el estado interno del struct.'
  },
  {
    title: '🧩 Interfaces en Go: Polimorfismo y desacoplamiento',
    youtubeId: 'RFCCPJATUnU',
    repoPath: 'tree/master/types/interfaces.go',
    description: 'En este video exploramos el poder de las interfaces en Go. Aprenderás cómo permiten crear código flexible, reutilizable y desacoplado. Verás ejemplos prácticos con luchadores especializados (striker, grappler y all-rounder), demostrando cómo distintos tipos pueden cumplir la misma interfaz sin necesidad de herencia explícita.'
  },
  {
    title: '🏆 Reto #5 en Go: La Conjetura de Goldbach',
    youtubeId: '6Q493vdomjc',
    repoPath: 'tree/master/exercises/challenge05.go',
    description: '¿Sabías que todo número par mayor que 2 puede escribirse como la suma de dos números primos? ¡Eso dice la conjetura de Goldbach! En este reto, la implementamos en Go para descubrir todas las combinaciones posibles.'
  },
  {
    title: '🧯 Manejo de Errores en Go: De err != nil a panic/recover',
    youtubeId: 'a5ShJfMcNAA',
    repoPath: 'tree/master/error_handling',
    description: 'En Go, los errores no se lanzan... ¡se retornan! Este enfoque explícito y minimalista hace que el manejo de errores sea uno de los pilares del lenguaje. En este video abordamos las herramientas clave que Go proporciona para controlar errores.'
  },
  {
    title: '🧵 Concurrencia en Go: Introducción',
    youtubeId: 't14QKe354PA',
    repoPath: 'tree/master/concurrency',
    description: '¿Te suena confuso el concepto de concurrencia? No te preocupes, en este video te lo explico paso a paso para que entiendas qué es, cómo se diferencia del paralelismo y cómo lo implementamos en Go. ¡Todo de forma clara y visual!'
  },
  {
    title: '⚙️ Concurrencia en Go: Goroutines, Canales, Mutex y WaitGroups en Acción',
    youtubeId: 'TjWuo5p3Oxw',
    repoPath: 'tree/master/concurrency',
    description: '¿Ya entiendes la teoría? ¡Ahora vamos a ponerla en práctica con código real en Go! En este video exploramos 4 pilares fundamentales para manejar tareas concurrentes de forma segura y eficiente.'
  },
  {
    title: '🌐 Servicios Web en Go: Introducción al Desarrollo Web',
    youtubeId: 'IV-Z4l1zU4o',
    repoPath: 'tree/master/webserver',
    description: '¿Sabías que cada vez que abres una app o visitas una web, estás interactuando con servicios y APIs que hablan a través de internet? En esta intro al desarrollo web con Go, te explico de forma clara cómo funciona todo ese ecosistema.'
  },
  {
    title: '🕸️ Tu Primer Servidor Web en Go: Rutas, Parámetros y HTML',
    youtubeId: 'Ibl44mwn2vI',
    repoPath: 'tree/master/webserver',
    description: '¿Listo para lanzar tu primer servidor web en Go? En este video construimos un servicio simple con rutas dinámicas, respuestas personalizadas y hasta archivos HTML. ¡Tu backend empieza aquí!'
  },
  
];
