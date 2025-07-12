document.addEventListener('DOMContentLoaded', () =>{
    cargarProductosCarrito();
});

function cargarProductosCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    document.querySelector('#tabla_carrito').innerHTML = '';

    let subtotalCalculado = 0;

    if (carrito.length === 0) {
        document.querySelector('#tabla_carrito').innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px;">Tu carrito está vacío. Agrega productos desde la <a href="../pages/2-productos.html">catálogo</a>.</td></tr>';
    } else{
        carrito.forEach(producto => {
            const filaHTML = crearFilaProducto(producto);
            document.querySelector('#tabla_carrito').innerHTML += filaHTML;
            subtotalCalculado += producto.precio * producto.cantidad;
        });
    }

    actualizarTotalCarrito(subtotalCalculado);
    eventosFila();
}

    function crearFilaProducto(producto) {
        const productoSubtotal = (producto.precio * producto.cantidad).toFixed(2);
        const tituloCorto = producto.titulo.substring(0, 10) + '...';
        return `
                    <tr>
                        <td><button id="${producto.id}" class="remove-btn"><i class="far fa-times-circle"></i> </button> </td>
                        <td><img src="${producto.img}" alt="${producto.titulo}" style="height: 80px; width: auto; object-fit: contain;"></td>
                        <td>${tituloCorto}</td>
                        <td>$${producto.precio.toFixed(2)}</td>
                        <td><input type="number" value="${producto.cantidad}" min="1" id="${producto.id}" class="cantidad-producto"></td>
                        <td>$${productoSubtotal}</td>
                    </tr>    
               `;
    }

    function actualizarTotalCarrito(subtotal) {
        document.querySelector('#total').forEach(elemento => elemento.innerHTML = subtotal.toFixed(2));
        document.querySelector('#total-final').forEach(elemento => elemento.innerHTML = totalFinal.toFixed(2))
    }

    function eventosFila() {
        document.querySelectorAll('.remove-btn').forEach(boton => {
            boton.addEventListener('click', () =>{
                const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
                const id = parseInt(boton.id);
                const index = carrito.findIndex(producto => producto.id === id);

                if (index !== -1) {
                    carrito.splice(index, 1);

                    localStorage.setItem('carrito', JSON.stringify(carrito));

                    cargarProductosCarrito();
                }
            });
        });

        document.querySelectorAll('.cantidad-producto').forEach(input => {
            input.addEventListener('change', ()=> {
                const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
                const id = parseInt(input.id);
                let nuevaCantidad = parseInt(input.value);

                if (nuevaCantidad < 1) {
                    input.value = 1;
                    return;
                }

                const producto = carrito.find(prod => prod.id === id);

                if (producto) {
                    producto.cantidad = nuevaCantidad;

                    localStorage.setItem('carrito', JSON.stringify(carrito));

                    actualizarTotales();
                }
            });
        });
    }

    function actualizarTotales() {
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
        let subtotal = 0;

        carrito.forEach(producto => {
            subtotal += producto.precio * producto.cantidad;
        });

        const filas = document.querySelectorAll('#tabla-producto');

        filas.forEach(filas =>{
            const input = filas.querySelector('.cantidad-producto')

            if (input) {
                const id = parseInt(input.id);
                const producto = carrito.find(prod => prod.id === id);

                if (producto) {
                    const subtotalCelda = filas.cells[5];
                    const subtotalProducto = (producto.precio * producto.cantidad).toFixed(2);

                    subtotalCelda.textContent = `$${subtotalProducto}`;
                }
            } 
        });

        actualizarTotalCarrito(subtotal);
    }
