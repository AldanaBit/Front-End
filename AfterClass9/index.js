/* Una variable es como una "caja" 

3 tipos de declarar variables:
- var (antigua, no recomendada)
-let (moderna, recomendada)
-const (para valores que no cambian)
*/

//Declaramos variables con let
let miNombre; // variable declarada pero sin valor
let miEdad = 25; // variable declarada con valor inicial
let miCiudad = "Madrid"; // variable texto




/*  TIPOS DE DATOS EN JAVASCRIPT 
JavaScript tiene varios de datos principales: 
*/

//NUMEROS (numbers)
let entero = 42; //numeros enteros
let decimal = 3.24; //numeros decimales
let negativo = -10; //numeros negativos

console.log("Ejemplo de numeros:");
console.log("Entero : ", entero);
console.log("Decimal : ", decimal);
console.log("Negativo : ", negativo);

//TEXTOS (strings)
let nombre = "Ana"; //con comillas dobles
let apellido = 'Garcia'; //con comillas simples
let mensaje = `Hola ${nombre}`; //con template literals (backticks)

console.log("Ejemplo de texto: ");
console.log("Nombre : ", nombre);
console.log("Apellido : ", apellido);
console.log("Mensaje : ", mensaje);

//BOOLEANOS (true/false)
let esEstudiante = true; 
let  esMayor = false; 

console.log("Ejemplo de booleanos: ");
console.log("Es estudiante? ", esEstudiante);
console.log("Es mayor?", esMayor);

//Verificar tipo de variable
console.log()
console.log("Tipo de 'entero'", entero)

//cambiar el valor de las variables (pero NO de las constantes)
let contador = 0;
console.log("Contador inicial", contador);

contador = 5;
console.log("Contador dsps del cambio: ", contador);

contador = contador + 1;
console.log("Contador incrementado: ", contador);

contador ++;
console.log("Contador con ++: ", contador);

let variable = 10;
console.log("Variable como numero : ", variable, typeof variable);

variable = "Ahora soy texto";
console.log("Variable como texto ", variable, typeof variable);

//OPERADORES ARITMETICOS
console.log("Division (a/b):", a / b);
console.log("Multiplicacion (a * b): ", )

//INCREMENTO O DECREMENTO
let x = 5;
console.log("x inicial:", x);
console.log("x++ (post-incremento): ", x++);
console.log("x despues de x++: ", x);
console.log("++x (pre-incremento): ", ++x);

//Tenemos algunos datos como texto
let edadTexto = "25";
let alturaTexto = "1.75";
let numeroConEspacios = " 42 ";

console.log("Datos originales (como texto):");
console.log("Edad:", edadTexto, "Tipo:", typeof edadTexto);
console.log("Altura:", alturaTexto, "Tipo:", typeof alturaTexto);
console.log("Numero con espacios:", numeroConEspacios, "Tipo:", typeof numeroConEspacios);

//Conversion a entero con parseInt()
let edadNumero = parseInt(edadTexto);
let numeroLimpio = parseInt(numeroConEspacios);

console.log("Despues de parseInt():");
console.log("Edad como numero: ", edadNumero, "Tipo: ", typeof edadNumero);
console.log("Numero limpio:", numeroLimpio, "Tipo:", typeof numeroLimpio);

//Conversion a flotante con parseFloat()
let alturaNumero = parseFloat(alturaTexto);
let piTexto = "3.14";
let piNumero = parseFloat(piTexto);

console.log("Despues de parseFloat():");
console.log("Altura como numero:", alturaNumero, "Tipo:", typeof alturaNumero);
console.log("PI como numero:", piNumero, "Tipo:", typeof piNumero);

//Conversion automatica con Number()

// que pasa con texto que no es numero?
let textoInvalido = "123abc";
let resultadoParseInt = parseInt(textoInvalido);
let resultadoNumber = Number(textoInvalido);

console.log("Conversiones de texto invalido:");
console.log("paseInt('abc123'):", resultadoParseInt);
console.log("Number('abc123'):", resultadoNumber);

//Verificar si algo es un numero valido
console.log("Es 25 un numero valido?", !isNaN(25));
console.log("Es 'abc' un numero valido?", !isNaN('abc'));

//conversion de numero a texto
let numeroOriginal = 123.456;
let numeroComoTexto = numeroOriginal.toString();


/* EJERCICIOS:
1- Crear variables para tu informacion personal:
* Nombre, apellido, edad, ciudad
*Mostrarlas en la consola

2- Calculadora simple:
*Crear dos numeros
*Hacer todas las operaciones matematicas
*Mostrar los resultados

3- Conversor de temperatura:
*Contertir 25°C a Fahrenheit
*Formula : (celsius * 9/5) + 32

4- Calculadora de propina:
*Precio de la cuenta: "45.80"
*Porcentaje de propina: "15"
*Calcular la propina y el total


*/