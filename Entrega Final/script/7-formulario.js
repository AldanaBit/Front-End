document.addEventListener('DOMContentLoaded', function () {
    const formularioContacto = document.getElementById('formulario-contacto');
    const nombre = document.getElementById('nombre');
    const correo = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    // visibilidad y texto de error
    const mostrarEstadoCampo = (input, esValido, mensaje = '') =>{
        const contenedor = input.parentNode;
        const textoError = contenedor.querySelector('.error-mgs');

        if (esValido) {
            contenedor.classList.remove('error');
            textoError.innerText = '';
        } else {
            contenedor.classList.add('error');
            textoError.innerText = mensaje;
        }
    };

    // validar formato de correo
    const esCorreoValido =(correo) => {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    };

    // validar campos
    const validarCampo = (campo, mensajeVacio, mensajeInvalido = '') => {
        const valor = campo.value.trim();

        if (valor === '') {
            mostrarEstadoCampo(campo, false, mensajeVacio);
            return false;
        } else if (campo.id === 'email' && !esCorreoValido(valor)) {
            mostrarEstadoCampo(campo, false, mensajeInvalido);
            return false;
        } else {
            mostrarEstadoCampo(campo, true);
            return true;
        }
    };

    // evento change a los campos
    [nombre, correo, mensaje].forEach(campo => {
        campo.addEventListener('change', () => {

            if (campo.id === 'email') {
                validarCampo(email, 'El correo electronico es obligatorio.', 'Ingresa un correo electronico válid.-');
            } else if (campo.id === 'nombre') {
                validarCampo(nombre, 'Ingresar nombre.');
            } else if (campo.id === 'mensaje') {
                validarCampo(mensaje, 'Ingresar mensaje.');
            }
        });
    });

    // evento submit
    formularioContacto.addEventListener('submit',function(evento){
        evento.preventDeFault();

        const campos = [
            {elemento: nombre, mensajeVacio: 'Ingresar nombre.'},
            {elemento: correo, mensajeVacio: 'El correo electrónico es obligatorio.', mensajeInvalido: 'Ingresar un correo electrónico válido.'},
            {elemento: mensaje, mensajeVacio: 'Ingresar mensaje'}
        ];

        let esValido = true;

        // si retorna false
        camposValidar.forEach(camposInfo => {
            const validado = validarCampo(camposInfo.elemento, camposInfo.mensajeVacio, camposInfo.mensajeInvalido);

            if (!validado) {
                esValido = false 
            }
        });

        if (esValido) {
            console.log('¡Formulario enviado con éxito!');
            formularioContacto.reset();
        } else {
            console.log('El formulario no es válido. Por favor, revisa los campos.');
        }
    });
});