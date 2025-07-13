// la 1° vez aparecen aleatorios y que a partir de la 2° aparezcan teniendo en cuenta que fue lo que viste/buscaste anteriormente
// historial localStorage
// si no hay historial muestra libros aleatorios
// si hay historial las recomendaciones se filtran por categoria/ idioma

// quise usar API pero no lo logre asi que voy a usar el .json

document.addEventListener('DOMContentLoaded', async () =>{
    const contenedor = document.querySelector('.recomendaciones-container');
    contenedor.innerHTML = 'Cargando recomendaciones...'

    try {
        const response = await fetch('../data/productos.json');
        const productos = await response.json();

        // historial
        const historial = JSON.parse(localStorage.getItem('historialCategorias')) || [];

        let productosFiltrados = productos.filter(prod => historial.includes(prod.categoria) || historial.includes(prod.idioma));


        if (productosFiltrados.length === 0) {
            productosFiltrados = productos.sort(() => 0.5 - Math.random()).slice(0, 6);
        }

        contenedor.innerHTML = '';

        productosFiltrados.forEach(producto => {
            const card = document.createElement('div');
            card.classList.add('producto-card');

            card.innerHTML = ` 
                                <img src="${producto.img}" alt="${producto.titulo}" class= "producto-imagen">
                                <div class="producto-info">
                                    <span class="producto-categoria">${producto.categoria}</span>
                                    <h3 class="producto-titulo">${producto.titulo}</h3>
                                    <p class="producto-autor">${producto.autor}</p>
                                    <p class="producto-precio">$${producto.precio}</p>
                                    <p class="producto-idioma">${producto.idioma}</p>
                                    <a href="#" class="carrito" id="btn-agregar-${producto.id}">
                                        <i class="fas fa-shopping-cart"></i>
                                    </a>
                                </div>          
                            `; 
            contenedor.appendChild(card);

            const boton = card.querySelector(`#btn-agregar-${producto.id}`);
            boton.addEventListener('click', (e) =>{
                e.preventDefault();

                agregarProductoAlCarrito(producto);
            });
                            
        });
    } catch(error) {
        console.error('Error al cargar las recomendaciones:', error);
        contenedor.innerHTML = 'No se pudieron cargar las recomendaciones. Intenta de nuevo más tarde.';
    }
});

function agregarProductoAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

    const indiceProducto = carrito.findIndex(item => item.id === producto.id);

    if (indiceProducto !== -1) {
        carrito[indiceProducto].cantidad++;
    } else{
        carrito.push({
            id: producto.id,
            titulo: producto.titulo,
            precio: producto.precio,
            img: producto.img,
            cantidad: 1
        });
    }

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
    alert(`${producto.titulo} agregado al carrito.`);
}