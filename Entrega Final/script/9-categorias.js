document.addEventListener('DOMContentLoaded', () =>{
    const contenedorCategorias = document.querySelector('.categorias-container');
    const contenedorBotones = document.querySelector('.botones-categorias');

    let productosCargados = [];
    const libros = '../data/productos.json';


    fetch(libros)
    .then(responsive => responsive.json())
    .then(data => {
        productosCargados = data;
        const categorias = [...new
            Set(data.map(producto => producto.categoria))];

        categorias.forEach(categoria =>{
            const boton = document.createElement('button');
            boton.textContent = categoria;

            boton.classList.add('btn-categoria');
            boton.addEventListener('click', () => mostrarProductosPorCategoria(categoria));
            contenedorBotones.appendChild(boton);
        });
    });

    function mostrarProductosPorCategoria(categoriaSeleccionada) {
        contenedorCategorias.innerHTML = '';

        const filtrados = productosCargados.filter(producto => producto.categoria === categoriaSeleccionada);
        filtrados.forEach(prod =>{
            const card = document.createElement('div');
            card.classList.add('producto-card');
            card.innerHTML = ` 
                                <img src="${prod.img}" alt="${prod.titulo}">
                                <h3>${prod.titulo}</h3>
                                <p>${prod.autor}</p>
                                <p>${prod.idioma}</p>
                                <p>${formatearPrecio(prod.precio)}</p>
                                <a href="#" class="carrito" id="btn-agregar-${prod.id}">
                                    <i class="fal fa-shopping-cart"></i>
                                </a>
                            `;

            contenedorCategorias.appendChild(card);              
        });

        adjuntarEventosCarrito();
    }

    function adjuntarEventosCarrito() {
        productosCargados.forEach(producto => {
            const boton = document.getElementById(`btn-agregar-${producto.id}`);

            if (boton) {
                boton.addEventListener('click', (e) => {
                    e.preventDefault();
                    agregarProductoAlCarrito(producto);
                });
            }
        });
    }

    function agregarProductoAlCarrito(producto) {
        let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

        const indiceProducto = carrito.findIndex(item => item.id === producto.id);

        if (indiceProducto !== -1) {
            carrito[indiceProducto].cantidad++;
        } else {
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
    
});