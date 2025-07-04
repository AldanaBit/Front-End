let productosGlobales = []; // para almacenar todos los productos obtenidos
const API_URL = 'https://fakestoreapi.com/products';

// 1 Funcion para realizar la peticion a la API
async function llamarAPI(API) {
    try{
        const response = await fetch(API);
        if (!response.ok) {
            throw new Error(`Error HTTP! estado: ${response.status}`);
        }
        productosGlobales = await response.json(); // almacenar todos los productos
        return productosGlobales;
    } catch(error){
        console.log('Error al obtener los productos de la API:',error);
        return [];
    }
}

// 2 Funcion q recibe un roducto y crea su elemento HTML como una cadena de texto

function Producto(producto) {
    // substring() extrae una parte de una cadena de texto.
    // Se le indican dos posiciones: una donde empieza a cortar
    // y otra donde termina (sin incluir ese ultimo caracter).
    const displayTittle = producto.tittle.substring(0,20)+ '...';

    // Se utiliza un template literal para construir todo 
    // el HTML
    return `
                <div class="producto">
                    <img src="${producto.image}" alt="${producto.tittle}">
                    <div class="producto-descripcon">
                        <span>${producto.category}</span>
                        <h5>${displayTittle}</h5>
                        <h4>$${producto.price.toFixed(2)}</h4>
                    </div>
                    <a id="btn-agregar-${producto.id}" class="carrito">
                        <i class="fal fa-shopping-cart"></i>
                    </a>
                </div>            
            `;
}

// 3 Funcion q inserte los productos en el contenedor HTML y luego adjunta los eventos
function dibujarDatos(json) {
    const filas = json.map(obj => Producto(obj));
    document.querySelector('.productos-container').innerHTML = filas.join('');

    // IMPORTANTE: Adjuntar los eventos DESPUES de q el HTML este en el DOM
    adjuntarEventosCarrito();
}

// 4 Agregamos productos a localStorage
// adjuntamos los eventos al boton
function adjuntarEventosCarrito() {
    productosGlobales.forEach(producto =>{
        const boton = document.getElementById(`btn-agregar-${producto.id}`);
        if (boton) { // asegurarse de q el boton exista
           boton.addEventListener('click',() =>{
                // cuando se hace click, ya tenemos acceso al objeto 'producto' original
            agregarProductoAlCarrito(producto); // llama a la funcion para agregar al carrito
           });
        }
    });
}

// 5 Agregamos productos a localStorage
function agregarProductoAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

    const indiceProductoExistente = carrito.findIndex(item.id === producto.id);

    if (indiceProductoExistente !==-1) {
        carrito[indiceProductoExistente].cantidad++;
    } else{
        carrito.push({
            id: producto.id,
            tittle: producto.tittle,
            price: producto.price,
            image: producto.image,
            camtidad: 1
        });
    }

    localStorage.setItem('carritoDeCompras',JSON.stringify(carrito));
    alert(`${producto.tittle} agregado al carrito!`);
    // opcional: puede emitir un evento o actualizar un contador de carrito aqui
}

// Llamar a la funcon principal para q se ejecute cuando el DOM este cargado
document.addEventListener('DOMContentLoaded',async () =>{
    await llamarAPI(API_URL); // Esperar a q se carguen los productos
    if (productosGlobales.length > 0) {
        console.log(productosGlobales)
        dibujarDatos(productosGlobales); // dibujar y adjuntar eventos
    }
})