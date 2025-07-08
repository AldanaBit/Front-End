// INVESTIGAR DESPUES...

// Función para mostrar un mensaje de éxito
function mostrarMensajeExito(mensaje) {
    const mensajeExito = document.createElement('div');
    mensajeExito.className = 'mensaje-exito';
    mensajeExito.textContent = mensaje;

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeExito);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeExito.remove();
    }, 3000);

}   


// Función para mostrar un mensaje de error
function mostrarMensajeError(mensaje) {
    const mensajeError = document.createElement('div');
    mensajeError.className = 'mensaje-error';
    mensajeError.textContent = mensaje;

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeError);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Función para mostrar un mensaje de advertencia
function mostrarMensajeAdvertencia(mensaje) {
    const mensajeAdvertencia = document.createElement('div');
    mensajeAdvertencia.className = 'mensaje-advertencia';
    mensajeAdvertencia.textContent = mensaje;

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeAdvertencia);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeAdvertencia.remove();
    }, 3000);
}

// Función para mostrar un mensaje de información
function mostrarMensajeInformacion(mensaje) {
    const mensajeInformacion = document.createElement('div');
    mensajeInformacion.className = 'mensaje-informacion';
    mensajeInformacion.textContent = mensaje;

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeInformacion);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeInformacion.remove();
    }, 3000);
}

// Función para mostrar un mensaje de confirmación
function mostrarMensajeConfirmacion(mensaje, callback) {
    const mensajeConfirmacion = document.createElement('div');
    mensajeConfirmacion.className = 'mensaje-confirmacion';
    mensajeConfirmacion.textContent = mensaje;

    // Crear botones de confirmación y cancelación
    const botonConfirmar = document.createElement('button');
    botonConfirmar.textContent = 'Confirmar';
    botonConfirmar.addEventListener('click', () => {
        callback(true);
        mensajeConfirmacion.remove();
    });

    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = 'Cancelar';
    botonCancelar.addEventListener('click', () => {
        callback(false);
        mensajeConfirmacion.remove();
    });

    // Agregar los botones al mensaje
    mensajeConfirmacion.appendChild(botonConfirmar);
    mensajeConfirmacion.appendChild(botonCancelar);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeConfirmacion);
}

// Función para mostrar un mensaje de carga
function mostrarMensajeCarga(mensaje) {
    const mensajeCarga = document.createElement('div');
    mensajeCarga.className = 'mensaje-carga';
    mensajeCarga.textContent = mensaje;

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeCarga);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeCarga.remove();
    }, 3000);
}

// Función para mostrar un mensaje de éxito con un botón de acción
function mostrarMensajeExitoConBoton(mensaje, textoBoton, accion) {
    const mensajeExito = document.createElement('div');
    mensajeExito.className = 'mensaje-exito';
    mensajeExito.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el botón al mensaje
    mensajeExito.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeExito);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeExito.remove();
    }, 3000);
}

// Función para mostrar un mensaje de error con un botón de acción
function mostrarMensajeErrorConBoton(mensaje, textoBoton, accion) {
    const mensajeError = document.createElement('div');
    mensajeError.className = 'mensaje-error';
    mensajeError.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el botón al mensaje
    mensajeError.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeError);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Función para mostrar un mensaje de advertencia con un botón de acción
function mostrarMensajeAdvertenciaConBoton(mensaje, textoBoton, accion) {
    const mensajeAdvertencia = document.createElement('div');
    mensajeAdvertencia.className = 'mensaje-advertencia';
    mensajeAdvertencia.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el botón al mensaje
    mensajeAdvertencia.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeAdvertencia);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeAdvertencia.remove();
    }, 3000);
}

// Función para mostrar un mensaje de información con un botón de acción
function mostrarMensajeInformacionConBoton(mensaje, textoBoton, accion) {
    const mensajeInformacion = document.createElement('div');
    mensajeInformacion.className = 'mensaje-informacion';
    mensajeInformacion.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el botón al mensaje
    mensajeInformacion.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeInformacion);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeInformacion.remove();
    }, 3000);
}

// Función para mostrar un mensaje de confirmación con botones personalizados
function mostrarMensajeConfirmacionConBotones(mensaje, textoBoton1, accionBoton1, textoBoton2, accionBoton2) {
    const mensajeConfirmacion = document.createElement('div');
    mensajeConfirmacion.className = 'mensaje-confirmacion';
    mensajeConfirmacion.textContent = mensaje;

    // Crear botones de confirmación y cancelación
    const boton1 = document.createElement('button');
    boton1.textContent = textoBoton1;
    boton1.addEventListener('click', () => {
        accionBoton1();
        mensajeConfirmacion.remove();
    });

    const boton2 = document.createElement('button');
    boton2.textContent = textoBoton2;
    boton2.addEventListener('click', () => {
        accionBoton2();
        mensajeConfirmacion.remove();
    });

    // Agregar los botones al mensaje
    mensajeConfirmacion.appendChild(boton1);
    mensajeConfirmacion.appendChild(boton2);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeConfirmacion);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeConfirmacion.remove();
    }, 3000);
}

// Función para mostrar un mensaje de carga con un botón de cancelar
function mostrarMensajeCargaConBoton(mensaje, textoBoton, accionCancelar) {
    const mensajeCarga = document.createElement('div');
    mensajeCarga.className = 'mensaje-carga';
    mensajeCarga.textContent = mensaje;

    // Crear el botón de cancelar
    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = textoBoton;
    botonCancelar.addEventListener('click', accionCancelar);

    // Agregar el botón al mensaje
    mensajeCarga.appendChild(botonCancelar);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeCarga);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeCarga.remove();
    }, 3000);
}

// Función para mostrar un mensaje de éxito con un botón de acción y un icono
function mostrarMensajeExitoConIcono(mensaje, textoBoton, accion, icono) {
    const mensajeExito = document.createElement('div');
    mensajeExito.className = 'mensaje-exito';
    mensajeExito.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeExito.appendChild(iconoElemento);
    mensajeExito.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeExito);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeExito.remove();
    }, 3000);
}

// Función para mostrar un mensaje de error con un botón de acción y un icono
function mostrarMensajeErrorConIcono(mensaje, textoBoton, accion, icono) {
    const mensajeError = document.createElement('div');
    mensajeError.className = 'mensaje-error';
    mensajeError.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeError.appendChild(iconoElemento);
    mensajeError.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeError);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Función para mostrar un mensaje de advertencia con un botón de acción y un icono
function mostrarMensajeAdvertenciaConIcono(mensaje, textoBoton, accion, icono) {
    const mensajeAdvertencia = document.createElement('div');
    mensajeAdvertencia.className = 'mensaje-advertencia';
    mensajeAdvertencia.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeAdvertencia.appendChild(iconoElemento);
    mensajeAdvertencia.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeAdvertencia);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeAdvertencia.remove();
    }, 3000);
}

// Función para mostrar un mensaje de información con un botón de acción y un icono
function mostrarMensajeInformacionConIcono(mensaje, textoBoton, accion, icono) {
    const mensajeInformacion = document.createElement('div');
    mensajeInformacion.className = 'mensaje-informacion';
    mensajeInformacion.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeInformacion.appendChild(iconoElemento);
    mensajeInformacion.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeInformacion);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeInformacion.remove();
    }, 3000);
}

// Función para mostrar un mensaje de confirmación con botones personalizados y un icono
function mostrarMensajeConfirmacionConIcono(mensaje, textoBoton1, accionBoton1, textoBoton2, accionBoton2, icono) {
    const mensajeConfirmacion = document.createElement('div');
    mensajeConfirmacion.className = 'mensaje-confirmacion';
    mensajeConfirmacion.textContent = mensaje;

    // Crear botones de confirmación y cancelación
    const boton1 = document.createElement('button');
    boton1.textContent = textoBoton1;
    boton1.addEventListener('click', () => {
        accionBoton1();
        mensajeConfirmacion.remove();
    });

    const boton2 = document.createElement('button');
    boton2.textContent = textoBoton2;
    boton2.addEventListener('click', () => {
        accionBoton2();
        mensajeConfirmacion.remove();
    });

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar los botones y el icono al mensaje
    mensajeConfirmacion.appendChild(iconoElemento);
    mensajeConfirmacion.appendChild(boton1);
    mensajeConfirmacion.appendChild(boton2);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeConfirmacion);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeConfirmacion.remove();
    }, 3000);
}

// Función para mostrar un mensaje de carga con un botón de cancelar y un icono
function mostrarMensajeCargaConIcono(mensaje, textoBoton, accionCancelar, icono) {
    const mensajeCarga = document.createElement('div');
    mensajeCarga.className = 'mensaje-carga';
    mensajeCarga.textContent = mensaje;

    // Crear el botón de cancelar
    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = textoBoton;
    botonCancelar.addEventListener('click', accionCancelar);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeCarga.appendChild(iconoElemento);
    mensajeCarga.appendChild(botonCancelar);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeCarga);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeCarga.remove();
    }, 3000);
}

// Función para mostrar un mensaje de éxito con un botón de acción, un icono y una clase personalizada
function mostrarMensajeExitoConClase(mensaje, textoBoton, accion, icono, clasePersonalizada) {
    const mensajeExito = document.createElement('div');
    mensajeExito.className = `mensaje-exito ${clasePersonalizada}`;
    mensajeExito.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeExito.appendChild(iconoElemento);
    mensajeExito.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeExito);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeExito.remove();
    }, 3000);
}

// Función para mostrar un mensaje de error con un botón de acción, un icono y una clase personalizada
function mostrarMensajeErrorConClase(mensaje, textoBoton, accion, icono, clasePersonalizada) {
    const mensajeError = document.createElement('div');
    mensajeError.className = `mensaje-error ${clasePersonalizada}`;
    mensajeError.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeError.appendChild(iconoElemento);
    mensajeError.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeError);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Función para mostrar un mensaje de advertencia con un botón de acción, un icono y una clase personalizada
function mostrarMensajeAdvertenciaConClase(mensaje, textoBoton, accion, icono, clasePersonalizada) {
    const mensajeAdvertencia = document.createElement('div');
    mensajeAdvertencia.className = `mensaje-advertencia ${clasePersonalizada}`;
    mensajeAdvertencia.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeAdvertencia.appendChild(iconoElemento);
    mensajeAdvertencia.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeAdvertencia);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeAdvertencia.remove();
    }, 3000);
}

// Función para mostrar un mensaje de información con un botón de acción, un icono y una clase personalizada
function mostrarMensajeInformacionConClase(mensaje, textoBoton, accion, icono, clasePersonalizada) {
    const mensajeInformacion = document.createElement('div');
    mensajeInformacion.className = `mensaje-informacion ${clasePersonalizada}`;
    mensajeInformacion.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeInformacion.appendChild(iconoElemento);
    mensajeInformacion.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeInformacion);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeInformacion.remove();
    }, 3000);
}

// Función para mostrar un mensaje de confirmación con botones personalizados, un icono y una clase personalizada
function mostrarMensajeConfirmacionConClase(mensaje, textoBoton1, accionBoton1, textoBoton2, accionBoton2, icono, clasePersonalizada) {
    const mensajeConfirmacion = document.createElement('div');
    mensajeConfirmacion.className = `mensaje-confirmacion ${clasePersonalizada}`;
    mensajeConfirmacion.textContent = mensaje;

    // Crear botones de confirmación y cancelación
    const boton1 = document.createElement('button');
    boton1.textContent = textoBoton1;
    boton1.addEventListener('click', () => {
        accionBoton1();
        mensajeConfirmacion.remove();
    });

    const boton2 = document.createElement('button');
    boton2.textContent = textoBoton2;
    boton2.addEventListener('click', () => {
        accionBoton2();
        mensajeConfirmacion.remove();
    });

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar los botones y el icono al mensaje
    mensajeConfirmacion.appendChild(iconoElemento);
    mensajeConfirmacion.appendChild(boton1);
    mensajeConfirmacion.appendChild(boton2);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeConfirmacion);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeConfirmacion.remove();
    }, 3000);
}

// Función para mostrar un mensaje de carga con un botón de cancelar, un icono y una clase personalizada
function mostrarMensajeCargaConClase(mensaje, textoBoton, accionCancelar, icono, clasePersonalizada) {
    const mensajeCarga = document.createElement('div');
    mensajeCarga.className = `mensaje-carga ${clasePersonalizada}`;
    mensajeCarga.textContent = mensaje;

    // Crear el botón de cancelar
    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = textoBoton;
    botonCancelar.addEventListener('click', accionCancelar);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeCarga.appendChild(iconoElemento);
    mensajeCarga.appendChild(botonCancelar);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeCarga);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeCarga.remove();
    }, 3000);
}

// Función para mostrar un mensaje de éxito con un botón de acción, un icono y una clase personalizada
function mostrarMensajeExitoConBotonYClase(mensaje, textoBoton, accion, icono, clasePersonalizada) {
    const mensajeExito = document.createElement('div');
    mensajeExito.className = `mensaje-exito ${clasePersonalizada}`;
    mensajeExito.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeExito.appendChild(iconoElemento);
    mensajeExito.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeExito);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeExito.remove();
    }, 3000);
}

// Función para mostrar un mensaje de error con un botón de acción, un icono y una clase personalizada
function mostrarMensajeErrorConBotonYClase(mensaje, textoBoton, accion, icono, clasePersonalizada) {
    const mensajeError = document.createElement('div');
    mensajeError.className = `mensaje-error ${clasePersonalizada}`;
    mensajeError.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeError.appendChild(iconoElemento);
    mensajeError.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeError);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Función para mostrar un mensaje de advertencia con un botón de acción, un icono y una clase personalizada
function mostrarMensajeAdvertenciaConBotonYClase(mensaje, textoBoton, accion, icono, clasePersonalizada) {
    const mensajeAdvertencia = document.createElement('div');
    mensajeAdvertencia.className = `mensaje-advertencia ${clasePersonalizada}`;
    mensajeAdvertencia.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeAdvertencia.appendChild(iconoElemento);
    mensajeAdvertencia.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeAdvertencia);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeAdvertencia.remove();
    }, 3000);
}

// Función para mostrar un mensaje de información con un botón de acción, un icono y una clase personalizada
function mostrarMensajeInformacionConBotonYClase(mensaje, textoBoton, accion, icono, clasePersonalizada) {
    const mensajeInformacion = document.createElement('div');
    mensajeInformacion.className = `mensaje-informacion ${clasePersonalizada}`;
    mensajeInformacion.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeInformacion.appendChild(iconoElemento);
    mensajeInformacion.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeInformacion);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeInformacion.remove();
    }, 3000);
}

// Función para mostrar un mensaje de confirmación con botones personalizados, un icono y una clase personalizada
function mostrarMensajeConfirmacionConBotonYClase(mensaje, textoBoton1, accionBoton1, textoBoton2, accionBoton2, icono, clasePersonalizada) {
    const mensajeConfirmacion = document.createElement('div');
    mensajeConfirmacion.className = `mensaje-confirmacion ${clasePersonalizada}`;
    mensajeConfirmacion.textContent = mensaje;

    // Crear botones de confirmación y cancelación
    const boton1 = document.createElement('button');
    boton1.textContent = textoBoton1;
    boton1.addEventListener('click', () => {
        accionBoton1();
        mensajeConfirmacion.remove();
    });

    const boton2 = document.createElement('button');
    boton2.textContent = textoBoton2;
    boton2.addEventListener('click', () => {
        accionBoton2();
        mensajeConfirmacion.remove();
    });

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar los botones y el icono al mensaje
    mensajeConfirmacion.appendChild(iconoElemento);
    mensajeConfirmacion.appendChild(boton1);
    mensajeConfirmacion.appendChild(boton2);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeConfirmacion);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeConfirmacion.remove();
    }, 3000);
}

// Función para mostrar un mensaje de carga con un botón de cancelar, un icono y una clase personalizada
function mostrarMensajeCargaConBotonYClase(mensaje, textoBoton, accionCancelar, icono, clasePersonalizada) {
    const mensajeCarga = document.createElement('div');
    mensajeCarga.className = `mensaje-carga ${clasePersonalizada}`;
    mensajeCarga.textContent = mensaje;

    // Crear el botón de cancelar
    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = textoBoton;
    botonCancelar.addEventListener('click', accionCancelar);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeCarga.appendChild(iconoElemento);
    mensajeCarga.appendChild(botonCancelar);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeCarga);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeCarga.remove();
    }, 3000);
}

// Función para mostrar un mensaje de éxito con un botón de acción, un icono y una clase personalizada
function mostrarMensajeExitoConBotonIconoYClase(mensaje, textoBoton, accion, icono, clasePersonalizada) {
    const mensajeExito = document.createElement('div');
    mensajeExito.className = `mensaje-exito ${clasePersonalizada}`;
    mensajeExito.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeExito.appendChild(iconoElemento);
    mensajeExito.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeExito);

    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeExito.remove();
    }, 3000);
}

// Función para alternar entre temas claro y oscuro
function alternarTema() {
    const esDark = document.body.classList.toggle('dark-theme');
    const toggleButton = document.getElementById('toggle-theme');

    // Cambiar el texto del botón según el tema
    toggleButton.textContent = esDark ? 'Cambiar a modo Claro' : 'Cambiar a modo Oscuro';
    toggleButton.setAttribute('aria-label', esDark ? 'Cambiar a modo Claro' : 'Cambiar a modo Oscuro');
    toggleButton.setAttribute('title', esDark ? 'Cambiar a modo Claro' : 'Cambiar a modo Oscuro');
    // Guardar la preferencia del tema en localStorage
    localStorage.setItem('tema', esDark ? 'dark' : 'light');
}
// Función para aplicar el tema guardado en localStorage al cargar la página
function aplicarTemaGuardado() {
    const temaGuardado = localStorage.getItem('tema');
    if (temaGuardado === 'dark') {
        document.body.classList.add('dark-theme');
        const toggleButton = document.getElementById('toggle-theme');
        toggleButton.textContent = 'Cambiar a modo Claro';
        toggleButton.setAttribute('aria-label', 'Cambiar a modo Claro');
        toggleButton.setAttribute('title', 'Cambiar a modo Claro');
    }
}
// Evento para alternar el tema al hacer clic en el botón
document.getElementById('toggle-theme').addEventListener('click', alternarTema);
// Aplicar el tema guardado al cargar la página
document.addEventListener('DOMContentLoaded', aplicarTemaGuardado);
// Función para mostrar un mensaje de éxito
function mostrarMensajeExito(mensaje) {
    const mensajeExito = document.createElement('div');
    mensajeExito.className = 'mensaje-exito';
    mensajeExito.textContent = mensaje;

    // Agregar un icono de éxito
    const iconoExito = document.createElement('i');
    iconoExito.className = 'icono-exito'; // Asegúrate de tener una clase CSS para el icono
    mensajeExito.appendChild(iconoExito);

    // Establecer un estilo para el mensaje de éxito
    mensajeExito.style.backgroundColor = '#d4edda';
    mensajeExito.style.color = '#155724';
    mensajeExito.style.padding = '10px';
    mensajeExito.style.borderRadius = '5px';
    mensajeExito.style.position = 'fixed';
    mensajeExito.style.top = '20px';
    mensajeExito.style.right = '20px';
    mensajeExito.style.zIndex = '1000';
    mensajeExito.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    mensajeExito.style.transition = 'opacity 0.3s ease-in-out';
    mensajeExito.style.opacity = '1';
    mensajeExito.style.animation = 'fadeIn 0.5s';
    mensajeExito.style.animationFillMode = 'forwards';
    mensajeExito.style.fontSize = '16px';
    mensajeExito.style.fontFamily = 'Arial, sans-serif';
    mensajeExito.style.display = 'flex';
    mensajeExito.style.alignItems = 'center';
    mensajeExito.style.justifyContent = 'space-between';
    mensajeExito.style.width = '300px';
    mensajeExito.style.cursor = 'pointer';
    mensajeExito.style.transition = 'transform 0.3s ease-in-out';
    mensajeExito.addEventListener('click', () => {
        mensajeExito.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeExito.remove();
        }, 300); // Esperar a que la animación de escala termine
    });
    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeExito);
    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeExito.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeExito.remove();
        }, 300); // Esperar a que la animación de escala termine
    }, 3000);
}

// Función para mostrar un mensaje de confirmación con botones de confirmación y cancelación
function mostrarMensajeConfirmacion(mensaje, callback) {
    const mensajeConfirmacion = document.createElement('div');
    mensajeConfirmacion.className = 'mensaje-confirmacion';
    mensajeConfirmacion.textContent = mensaje;

    // Crear botones de confirmación y cancelación
    const botonConfirmar = document.createElement('button');
    botonConfirmar.textContent = 'Confirmar';
    botonConfirmar.addEventListener('click', () => {
        callback(true);
        mensajeConfirmacion.remove();
    });
    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = 'Cancelar';
    botonCancelar.addEventListener('click', () => {
        callback(false);
        mensajeConfirmacion.remove();
    });
    // Establecer un estilo para el mensaje de confirmación
    mensajeConfirmacion.style.backgroundColor = '#fff3cd';
    mensajeConfirmacion.style.color = '#856404';
    mensajeConfirmacion.style.padding = '10px';
    mensajeConfirmacion.style.borderRadius = '5px';
    mensajeConfirmacion.style.position = 'fixed';
    mensajeConfirmacion.style.top = '20px';
    mensajeConfirmacion.style.right = '20px';
    mensajeConfirmacion.style.zIndex = '1000';
    mensajeConfirmacion.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    mensajeConfirmacion.style.transition = 'opacity 0.3s ease-in-out';
    mensajeConfirmacion.style.opacity = '1';
    mensajeConfirmacion.style.animation = 'fadeIn 0.5s';
    mensajeConfirmacion.style.animationFillMode = 'forwards';
    mensajeConfirmacion.style.fontSize = '16px';
    mensajeConfirmacion.style.fontFamily = 'Arial, sans-serif';
    mensajeConfirmacion.style.display = 'flex';
    mensajeConfirmacion.style.flexDirection = 'column';
    mensajeConfirmacion.style.alignItems = 'center';
    mensajeConfirmacion.style.justifyContent = 'center';
    mensajeConfirmacion.style.width = '300px';
    mensajeConfirmacion.style.cursor = 'pointer';
    mensajeConfirmacion.style.transition = 'transform 0.3s ease-in-out';
    mensajeConfirmacion.addEventListener('click', () => {
        mensajeConfirmacion.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeConfirmacion.remove();
        }, 300); // Esperar a que la animación de escala termine
    });
    // Agregar los botones al mensaje de confirmación
    mensajeConfirmacion.appendChild(botonConfirmar);
    mensajeConfirmacion.appendChild(botonCancelar);
    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeConfirmacion);
    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeConfirmacion.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeConfirmacion.remove();
        }, 300); // Esperar a que la animación de escala termine
    }, 3000);
}
// Función para mostrar un mensaje de advertencia con un botón de acción
function mostrarMensajeAdvertencia(mensaje, textoBoton, accion) {
    const mensajeAdvertencia = document.createElement('div');
    mensajeAdvertencia.className = 'mensaje-advertencia';
    mensajeAdvertencia.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el botón al mensaje
    mensajeAdvertencia.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeAdvertencia);

    // Establecer un estilo para el mensaje de advertencia
    mensajeAdvertencia.style.backgroundColor = '#fff3cd';
    mensajeAdvertencia.style.color = '#856404';
    mensajeAdvertencia.style.padding = '10px';
    mensajeAdvertencia.style.borderRadius = '5px';
    mensajeAdvertencia.style.position = 'fixed';
    mensajeAdvertencia.style.top = '20px';
    mensajeAdvertencia.style.right = '20px';
    mensajeAdvertencia.style.zIndex = '1000';
    mensajeAdvertencia.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    mensajeAdvertencia.style.transition = 'opacity 0.3s ease-in-out';
    mensajeAdvertencia.style.opacity = '1';
    mensajeAdvertencia.style.animation = 'fadeIn 0.5s';
    mensajeAdvertencia.style.animationFillMode = 'forwards';
    mensajeAdvertencia.style.fontSize = '16px';
    mensajeAdvertencia.style.fontFamily = 'Arial, sans-serif';
    mensajeAdvertencia.style.display = 'flex';
    mensajeAdvertencia.style.alignItems = 'center';
    mensajeAdvertencia.style.justifyContent = 'space-between';
    mensajeAdvertencia.style.width = '300px';
    mensajeAdvertencia.style.cursor = 'pointer';
    mensajeAdvertencia.style.transition = 'transform 0.3s ease-in-out';
    mensajeAdvertencia.addEventListener('click', () => {
        mensajeAdvertencia.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeAdvertencia.remove();
        }, 300); // Esperar a que la animación de escala termine
    });
    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeAdvertencia);
    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeAdvertencia.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeAdvertencia.remove();
        }, 300); // Esperar a que la animación de escala termine
    }, 3000);
}
// Función para mostrar un mensaje de información con un botón de acción
function mostrarMensajeInformacion(mensaje, textoBoton, accion) {
    const mensajeInformacion = document.createElement('div');
    mensajeInformacion.className = 'mensaje-informacion';
    mensajeInformacion.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el botón al mensaje
    mensajeInformacion.appendChild(botonAccion);

    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeInformacion);

    // Establecer un estilo para el mensaje de información
    mensajeInformacion.style.backgroundColor = '#d1ecf1';
    mensajeInformacion.style.color = '#0c5460';
    mensajeInformacion.style.padding = '10px';
    mensajeInformacion.style.borderRadius = '5px';
    mensajeInformacion.style.position = 'fixed';
    mensajeInformacion.style.top = '20px';
    mensajeInformacion.style.right = '20px';
    mensajeInformacion.style.zIndex = '1000';
    mensajeInformacion.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    mensajeInformacion.style.transition = 'opacity 0.3s ease-in-out';
    mensajeInformacion.style.opacity = '1';
    mensajeInformacion.style.animation = 'fadeIn 0.5s';
    mensajeInformacion.style.animationFillMode = 'forwards';
    mensajeInformacion.style.fontSize = '16px';
    mensajeInformacion.style.fontFamily = 'Arial, sans-serif';
    mensajeInformacion.style.display = 'flex';
    mensajeInformacion.style.alignItems = 'center';
    mensajeInformacion.style.justifyContent = 'space-between';
    mensajeInformacion.style.width = '300px';
    mensajeInformacion.style.cursor = 'pointer';
    mensajeInformacion.style.transition = 'transform 0.3s ease-in-out';
    mensajeInformacion.addEventListener('click', () => {
        mensajeInformacion.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeInformacion.remove();
        }, 300); // Esperar a que la animación de escala termine
    }); 
    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeInformacion);
    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeInformacion.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeInformacion.remove();
        }, 300); // Esperar a que la animación de escala termine
    }, 3000);
}
// Función para mostrar un mensaje de error con un botón de acción y un icono
function mostrarMensajeErrorConIcono(mensaje, textoBoton, accion, icono) {
    const mensajeError = document.createElement('div');
    mensajeError.className = 'mensaje-error';
    mensajeError.textContent = mensaje;

    // Crear el botón de acción
    const botonAccion = document.createElement('button');
    botonAccion.textContent = textoBoton;
    botonAccion.addEventListener('click', accion);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeError.appendChild(iconoElemento);
    mensajeError.appendChild(botonAccion);

    // Agregar el estilo para el mensaje de error
    mensajeError.style.backgroundColor = '#f8d7da';
    mensajeError.style.color = '#721c24';
    mensajeError.style.padding = '10px';
    mensajeError.style.borderRadius = '5px';
    mensajeError.style.position = 'fixed';
    mensajeError.style.top = '20px';
    mensajeError.style.right = '20px';
    mensajeError.style.zIndex = '1000';
    mensajeError.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    mensajeError.style.transition = 'opacity 0.3s ease-in-out';
    mensajeError.style.opacity = '1';
    mensajeError.style.animation = 'fadeIn 0.5s';
    mensajeError.style.animationFillMode = 'forwards';
    mensajeError.style.fontSize = '16px';
    mensajeError.style.fontFamily = 'Arial, sans-serif';
    mensajeError.style.display = 'flex';
    mensajeError.style.alignItems = 'center';
    mensajeError.style.justifyContent = 'space-between';
    mensajeError.style.width = '300px';
    mensajeError.style.cursor = 'pointer';
    mensajeError.style.transition = 'transform 0.3s ease-in-out';
    mensajeError.addEventListener('click', () => {
        mensajeError.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeError.remove();
        }, 300); // Esperar a que la animación de escala termine
    });
    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeError);
    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeError.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeError.remove();
        }, 300); // Esperar a que la animación de escala termine
    }   , 3000);
}
// Función para mostrar un mensaje de carga con un botón de cancelar y un icono
function mostrarMensajeCargaConIcono(mensaje, textoBoton, accionCancelar, icono) {
    const mensajeCarga = document.createElement('div');
    mensajeCarga.className = 'mensaje-carga';
    mensajeCarga.textContent = mensaje;

    // Crear el botón de cancelar
    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = textoBoton;
    botonCancelar.addEventListener('click', accionCancelar);

    // Agregar el icono al mensaje
    const iconoElemento = document.createElement('i');
    iconoElemento.className = icono;

    // Agregar el icono y el botón al mensaje
    mensajeCarga.appendChild(iconoElemento);
    mensajeCarga.appendChild(botonCancelar);

    // Agregar el estilo para el mensaje de carga
    mensajeCarga.style.backgroundColor = '#e2e3e5';
    mensajeCarga.style.color = '#383d41';
    mensajeCarga.style.padding = '10px';
    mensajeCarga.style.borderRadius = '5px';
    mensajeCarga.style.position = 'fixed';
    mensajeCarga.style.top = '20px';
    mensajeCarga.style.right = '20px';
    mensajeCarga.style.zIndex = '1000';
    mensajeCarga.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    mensajeCarga.style.transition = 'opacity 0.3s ease-in-out';
    mensajeCarga.style.opacity = '1';
    mensajeCarga.style.animation = 'fadeIn 0.5s';
    mensajeCarga.style.animationFillMode = 'forwards';
    mensajeCarga.style.fontSize = '16px';
    mensajeCarga.style.fontFamily = 'Arial, sans-serif';
    mensajeCarga.style.display = 'flex';
    mensajeCarga.style.alignItems = 'center';
    mensajeCarga.style.justifyContent = 'space-between';
    mensajeCarga.style.width = '300px';
    mensajeCarga.style.cursor = 'pointer';
    mensajeCarga.style.transition = 'transform 0.3s ease-in-out';
    mensajeCarga.addEventListener('click', () => {
        mensajeCarga.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeCarga.remove();
        }, 300); // Esperar a que la animación de escala termine
    });
    // Agregar el mensaje al cuerpo del documento
    document.body.appendChild(mensajeCarga);
    // Eliminar el mensaje después de 3 segundos
    setTimeout(() => {
        mensajeCarga.style.transform = 'scale(0)';
        setTimeout(() => {
            mensajeCarga.remove();
        }, 300); // Esperar a que la animación de escala termine
    }, 3000);
}
