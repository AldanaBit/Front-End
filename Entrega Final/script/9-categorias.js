document.addEventListener('DOMContentLoaded', () =>{
    const contenedorCategorias = document.querySelector('.categorias-container');
    const contenedorBotones = document.querySelector('.botones-categorias');

    const libros = '../data/productos.json';


    fetch(libros)
    .then(responsive => responsive.json())
    .then(data => {
        const categorias = [...new
            Set(data.map(producto => producto.categoria))];

        categorias.forEach(categoria =>{
            const boton = document.createElement('button');
            boton.textContent = categoria;

            boton.classList.add('btn-categoria');
            boton.addEventListener('click', () => mostrarProductosPorCategoria(data,categoria));
            contenedorBotones.appendChild(boton);
        });
    });

    function mostrarProductosPorCategoria(productos,categoriaSeleccionada) {
        contenedorCategorias.innerHTML = '';

        const filtrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);
        filtrados.forEach(prod =>{
            const card = document.createElement('div');
            card.classList.add('producto-card');
            card.innerHTML = ` 
                                <img src="${prod.img}" alt="${prod.titulo}">
                                <h3>${prod.titulo}</h3>
                                <p>${prod.autor}</p>
                                <p>${prod.idioma}</p>
                                <p>${formatearPrecio(prod.precio)}</p>
                            `;

            contenedorCategorias   .appendChild(card);              
        });
    }
});