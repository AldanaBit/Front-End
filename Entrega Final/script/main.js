// oscuro -claro
const toggleButton = document.getElementById('toggle-theme');
if (toggleButton) {
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        // Guardar el estado del tema en localStorage
        const esDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('darkTheme', esDark);
    });

    // Cargar el estado del tema desde localStorage al cargar la página
    const esDark = localStorage.getItem('darkTheme') === 'true';
    if (esDark) {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }

    // Cambiar el texto del botón según el tema
    toggleButton.textContent = esDark ? 'Cambiar a modo Claro' : 'Cambiar a modo Oscuro';
    toggleButton.addEventListener('click', () => {
        toggleButton.textContent = document.body.classList.contains('dark-theme') ? 'Cambiar a modo Claro' : 'Cambiar a modo Oscuro';
    });



    // Cambiar el icono del botón según el tema
    const icono = document.getElementById('icono');   
    if (icono) {
        icono.classList.toggle('fa-sun', !esDark);
        icono.classList.toggle('fa-moon', esDark);
        toggleButton.addEventListener('click', () => {
            icono.classList.toggle('fa-sun', !document.body.classList.contains('dark-theme'));
            icono.classList.toggle('fa-moon', document.body.classList.contains('dark-theme'));
        });
    }

}  

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// alertas
    
function mostrarAlerta(mensaje, tipo = 'info') {
    const alerta = document.createElement('div');
    alerta.className = `alerta ${tipo}`;
    alerta.textContent = mensaje;

    // Agregar la alerta al cuerpo del documento
    document.body.appendChild(alerta);

    // Eliminar la alerta después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Precios  
function formatearPrecio(numero) {
    return `$${numero.toFixed(2)}`; 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------

// Newsletter

document.addEventListener('DOMContentLoaded', () => {
    const formularioNewsletter = document.getElementById('newsletter-form');
    const emailNewsletter = document.getElementById('newsletter-email');
    const errorNewsletter = document.getElementById('error-newsletter-email');

    if (formularioNewsletter && emailNewsletter) {
        const esCorreoValido = (correo) => {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
        };

        const mostrarError = (input, mensaje) => {
            const contenedor = input.parentNode;
            contenedor.classList.add('error');
            errorNewsletter.innerText = mensaje;
        };

        const limpiarError =  (input) => {
            const contenedor = input.parentNode;
            contenedor.classList.remove('error');
            errorNewsletter.innerText = '';
        };

        emailNewsletter.addEventListener('change', () =>{
            const campo = emailNewsletter.ariaValueMax.trim();
            if (campo === '') {
                mostrarError(errorNewsletter, 'El correo electrónico es obligatorio.');
            } else if (!esCorreoValido(campo)) {
                mostrarError(emailNewsletter, 'Ingresa un correo electrónico válido.');
            } else {
                limpiarError(emailNewsletter);
            }
        });

        formularioNewsletter.addEventListener('submit', (evento) => {
            const campo = emailNewsletter.ariaValueMax.trim();

            if (campo === '' || !esCorreoValido(campo)) {
                evento.preventDefault();
                mostrarError(emailNewsletter, campo === '' ? 'El correo electrónico es obligatorio.' : 'Ingresa un correo electrónico válido.');
            } else {
                limpiarError(emailNewsletter);
                console.log('Gracias por suscribirse a nuestro Newsletter!');
            }
        });
    }
});







