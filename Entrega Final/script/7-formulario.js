document.querySelector('.formulario-contacto').addEventListener('submit', function(e){
    let valido = true;
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === "") {
        mostrarError('nombre', 'El nombre es obligatorio');
        valido = false;
    } else{
        limpiarError('nombre');
    }

    if (email === "" || !email.includes("@")) {
        mostrarError('email', 'Ingresar un correo valido');
        valido = false;
    } else{
        limpiarError('email');
    }

    if (mensaje === "") {
        mostrarError('mensaje', 'Por favor escriba un mensaje');
        valido = false
    } else{
        limpiarError('mensaje');
    }

    if (!valido) e.preventDefault();
});

document.getElementById('btn-newsletter').addEventListener('click', function(){
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();

    if (email === "" || ! email.includes("@")) {
        emailInput.classList.add('error');

        document.getElementById('error-newsletter-email').textContent = 'Correo invalido';

        document.getElementById('error-newsletter-email').style.display = 'block';
    } else{
        emailInput.classList.remove('error');

        document.getElementById('error-newsletter-email').textContent = "";

        document.getElementById('error-newsletter-email').style.display = 'none';

        alert('Gracias por suscribirse') // y si lo hago con un popup?
    }
})

function mostrarError(idCampo, mensaje) {
    const campo = document.getElementById(idCampo);
    const errorSpan = document.getElementById(`error-${idCampo}`);
    campo.classList.add('error');
    errorSpan.textContent = mensaje;
    errorSpan.style.display = 'block';
}

function limpiarError(idCampo) {
    const campo = document.getElementById(idCampo);
    const errorSpan = document.getElementById(`error-${idCampo}`);
    campo.classList.remove('error');
    errorSpan.textContent = '';
    errorSpan.style.display = 'none';
}