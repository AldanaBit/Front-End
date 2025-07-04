const contenedorProductos = document.getElementById('catalogo.container');
const contenedorCarrito = document.getElementById('carrito-container');

// Inicializa carrito
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Mostrar productos
function mostrarLibros() {
    productos.forEach(producto =>{
        const card = document.createElement('div');
        card.className = "producto-card";
        card.innerHTML = `
                            <img src="${producto.imagen} alt="${producto.titulo}"">
                            <h4>${producto.titulo}</h4>
                            <p class="autor">${producto.autor}</p>
                            <p>$ ${producto.precio}</p>
                            <p>Stock: ${producto.stock}</p>
                            <button class="btn-agregar" id="${producto.id}">Agregar al carrito </button>
                        `;
        contenedorProductos.appendChild(card);                
    });

    document.querySelectorAll('.btn-agregar').forEach(bot => {
        bot.addEventListener('click', () => {
            agregarProductoAlCarrito(parseInt(bot.dataset.id));
        });
    });
}

// Agregar productos al carrito
function agregarProductoAlCarrito(id) {
    const prod = productos.find(p => p.id === id);
    const enCarrito = carrito.find(p => p.id === id);

    if (enCarrito) {
        if (enCarrito.cantidad  < prod.stock) {
            enCarrito.cantidad++;
        } else {
            alert("No hay más stock disponible");
            return;
        }
    } else {
        carrito.push({...prod, cantidad: 1});
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

// Mostrar carrito
function mostrarCarrito(){
    contenedorCarrito.innerHTML = "";
    carrito.forEach(item => {
        const div = document.createElement('div');
        div.className = "carrito-item";
        div.innerHTML = `
                            
                            <h4>${item.titulo}</h4>
                            <p class="autor">${producto.autor}</p>
                            <p>$ ${item.precio} x ${item.cantidad}</p>
                            <button class="btn-eliminar" id="${item.id}">Eliminar</button>
                        `;
        contenedorCarrito.appendChild(div);                
    });

    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', () =>{
            carrito = carrito.filter(p => p.id !== parseInt(btn.CDATA_SECTION_NODE.id));
            localStorage.setItem("carrito", JSON.stringify(carrito));
            mostrarCarrito();
        });
    });
}   

// Inicializar
document.addEventListener("DOMContentLoaded", () =>{
    mostrarLibros();
    mostrarCarrito();
});