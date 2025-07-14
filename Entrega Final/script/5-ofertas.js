document.addEventListener('DOMContentLoaded', async() => {
    const contenedor = document.querySelector('.ofertas-container');
    contenedor.innerHTML = 'Cargando ofertas...';

    //esta API no tiene para darme libros random, consulte con chat como obtener libros aleatorios y me recomendo que busque por letra y las vaya cambiando para q parezca lo mas aleatorio posible
    const letras = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const letraRandom = letras[Math.floor(Math.random()* letras.length)];

    try {
        const res = await fetch(`https://openlibrary.org/search.json?q=${letraRandom}&limit=15`);
        const data = await res.json();
        contenedor.innerHTML = '';
        const librosConPortada = data.docs.filter(libro => libro.cover_i).slice(0,8); // Filtrar los libros que tienen portada
        librosConPortada.forEach(libro => {
            const precioOriginal = (Math.random()* 50000 + 6000); // Generar un precio original aleatorio entre 6000 y 56000
            const descuento = Math.random() * 0.2 + 0.2;
            const precioOferta = precioOriginal * (1 - descuento); // Generar un precio de oferta entre 20% y 40% menos que el original
            const portada = `https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg`; // URL de la portada del libro
            const card = document.createElement('div');
            card.classList.add('oferta-card');
            card.innerHTML = `
                <img src="${portada}" alt="${libro.title}">
                <h3>${libro.title}</h3>
                <p class="autor">${libro.author_name ? libro.author_name.join(', ') : 'Desconocido'}</p>
                <p class="precio">
                    <span class="antes">Precio Original: $${formatearPrecio(precioOriginal)}</span>
                    <span class="ahora">Precio Oferta: $${formatearPrecio(precioOferta)}</span>
                </p>
                <a href="#"  class="carrito" id="btn-agregar-${libro.key}">
                    <i class="fas fa-shopping-cart"></i>
                </a>
            `;
            contenedor.appendChild(card);

            const btnAgregar = card.querySelector('.carrito');
            btnAgregar.addEventListener('click', () => {
                const itemCarrito = {
                    id: libro.key,
                    titulo: libro.title,
                    autor: libro.author_name ? libro.author_name.join(', ') : 'Desconocido',
                    precio: Number(precioOferta),
                    img: portada,
                    cantidad: 1
                };

                const carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];
                carrito.push(itemCarrito);
                localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
                alert(`${libro.title} ha sido agregado al carrito.`);
            });    
        });
    } catch (error) {
        contenedor.innerHTML = 'Error al cargar las ofertas. Inténtalo de nuevo más tarde.';
        console.error(error);
    }
});

