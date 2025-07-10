function numeroAleatorio(min,max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

let productosGlobal = [];

document.addEventListener('DOMContentLoaded', () =>{
    fetch('../data/productos.json')
    .then(response => response.json())
    .then(data => {
        productosGlobal = data.map(producto => ({
            ...producto,
            stock: producto.stock ?? numeroAleatorio(1,50)
        }));

        localStorage.setItem('productos', JSON.stringify(productosGlobal));

        cargarFiltos(productosGlobal);
        dibujarProductos(productosGlobal);
    })

    .catch(error => {
        console.error('Error al cargar productos:', error);
        document.getElementById('catalogo-container').innerHTML = `<p>Error al cargar el catálogo</p>`;
    });

    document.getElementById('btnBuscarCatalogo').addEventListener('click', aplicarFiltros);
    document.getElementById('filtroCategorias').addEventListener('change', aplicarFiltros);
    document.getElementById('filtroIdioma').addEventListener('change', aplicarFiltros);
});

function cargarFiltos(productos) {
    const categorias = [...new
        Set(productos.map(prod => prod.categoria))];
    const idiomas = [...new
        Set(productos.map(prod => prod.idioma))];
         
    const seleccionCategoria = document.getElementById('filtroCategorias');
    const seleccionIdioma = document.getElementById('filtroIdioma');
    
    categorias.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        seleccionCategoria.appendChild(option);
    });

    idiomas.forEach(idioma => {
        const option = document.createElement('option');
        option.value = idioma;
        option.textContent = idioma;
        seleccionIdioma.appendChild(option);
    });
}

function aplicarFiltros() {
    const texto = document.getElementById('buscadorCatalogo').value.trim().toLowerCase();
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


function dibujarProductos(productos) {
    const container = document.getElementById('catalogo-container');
    container.innerHTML = productos.map(crearProductoHTML).join('');
}

function crearProductoHTML(producto) {
    return ` 
                <div class="producto-card">
                    <div class= "producto">
                        <img src="${producto.img}" alt="${producto.nombre}" class= "producto-imagen">
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

