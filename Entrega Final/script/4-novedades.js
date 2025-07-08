let productosNovedades = []; // almacenar los productos
const API_URL = 'https://openlibrary.org/dev/docs/api/recentchanges'; // agregados recientes q es lo mas parecido a novedades

// 1. Función para realizar la petición a la API
async function llamarAPI(API) {
    try{
        const response = await fetch(API);

        if (!response.ok) {
            throw new Error(`Error HTTP! estado: ${response.status}`);
        }

        productosNovedades = await response.json(); // Almacenamos todos los productos
        return productosNovedades;
    } catch (error) {
        console.error('Error al obtener los productos de la API:', error);
        return [];
    }
}

// 2. Función que recibe un producto y crea su elemento HTML como una cadena de texto

function Producto(producto) {
    
    const displayTitle = producto.title.substring(0, 20) + '...';

    return `
    <div class="producto">
        <img src="${producto.image}" alt="${producto.title}">
        <div class="producto-descripcion">
            <span>${producto.category}</span>
            <h5>${displayTitle}</h5>
            <h4>$${producto.price.toFixed(2)}</h4>
        </div>
        <a id="btn-agregar-${producto.id}" class="carrito">
            <i class="fal fa-shopping-cart"></i>
        </a>
    </div>
    `;
}

// 3. Función que inserta los productos en el contenedor HTML y luego adjunta los eventos
function dibujarDatos(json) {
    const filas = json.map(obj => Producto(obj));
    document.querySelector('.novedades-container').innerHTML = filas.join('');

    adjuntarEventosCarrito();
}

// 4. Agregamos productos a localStorage y adjuntamos los eventos al boton
function adjuntarEventosCarrito() {
    productosNovedades.forEach(producto => {
        const boton = document.getElementById(`btn-agregar-${producto.id}`);
        if (boton) { // Asegurarse de que el botón exista
            boton.addEventListener('click', () => {
                agregarProductoAlCarrito(producto); // Llama a la función para agregar al carrito
            });
            
        }
    });
}

// 5. Función para agregar productos a localStorage
function agregarProductoAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

    const indiceProductoExistente = carrito.findIndex(item => item.id === producto.id);

    if (indiceProductoExistente !== -1) {
        carrito[indiceProductoExistente].cantidad++;
    } else{
        carrito.push({ 
            id: producto.id, 
            title: producto.title,
            author: producto.author,
            price: producto.price,
            image: producto.image,
            cantidad: 1 
        });
    }

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
    alert(`${producto.title} agregado al carrito!`);
}

// Llamar a la función principal para que se ejecute cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', async () => {
    await llamarAPI(API_URL); 
    if (productosNovedades.length > 0) {
        console.log(productosNovedades);
        dibujarDatos(productosNovedades); 
    }
});
