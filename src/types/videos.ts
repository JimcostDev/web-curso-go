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
  {
    title: '🏆 Reto #2 en Go: Promedios con Generics y Tipos Personalizados 🚀',
    youtubeId: 'URdqtCTfYd4',
    repoPath: 'tree/master/exercises/challenge02.go',
    description: 'En este segundo reto práctico, combinamos dos conceptos fundamentales de Go: tipos personalizados (type) y funciones genéricas (generics). Vamos a construir una función que calcule promedios y utilizar un tipo personalizado para representar calificaciones. ¡Ideal para reforzar lo aprendido!'
  },
  {
    title: '🔀 Condicionales en Go: Estructuras de Control (Selección) 🚀',
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
    title: '📌 Calcula tu IMC y Peso Ideal con Go! 🚀',
    youtubeId: 'gafYwDD0lfI',
    repoPath: 'tree/master/exercises/imc.go',
    description: 'En este video, aprenderás a programar un algoritmo para calcular el Índice de Masa Corporal (IMC) y determinar tu peso ideal según la OMS.'
  },
  {
    title: '🔁 Bucles en Go: for, while, range, break y continue 🚀',
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
  
  
];
