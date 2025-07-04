document.addEventListener('DOMContentLoaded', () => {
    // Tomamos los elementos

    const contenedorElementosCarrito = document.getElementById('elementosCarrito');
    const elementoTotalCarrito = document.getElementById('totalCarrito');
    const botonVaciarCarrito = document.getElementById('btnVaciarCarrito');

    // --- Explicación sobre JSON.stringify() y JSON.parse() ---
    // localStorage solo puede almacenar cadenas de texto (strings).
    // Si queremos guardar objetos o arrays (como nuestro carrito),
    // necesitamos convertirlos a un string. Para esto, usamos JSON.stringify().
    //
    // Cuando recuperamos el string de localStorage, necesitamos convertirlo
    // de nuevo a un objeto o array de JavaScript para poder trabajar con él.
    // Para esto, usamos JSON.parse().
    // -----------------------------------------------------------

    function renderizarCarrito() {
        let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
        contenedorElementosCarrito.innerHTML = '';
        let total = 0;
        
        if (carrito.length == 0) {
            contenedorElementosCarrito.innerHTML = '<p>El carrito esta vacio</p>'
            elementoTotalCarrito = 'Total = $0.00'
            return;
        }

        // USANTO TEMPLEATE STRINGS PARA CONSTRUIR EL HTML DE LOS ITEMS
        const itemsHtml = carrito.map(item => {
            // total = total + item.precio * item.cantidad
            total += item.precio * item.cantidad; // acumular el total
            // Acumular el total

            return `
                        <div class= "item-carrito">
                            <span>${item.nombre} (x ${item.cantidad})</span>
                            <div>
                                <span>$${(item.precio* item.cantidad).toFixed(2)}</span>
                                <button class= "btn-eliminar-item" id="btn-eliminar-${item.id}">Eliminar </button>
                            </div>    
                        </div>    
                   ` ;    
        });

        // Unimos todos los strings HTML y los insertamos en el contenedor
        contenedorElementosCarrito.innerHTML = itemsHtml.join('');
        elementoTotalCarrito.textContent = `Total: $${total.toFixed(2)}`;

        // Adjuntar eventos DESPUES de que el HTML esta en el DOM
        // Iteramos sobre el array 'carrito' para adjuntar eventos,
        // usando el ID generado para encontrar cada boton.
        // Los botones de eliminar se crean y se destruyen
        // dinamicamente cada vez que el carrito se renderiza 
        // (es decir, cuando se agrega, elimina o vacia un producto)
        carrito.forEach(item => {
            const botonEliminar = document.getElementById(`btn-eliminar-${item.id}`);
            if (botonEliminar) { // asegurarse de q el boton exista
                botonEliminar.addEventListener('click', () => {
                    // Cuando se hace click, ya tenemos acceso al ID
                    // del item original
                    eliminarProductoDelCarrito(item.id);
                });
            }
        });

        function eliminarProductoDelCarrito(idProducto) {
            let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
            
            //carrito.map().filter()
            const carritoActualizado = carrito.map(item => {
                if (item.id === idProducto) {
                    // Creamos un nuevo objeto con las propiedades exactas
                    // que necesitamos.
                    // Copiamos id, nombre, precio y reducimos la cantidad.
                    return{
                        id: item.id,
                        nombre: item.nombre,
                        precio: item.precio,
                        cantidad: item.cantidad -1 // Aqui se reduce la cantidad
                    };
                }
                return item; // Si no es el producto a modificar, lo devolvemos tal cual
            }).filter(item => item.cantidad > 0); // Mantiene solo aquellos items
            // cuya cantidad sea mayor que cero

            localStorage.setItem('carritoDeCompras', JSON.stringify(carritoActualizado));
            renderizarCarrito();
        }
    }

    renderizarCarrito();

    botonVaciarCarrito.addEventListener('click', () => {
        localStorage.removeItem('carritoDeCompras');
        renderizarCarrito();
        alert('El carrito ha sido vaciado.');
    });
});