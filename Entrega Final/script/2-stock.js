function numeroAleatorio(min,max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

let productosGlobal = [];

function cargarProductos() {
    fetch('../data/productos.json')
    .then(response => response.json())
    .then(data => {
        productosGlobal = data.map(prod => ({
            ...prod,
            stock: prod.stock ??
            numeroAleatorio(1,50)
        }));
        localStorage.setItem('productos', JSON.stringify(productosGlobal));
        dibujarProductos(productosGlobal);
    })
    .catch(error => {
        console.error('Error al cargar productos:', error);
        document.querySelector('.catalogo-container').innerHTML = `<p>Error al cargar el catálogo</p>`;
    });
}


function dibujarProductos(productos) {
    const productosHTML = productos.map(producto => crearProductoHTML(producto));
    document.querySelector('.catalogo-container').innerHTML = productosHTML.join('');
}

function crearProductoHTML(producto) {
    return ` 
                <div class="producto-card">
                    <div class= "producto">
                        <img src="${producto.imagen}" alt="${producto.nombre}" class= "producto-imagen">
                        <div class="producto-info">
                            <span class="producto-categoria">${producto.categoria}</span>
                            <h3 class="producto-titulo">${producto.titulo}</h3>
                            <p class="producto-autor">${producto.autor}</p>
                            <p class="producto-precio">$${producto.precio}</p>
                            <p class="producto-idioma">${producto.idioma}</p>
                            <p class="producto-stock">Stock: ${producto.stock}</p>
                            <a href="#" class="carrito" onclick="agregarAlCarrito(${producto.id})">
                                <i class="fas fa-shopping-cart"></i>
                            </a>
                        </div>
                    </div>
                </div>            
           ` 
}

function agregarAlCarrito(id) {
    console.log('Producto agregado al carrito:', id);
}



document.getElementById('btnBuscarCatalogo').addEventListener('click', () =>{
    aplicarFiltros();
});

document.getElementById('filtroCategorias').addEventListener('change', aplicarFiltros);
document.getElementById('filtroIdioma').addEventListener('change', aplicarFiltros);

function aplicarFiltros() {
    const texto = document.getElementById('buscadorCatalogo').ariaValueMax.trim().toLowerCase();
    const categoria = document.getElementById('filtroCategorias').value;
    const idioma = document.getElementById('filtroIdioma').value;

    let filtrados = productosGlobal;

    if (texto !== '') {
        filtrados = filtrados.filter(producto => 
            producto.titulo.toLowerCase().includes(texto) ||
            producto.autor.toLowerCase().includes(texto)
        );
    }

    if (categoria !== '') {
        filtrados = filtrados.filter(producto =>
            producto.categoria === categoria
        );
    }

    if (idioma !== '') {
        filtrados = filtrados.filter(producto =>
            producto.idioma === idioma
        );
    }

    dibujarProductos(filtrados);
}

document.addEventListener('DOMContentLoaded', cargarProductos);