// Funciones
// Agrupar tareas con un nombre

// Pasos
// 1- Declaracion

function saludar() {
    console.log(`Hola, como estas?`)
}

// 2- Ejecucion (llamar a la funcion)

saludar()

// Parametros (variables q viven solo dentro de la funcion)


function saludarPersonalizado(nombre) {
    console.log(`Bienvenido ${nombre}`)
}

saludarPersonalizado(`Agustin`)
saludarPersonalizado(`Oscar`)

// let nombre = prompt(`Cual es tu nombre?`)
// saludarPersonalizado(nombre)

// Parametros multiples

function tablaMultiplicar(tabla, hasta = 10) {
    for (let i = 0; i <= hasta; i++) {
        console.log(tabla + " X " + i + " = " + (tabla * 1));
        
    }
}

tablaMultiplicar(3,5)
console.log(`------------`)
tablaMultiplicar(5)
console.log(`----------------`)
tablaMultiplicar()

/////////////////////////////////

// Devolucion de valores (return)
// generalmente buscamos realizar una tarea y que la funcion
// nos devuelva informacion.
// Se coloca al final de la funcion. Esta termina la 
// ejecucion de la funcion

function saludar2(nombre) {
    return `Hola ${nombre}, bienvenido a Talento Tech`
}
const resultado  = saludar2(`Miguel`); // puede ser let
console.log(resultado)
alert(resultado)

// Funciones anonimas
// Funciones q solamente vamos a declarar la estructura
// y la ejecutamos automaticamente
// Solo declaramos los pasos
// Esto nos permite pasar funciones como argumento a
// otras funciones

const imprimirConsola = function (mensaje) {
    console.log(mensaje)
}

const imprimirAlert = mensaje => alert(mensaje); // funcion flecha

console.log(`-------------------------`)

function saludar3(nombre, mostrar /*funcion */, mostrar2,parametros) {
    let nombre = capturar()
    const mensaje = `Hola ${nombre}`
    mostrar(mensaje)
    mostrar2(mensaje)
}

// saludar3(`Valeria`, imprimirConsola)
// saludar3(`Rocio`,imprimirAlert)
// saludar3(`Fernando`, imprimirConsola)
// saludar3(`Valeria`,imprimirConsola)
// saludar3(`Valeria`,imprimirConsola,imprimirAlert)

const capturar = () => prompt(`Ingresa tu nombre`)
// saludar3(capturar,imprimirConsola)
// saludar3(capturar,imprimirAlert)
console.log(capturar)

///////////////////////////////////////

// Array
// EJ :
// const frutas = ["manzana", "banana", "naranja", "kiwi"];

let miArray = [];
console.log(typeof miArray)

miArray.push(`Agustin`)

console.log(miArray)

// Metodo forEach()
// Se llama al Array y ejecuta una funcion proporcionada
// para cada elemento del Array
console.log(`--------------------------------------`)
const numeros = [1,2,2,4,5,65,7,8,9,9];

numeros.forEach(numero => console.log(numero))

// ej guardar numeros q quiero
let pares = []; // Array pares

numeros.forEach(numero => {
    if (numero % 2 === 0) {
    pares.push(numero);
    }
})

console.log(pares)