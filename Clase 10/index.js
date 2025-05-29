let temperatura = 25

if (temperatura > 20) {
    //codigo que se ejecuta si la condicion es verdadera
    console.log("Usa ropa ligera");
}

// if-else tenemos dos caminos posibles
let nota = 7;
let resultado;
if (nota > 6) {
    resultado = "Aprobado"
    if (nota < 8) {
        resultado += " menor a 8" // += concateno
    }
} else{
    resultado = "Reprobado"
}

console.log(resultado)

// else- if multiples condiciones
let puntuacion = 85;
let calificacion;
if (puntuacion >= 90) {
    calificacion = 'Excelente'
} else if (puntuacion >= 80){
    calificacion = 'Muy buena'
} else if (puntuacion >= 70){
    calificacion = 'Bueno'
} else if (puntuacion >= 60){
    calificacion = 'Reular'
} else {
    calificacion = 'Insuficiente'
}
console.log(calificacion)

// operador ternario
// sintaxis : condicion ? valor_si_verdadero : valor_si_falso
let esMayorEdad = 20;
let mayor = esMayorEdad >= 18 ? "mayor de edad" : "menor de edad"
console.log("Es " + mayor)
console.log(`Es ${mayor}`) // concateno con ``

// swith multiples casos
let diaSemana = 3;
switch (diaSemana) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;                
    default:
        console.log('No es un dia de la semana')
        break;
}
console.log("Sigo por aca!")

// FOR cantidad definida de repeticiones
// sintaxis = for (inicio; condicion; incremento){}
let total = 0;
for (let i = 1; i <= 10; i++){
    console.log(total += i);
}

// recorremos un array
let frutas = ["manzana", "naranja", "banana", "uva", 1, true, total]

console.log(frutas[6])
console.log(frutas.length)
for (let i = 0; i < frutas.length; i++) {
    // (let i = frutas.length -1; i >= 0; i--) recorre de atras para adelante 
    console.log(frutas[i])
}
console.log("Sigo por aca!")

let cuentaRegresiva = [];
cuentaRegresiva.push(3);
console.log(cuentaRegresiva[0])

// break
let primeroPositivo = [];
let valores = [1, 3, -2, 5, 7, -1, 9]

for (let i = 0; i < valores.length; i++) {
    if (valores[i] < 0) {
        continue; //salta la ejecucion cada vez q encuentra un - y sigue
        //break; rompe y corta
    }
    primeroPositivo.push(valores[i]);
}
console.log(primeroPositivo)