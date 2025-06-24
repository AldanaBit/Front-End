document.addEventListener('DOMContentLoaded', () => {
    const productosDisponibles = [
        {id: '1', nombre: 'Camiseta', precio: 25.00},
        {id: '2', nombre: 'Pantalon', precio: 40.00},
        {id: '3', nombre: 'Zapatillas', precio: 60.00},
        {id: '4', nombre: 'Gorra', precio: 15.00},
    ];

    const contedorListaProductos = document.getElementById('contenedorListaProductos')

    function renderizarProductos() {

        // usamos map para transformar cada objeto producto en un string HTML
        const productosHtml = productosDisponibles.map(producto => {
            return `
                        <div class="item-producto">
                            <h2>${producto.nombre}<h2>
                            <p>Precio: $${producto.precio.toFixed(2)}</p>
                            <button class="btn-agregar-carrito" id:"btn-agregar-${producto.id}">
                            Agregar al carrito </button>
                        </div>    
                    `;
        });
        // unimos todos los strings HTML y los insertamos en el contenedor
        contedorListaProductos.innerHTML = productosHtml.join('')

        // una vez que el HTML esta en el DOM, podemos seleccionar los botones y adjuntarles los eventos
        adjuntarEventosAgregarCarrito();
    }

    function adjuntarEventosAgregarCarrito(){
        // recorremos el array original de productos para adjuntar eventos
        // usamos el ID del producto para encontrar el boton correspondiente
        productosDisponibles.forEach(producto => {
            const boton = document.getElementById(`btn-agregar-${producto.id}`)
            if(boton){ // asegurarse que el boton exista
                boton.addEventListener('click', () => {
                    // cuando hace click, ya tenemos acceso al objeto 'producto' original
                    agregarProductosAlCarrito(producto);
                })
            }
        })
    }

    function agregarProductosAlCarrito(productoAAgregar){
        let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

        const indiceProductoExistente = carrito.findIndex(item => item.id === productoAAgregar.id);

        if (indiceProductoExistente !== -1){
            carrito[indiceProductoExistente].cantidad++;
        }else {
            carrito.push({
                id: productoAAgregar.id,
                nombre: productoAAgregar.nombre,
                precio: productoAAgregar.precio,
                cantidad: 1
            });
            
        }

        localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
        alert(`${pr}`)
    }

    renderizarProductos()
})

// --- Explicacion sobre