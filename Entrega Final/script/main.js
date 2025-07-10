
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
function formatearPrecio(precio) {
    return `$${precio.toFixed(2)}`; 
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------

// Newsletter

document.addEventListener('DOMContentLoaded', () => {
    const formularioNewsletter = document.getElementById('newsletter-form');
    const emailNewsletter = document.getElementById('newsletter-email');
    const errorNewsletter = document.getElementById('error-newsletter-email');

    const esCorreoValido =(correo) => {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    };

    const mostrarError = (mensaje) => {
        emailNewsletter.parentNode.classList.add('error');
        errorNewsletter.innerText = mensaje;
    };

    const limpiarError = () => {
        emailNewsletter.parentNode.classList.remove('error');
        errorNewsletter.innerText = '';
    };

    if (formularioNewsletter && emailNewsletter) {
        emailNewsletter.addEventListener('change', () =>{
            const valor = emailNewsletter.value.trim();

            if (valor === '') {
                mostrarError('El correo electrónico es obligatorio.')
            } else if (!esCorreoValido(valor)) {
                mostrarError('Ingresar un correo electrónico válido.')
            } else{
                limpiarError();
            }
        });

        formularioNewsletter.addEventListener('submit', (evento) =>{
            const valor = emailNewsletter.value.trim();

            if (valor === '' || !esCorreoValido(valor)) {
                evento.preventDefault();
                mostrarError(valor === '' ? 'El correo electrónico es obligatorio.' : 'Ingresar un correo electrónico válido.');
            }else {
                limpiarError();
                mostrarAlerta('Gracias por suscribirte a nuestro Newsletter!!', 'succes');
                formularioNewsletter.reset();
            }
        });
    }
    
});







