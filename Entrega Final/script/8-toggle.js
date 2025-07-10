// oscuro -claro
document.addEventListener('DOMContentLoaded', () =>{
    const toggleButton = document.getElementById('toggle-theme');
    const icono = document.getElementById('icono');
    const darkThemeKey = 'darkTheme';

    if (toggleButton) {
        const esDark = localStorage.getItem(darkThemeKey) === 'true';

        document.body.classList.toggle('dark-theme', esDark);

        if (icono) {
            icono.classList.toggle('fa-sun', esDark);
            icono.classList.toggle('fa-moon', !esDark);
        }

        toggleButton.addEventListener('click', () =>{
            const nuevoEstado = !document.body.classList.contains('dark-theme');
            document.body.classList.toggle('dark-theme', nuevoEstado);
            localStorage.setItem(darkThemeKey, nuevoEstado);
        
            if (icono) {
                icono.classList.toggle('fa-sun', nuevoEstado);
                icono.classList.toggle('fa-moon', !nuevoEstado);
            }
        });
    }
});

// const toggleButton = document.getElementById('toggle-theme');
// if (toggleButton) {
//     toggleButton.addEventListener('click', () => {
//         document.body.classList.toggle('dark-theme');
//         // Guardar el estado del tema en localStorage
//         const esDark = document.body.classList.contains('dark-theme');
//         localStorage.setItem('darkTheme', esDark);
//     });

//     // Cargar el estado del tema desde localStorage al cargar la página
//     const esDark = localStorage.getItem('darkTheme') === 'true';
//     if (esDark) {
//         document.body.classList.add('dark-theme');
//     } else {
//         document.body.classList.remove('dark-theme');
//     }

//     // Cambiar el texto del botón según el tema
//     toggleButton.textContent = esDark ? 'Cambiar a modo Claro' : 'Cambiar a modo Oscuro';
//     toggleButton.addEventListener('click', () => {
//         toggleButton.textContent = document.body.classList.contains('dark-theme') ? 'Cambiar a modo Claro' : 'Cambiar a modo Oscuro';
//     });



//     // Cambiar el icono del botón según el tema
//     const icono = document.getElementById('icono');   
//     if (icono) {
//         icono.classList.toggle('fa-sun', !esDark);
//         icono.classList.toggle('fa-moon', esDark);
//         toggleButton.addEventListener('click', () => {
//             icono.classList.toggle('fa-sun', !document.body.classList.contains('dark-theme'));
//             icono.classList.toggle('fa-moon', document.body.classList.contains('dark-theme'));
//         });
//     }

// }  