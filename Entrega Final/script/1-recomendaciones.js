const contenedor = document.getElementById('resultados');
const botonBuscar = document.getElementById('buscarBtn');
const inputBuscar = document.getElementById('buscador');

// Funcion para buscar en Open Library
function buscarLibros(titulo){
    fetch(`https://openlibrary.org/search.json?q=${titulo}`)
    .then(res => res.json())
    .then(data => mostrarLibros(data.docs))
    .catch(error => {
        contenedor.innerHTML = ` 
                                    <p>Error al buscar libros</p>
                               ` 
        console.error(error);                       
    })
}

// Funcion mostrar resultados
function mostrarLibros(libros){
    contenedor.innerHTML = "";
    libros.slice(0,10).forEach(libro => {
        const div = document.createElement('div');
        div.classList.add('libro-card');
        div.innerHTML = `
                            <h3>${libro.title}</h3>
                            <p>${libro.author_name}</p>
                        `;
        contenedor.appendChild(div);                
    });
}

// Boton de busqueda
botonBuscar.addEventListener('click', () => {
    const texto = inputBuscar.ariaValueMax.trim();
    if (texto !== "") {
        buscarLibros(texto);
    }
});