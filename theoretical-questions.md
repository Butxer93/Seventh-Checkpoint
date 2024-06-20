### ¿QUÉ DIFERENCIA A JAVASCRIPT DE CUALQUIER OTRO LENGUAJE DE PROGRAMACIÓN?
JavaScript se depura en una fase y Java en dos. JavaScript hace que el código trabaje informando de los errores que se producen a medida que se está ejecutando. Mientras que Java primero hace la fase de compilación y este nos indica los posibles errores de sintaxis presentes en nuestro código.  
  
JavaScript es un lenguaje interpretado, lo que significa que no necesita ser compilado antes de ser ejecutado. En otras palabras, no necesita traducir el código fuente (el escrito por la persona) en lenguaje de máquina para poder ejecutarse. Además, Javascript es un lenguaje que permite programar sin necesidad de crear clases y a diferencia de Java no requiere hacer la programación orientándose a objetos, aunque sí lo permite.  
  
Los navegadores web modernos tienen un motor JavaScript incorporado que interpreta y ejecuta el código directamente. Al ejecutarse línea por línea o en pequeñas secciones, permite que los errores se detecten y se notifiquen de inmediato.  
  
JavaScript es un lenguaje débilmente tipado y dinámico. Las variables en JavaScript no están asociadas directamente con ningún tipo de valor en particular, y a cualquier variable se le puede asignar (y reasignar) valores de todos los tipos:  
![imagen01](/images/01.png)  
  
___
### ¿CUÁLES SON ALGUNOS TIPOS DE DATOS JS?
Cuatro de los tipos de datos primitivos de JavaScript son los siguientes:  
  
- String: se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits. Cada elemento del String ocupa una posición en la cadena. El primer elemento está en el índice 0, el siguiente en el índice 1, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene. A diferencia de algunos lenguajes de programación (tal como C), las cadenas de JavaScript son inmutables. Esto significa que una vez que se crea una cadena, no es posible modificarla.  
- Number: es un valor en formato binario de 64 bits de doble precisión IEEE 754 (números entre -(253 - 1) y 253 - 1). Además de representar números de punto flotante, el tipo Number tiene tres valores simbólicos: +Infinity, -Infinity y NaN ("Not a Number" o No es un número). En otros lenguajes de programación puede existir diferentes tipos numéricos, por ejemplo: Integers, Floats, Doubles, or Bignums.  
- Undefined:Una variable a la que no se le ha asignado un valor tiene el valor undefined.  
- Boolean: representa una entidad lógica y puede tener dos valores: true y false.  
![imagen02](/images/02.png)  
  
Nos encontraremos que muchas veces no resulta tan sencillo saber que tipo de dato tiene una variable, o simplemente viene oculto porque el valor lo devuelve una función o alguna otra razón similar. Si tenemos dudas, podemos utilizar la función typeof, que nos devuelve el tipo de dato de la variable que le pasemos por parámetro. Veamos que nos devuelve typeof() sobre las variables de la imagen superior anterior:  
![imagen03](/images/03.png)  
  
La función typeof() no nos servirá para variables con tipos de datos más complejos, ya que siempre los mostrará como object. Es mejor utilizar constructor.name. Sólo funciona en variables definidas (no undefined).  
![imagen04](/images/04.png)  
  
___
### ¿CUÁLES SON LAS TRES FUNCIONES DE STRING EN JS?
Existen decenas de métodos o funciones para las cadenas de texto (String) en JavaScript, pero a continuación las agruparemos en base a lo que realizan:  
  
- Funciones modificadoras: aquí situaremos los métodos cuyo objetivo es alterar el formato de la cadena o la cadena en sí misma. Tendríamos funciones como toUpperCase(), toLowerCase() o replace(). Como veremos en la siguiente imagen, la función toUpperCase() altera la cadena original para mostrar todos los carácteres en mayúscula, la función toLoerCase() altera la cadena original para mostrar todos los carácteres en minúscula, la función replace() intercambia el carácter o los carácteres indicados en primera posición por el o los indicados en la segunda posición dentro del paréntesis.  
![imagen05](/images/05.png)  
  
- Funciones para extraer subcadenas o carácteres: aquí situaremos los métodos cuyo objetivo es coger (y en algunos casos intercambiar) un fragmento de la cadena original, ya sea marcando el inicio y final del corte o sólo el inicio. Tendríamos funciones como substring(), slice() o split(). Como veremos en la siguiente imagen, la función substring() y la función slice() parecen realizar la misma acción, pero en verdad slice() nos permite que los índices sean negativos, para poder así buscar desde el final del string. Por otro lado, split() nos devuelve un array con todas las subcadenas resultantes de dividir la cadena original en subcadenas delimitadas por el carácter separador especificado (que queda excluido). Si se indican unas comillas vacías se extraen todos los caracteres a un array.  
![imagen06](/images/06.png)  
  
- Funciones para recuperar índices de posiciones: aquí situaremos los métodos cuyo objetivo es situar el caracter o conjunto de carácteres que deseemos encontrar en la cadena original. Tendríamos funciones como charAt(), indexOf() o lastIndexOf(). Como veremos en la siguiente imagen, charAt() nos devuelve el carácter situado en la posición indicada, las funciones indexOf() y lastIndexOf() realizan lo mismo (devolver el índice de la primera aparición de la cadena especificada) solo que una desde el inicio y la otra en sentido contrario, es decir, desde el final como se indica en sus nombres.  
![imagen07](/images/07.png)  
  
___
### ¿QUÉ ES UN CONDICIONAL?
Los condicionales son estructuras que permiten elegir entre la ejecución de una acción u otra. Son una condición, como bien indica su nombre, así que podemos pensar en ellos como si fueran el “si” condicional que usamos dentro de una frase. Por eso, utilizando la palabra en inglés, podemos expresar un condicional dentro de un código como IF.  
If evalúa la condición dentro del paréntesis () como una expresión booleana: verdadera o falsa. Estas expresiones se obtienen usando los operadores de comparación ==, ===, >, <, >=, <=, !==, !=. Si la condición es verdadera (true), se ejecuta el código dentro de las llaves {}. Si la condición resulta falsa (false), el bloque de código se omite.  
![imagen08](/images/08.png)  
  
La sentencia switch es una alternativa a múltiples sentencias condicionales anidadas. Úsala para comparar algún valor con varias opciones (cases) a la vez y ejecutar el fragmento de código correspondiente. Cuando el programa llegue a la indicación break, sale de la sentencia switch. Si no se encuentra ninguna coincidencia, se ejecuta la cláusula predeterminada (default).  
![imagen09](/images/09.png)

___
### ¿QUÉ ES UN OPERADOR TERNARIO?
El operador ternario es una alternativa al condicional if/else de una forma mucho más compacta y breve, que en muchos casos resulta más legible. Sin embargo, hay que tener cuidado, porque su sobreutilización puede ser contraproducente y producir un código más difícil de leer. La sintaxis de un operador ternario es la siguiente:  
![imagen10](/images/10.png)  
  
___
### ¿CUÁL ES LA DIFERENCIA ENTRE UNA DECLARACIÓN DE FUNCIÓN Y UNA EXPRESIÓN DE FUNCIÓN?
Las funciones son valores. Se pueden asignar, copiar o declarar en cualquier lugar del código. Si la función se declara como una declaración separada en el flujo del código principal, eso se llama “Declaración de función”. Si la función se crea como parte de una expresión, se llama “Expresión de función”. Las Declaraciones de Funciones se procesan antes de ejecutar el bloque de código. Son visibles en todas partes del bloque. Las Expresiones de Función se crean cuando el flujo de ejecución las alcanza.  
  
En la mayoría de los casos, cuando necesitamos declarar una función, es preferible una Declaración de Función, ya que es visible antes de la declaración misma. Eso nos da más flexibilidad en la organización del código, y generalmente es más legible. Por lo tanto, deberíamos usar una Expresión de Función solo cuando una Declaración de Función no sea adecuada para la tarea.  
A continuación veremos un ejemplo de declaración de función y su ejecución:  
![imagen11](/images/11.png)  
  
A continuación veremos un ejemplo de expresión de función y su ejecución:  
![imagen12](/images/12.png)  
  
___
### ¿QUÉ ES LA PALABRA CLAVE "THIS" EN JS?
La palabra clave this de una función se comporta un poco diferente en Javascript en comparación con otros lenguajes. Además tiene algunas diferencias entre el modo estricto y el modo no estricto.  
  
En general, el valor de this está determinado por cómo se invoca a la función. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada. ES5 introdujo el método bind() para establecer el valor de la función this independientemente de como es llamada, y ES2015 introdujo las funciones flecha que no proporcionan su propio "binding" de this (se mantiene el valor de this del contexto léxico que envuelve a la función).  
![imagen13](/images/13.png)  
