document.addEventListener('DOMContentLoaded', () =>{
    const contenedor = document.querySelector('.resenas-container');
    const contenedorFormulario = document.querySelector('.formulario-resena');
    contenedor.innerHTML = 'Cargando las opiniones de nuestros usuarios...'

    async function obtenerUsuariosYResenas() {
        try {
            const respuesta = await fetch('https://randomuser.me/api/?results=7&nat=es&inc=name,email,picture');
            const datos = await respuesta.json();
            const usuarios = datos.results;

            const resenasEjemplo = [
                                    `¡Exelente sitio! Encontré justo el libro que buscaba.`,
                                    `El proceso de compra fue rapido y sencillo.`,
                                    `Gran variedad de títulos y muy buenos precios.`,
                                    `Me encantó la interfaz de la página.`,
                                    `Muy recomendable, llegaron los libros en perfecto estado.`,
                                    `Volveré a comprar seguro, gracias por todo.`,
                                    `La experiencia fue excelente, el servicio muy atento y el envío rápido. Definitivamente volveré a comprar aquí.`

            ];
            contenedor.innerHTML = '';

            usuarios.forEach((usuario,index) => {
                const nombre = `${usuario.name.first} ${usuario.name.last}`;
                const email = usuario.email;
                const imagen = usuario.picture.medium;
                const resenaTexto = resenasEjemplo[index % resenasEjemplo.length];
                const estrellas = Math.floor(Math.random() * 3) + 3;

                const card = document.createElement('div');
                card.classList.add('resenas-card');
                card.innerHTML = `
                                    <img src="${imagen}" alt="Foto de ${nombre}">
                                    <h3>${nombre}</h3>
                                    <p class="email">${email}</p>
                                    <p class="calificacion">${'<span class="estrella llena">★</span>'.repeat(estrellas)}${'<span class="estrella vacia">☆</span>'.repeat(5-estrellas)}</p>
                                    <p class="resenas-texto">${resenaTexto}</p>     
                                `;

                contenedor.appendChild(card);                
            });
        } catch(error){
            console.error('Error al cargar las opiniones de nuestros usuarios:', error);
            contenedor.innerHTML = 'No se pudieron cargar las opiniones de nuestros usuarios. Intente de nuevo más tarde';
        }
    }
    obtenerUsuariosYResenas();



    const formularioResena = document.getElementById('form-resena');
    const nombre = document.getElementById('resena-nombre');
    const correo = document.getElementById('resena-email');
    const mensaje = document.getElementById('resena-mensaje');

    // estrellas, revisar si funciona
    let calificacionEstrellas = 0;
    const estrellasInput = document.querySelectorAll('#estrellas-input .estrella');

    estrellasInput.forEach(estrella => {
        estrella.addEventListener('mouseenter', () => {
            const valor = parseInt(estrella.dataset.valor);
            estrellasInput.forEach(evento => {
                evento.classList.toggle('hover-activa', parseInt(evento.dataset.valor) <= valor);
            });
        });

        estrella.addEventListener('mouseleave', () => {
            estrellasInput.forEach(evento => evento.classList.remove('hover-activa'));
        });

        estrella.addEventListener('click', () =>{
            calificacionEstrellas = parseInt(estrella.dataset.valor);
            estrellasInput.forEach(estrella => {
                const valor = parseInt(estrella.dataset.valor);

                if (valor <= calificacionEstrellas) {
                    estrella.classList.add('seleccionada');
                } else{
                    estrella.classList.remove('seleccionada');
                };
            });
        });
    });

    //---------------------------------------------------------------------

    const mostrarEstadoCampo = (input, esValido, mensaje = '') => {
        
        const contenedor = input.parentNode;
        const textoError = contenedor.querySelector('.error-msg');

        if (esValido) {
            contenedor.classList.remove('error');
            textoError.innerHTML = '';
        } else{
            contenedor.classList.add('error');
            textoError.innerHTML = mensaje;
        }
    };

    const esCorreoValido = (correo) =>{
        const regexCorreo =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    };

    const validarCampo = (campo, mensajeVacio, mensajeInvalido = '') =>{
        const valor = campo.value.trim();

        if (valor === '') {
            mostrarEstadoCampo(campo,false,mensajeVacio);
            return false;
        } else if (campo.id === 'resena-email' && !esCorreoValido(valor)) {
            mostrarEstadoCampo(campo,false,mensajeInvalido);
            return false;
        } else{
            mostrarEstadoCampo(campo,true);
            return true;
        }
    };

    //

    [nombre, correo, mensaje].forEach(campo => {
        campo.addEventListener('change', () =>{
            if (campo.id === 'resena-email') {
                validarCampo(correo, 'El correo electrónico es obligatorio.', 'Ingresar un correo electrónico válido.');
            } else if (campo.id === 'resena-nombre') {
                validarCampo(nombre, 'Ingresá tu nombre.');
            }else if (campo.id === 'resena-mensaje') {
                validarCampo(mensaje, 'Ingrsá tu opinión.');
            }
        });
    });

    formularioResena.addEventListener('submit', function(evento){
        evento.preventDefault();

        const campos = [
            {elemento: nombre, mensajeVacio: 'Ingresá tu nombre.'},
            {elemento: correo, mensajeVacio: 'El correo electrónico es obligatorio.', mensajeInvalido: 'Ingresá un correo electrónico válido'},
            {elemento: mensaje, mensajeVacio: 'Ingresá tu opinión'}
        ];

        let esValido = true;

        campos.forEach(info => {
            const validado = validarCampo(info.elemento, info.mensajeVacio, info.mensajeInvalido);
            if (!validado) {
                esValido = false;
            }
        });
        
        if (calificacionEstrellas === 0) {
            esValido = false;
            alert('Por favor, calificá tu experiencia con estrellas.');
        } 

        if (esValido) {
            const nuevaResena = document.createElement('div');
            nuevaResena.classList.add('resenas-card');
            nuevaResena.innerHTML = `
                                    <img src="https://i.pravatar.cc/100?u=${correo.value}" alt="Foto de ${nombre.value}">
                                    <h3>${nombre.value}</h3>
                                    <p class="email">${correo.value}</p>
                                    <p class="calificacion">${'<span class="estrella llena">★</span>'.repeat(calificacionEstrellas)}${'<span class="estrella vacia">☆</span>'.repeat(5-calificacionEstrellas)}</p>
                                    <p class="resenas-texto">${mensaje.value}</p>     
                                `;

            contenedor.appendChild(nuevaResena);
            formularioResena.reset();
            calificacionEstrellas = 0;
            estrellasInput.forEach(estrella => estrella.classList.remove('seleccionada'));
            
            const mensajeExito = document.createElement('p');
            mensajeExito.classList.add('mensaje-exito');
            mensajeExito.innerText = 'Gracias por su reseña !';
            formularioResena.appendChild(mensajeExito);

            setTimeout(() => {
                mensajeExito.remove();
            }, 4000);
        }else {
            console.log('La reseña no es válida. Revisá los campos.');
        }
    });
});
