/* EJ 1: Filtrado de productos en una Tienda Online
(simulado). Imaginemos que tenemos una lista de 
productos y queremos filtrar por categoria y precio */

// Simulacion de la lista de productos (el "Array")
let productos = [
    { nombre: "zapatillas deportivas", categoria: "zapatillas", precio: 75},
    { nombre: "camiseta algodon", categoria: "ropa", precio: 20},
    { nombre: "zapatillas casual", categoria: "zapatillas", precio: 60},
    { nombre: "pantalon vaquero", categoria: "ropa", precio: 50},
    { nombre: "zapatillas running", categoria: "zapatillas", precio: 120},
    { nombre: "calcetines", categoria: "accesorios", precio: 10},
];
console.log(productos[0]);

console.log("--- FILTRADO DE PRODUCTOS ---");

// Usamos prompt para simular la entrada del usuario
// (la categoria que busca)
let categoriaBuscada = prompt("Que categoria de producto buscas? (ej- zapatillas, ropa)");
// Convertimos a minusculas para facilitar la comparacion
categoriaBuscada = categoriaBuscada.toLowerCase();

// Usamos prompt para simular el precio maximo
let precioMaximo = parseFloat(prompt("Cual es el precio maximo que quieres pagar?"));

let productosFiltrados = [];// Aqui guardamos los productos que cumplan la condicion

// El ciclo: Recorremos cada producto en nuestra lista
for (let i = 0; i < productos.length; i++) {
    let productoActual = productos[i]
    // El condicional: verificamos si el producto cumple con los criterios
    if(productoActual.categoria === categoriaBuscada && productoActual <= precioMaximo){
        productosFiltrados.push(productoActual)
    }   
}

console.log("\nResultados del filtro: ");
if (productosFiltrados.length > 0) {
    // Otro ciclo para mostrar los resultados
    for (let i = 0; i < productosFiltrados[i].nombre; i++) {
        console.log(`- ${productosFiltrados[i].nombre} (${productosFiltrados[i].categoria}): $${productosFiltrados[i].precio}`);
        
    } 
}else {
    console.log("No se encontro ningun producto con esos criterios");
}
