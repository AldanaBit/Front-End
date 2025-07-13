const API_URL = 'https://openlibrary.org/search.json?subject=new&limit=10'; // agregados recientes no me funciono asi q esta es la segunda opcion
let productosNovedades = []; // almacenar los productos

function numeroAleatorio(min,max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

// 1. Función para realizar la petición a la API
async function llamarAPI(url) {
    try{
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error HTTP! Estado: ${response.status}`);
        }

        const data = await response.json();

        // solucion que encontre buscando en internet xq no me estaba funcionandos
        productosNovedades = data.docs.map((item, index) => ({
            id: index + 1,
            title: item.title,
            author: item.author_name?.[0] || 'Autor desconocido',
            price: numeroAleatorio(20000,70000),
            image: item.cover_edition_key?`https://covers.openlibrary.org/b/olid/${item.cover_edition_key}-M.jpg` : `../img/default-book.jpg`,
            category: 'Novedades',
        }));

        localStorage.setItem('novedades', JSON.stringify(productosNovedades));
        return productosNovedades;

    } catch (error) {
        console.error('Error al obtener los productos de la API:', error);
        return [];
    }
}

// 2. Función que recibe un producto y crea su elemento HTML como una cadena de texto

function Producto(producto) {
    
    const tituloRecortado = producto.title.substring(0, 20) + '...';

    return `
    <div class="producto-card">
        <img src="${producto.image}" alt="${producto.title}" class="producto-imagen">
        <div class="producto-info">
            <span class="producto-categoria">${producto.category}</span>
            <h3 class="producto-titulo">${tituloRecortado}</h3>
            <p class="producto-autor">${producto.author}</p>
            <p class="producto-precio">$${producto.price.toFixed(2)}</p>
            <a href="#"  class="carrito" id="btn-agregar-${producto.id}">
                <i class="fas fa-shopping-cart"></i>
            </a>
        </div>    
    </div>
    `;
}

// 3. Función que inserta los productos en el contenedor HTML y luego adjunta los eventos
function dibujarDatos(productos) {
    const contenedor = document.querySelector('.novedades-container');
    contenedor.innerHTML = productos.map(p => Producto(p)).join('');
    adjuntarEventosCarrito();
}



// 4. Agregamos productos a localStorage y adjuntamos los eventos al boton
function adjuntarEventosCarrito() {
    productosNovedades.forEach(producto => {
        const boton = document.getElementById(`btn-agregar-${producto.id}`);
        if (boton) { // Asegurarse de que el botón exista
            boton.addEventListener('click', () => {
                agregarProductosAlCarrito(producto); // Llama a la función para agregar al carrito
            });
            
        }
    });
}

// 5. Función para agregar productos a localStorage
function agregarProductosAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
    const productoExistente = carrito.findIndex(item => item.id === producto.id);

    if (productoExistente !== -1) {
        carrito[productoExistente].cantidad++;
    } else{
        carrito.push({ 
            id: producto.id, 
            titulo: producto.title,
            precio: producto.price,
            img: producto.image,
            cantidad: 1 
        });
    }

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
    alert(`${producto.title} agregado al carrito!`);
}

// Llamar a la función principal para que se ejecute cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', async () => {
    const productos = await llamarAPI(API_URL); 
    if (productos.length > 0) {
        console.log(productos);
        dibujarDatos(productos); 
    } else{
        document.querySelector('.novedades-container').innerHTML = ` <p>No se pudieron cargar las novedades. </p>`;
    }
});
