// fetch()
// es una funcion d JavaScript moderna q te permite hacer
// solicitudes de red, tipicamente para obtener informacion
// (datos) de un servidor web en internet. Cuando usas 
// fetch(), la operacion es asincrona. Esto significa q
// fetch() envia la solicitud y no espera a q la respuesta
// llegue para q el resto d tu codigo JavaScript siga 
// ejecutandose. En lugar de detener todo, tu codigo puede
// hacer otras cosas mientras fetch() esta trabajando en 
// segundo plano.

// Una vez q fetch() ha com

// PASO 1: Crea una funcion q sea 'async'
async function obtenerYMostrarProductos() {
    try {
        // PASO 2: Usa 'await' con fetch para esperar la 
        // respuesta del servidor. La ejecucion se detiene
        // aqui hasta q la respuesta de la red llegue.
        const response = await fetch('https://fakestoreapi.com/products');
        // console.log(response)

        // PASO 3: Usa 'await' de nuevo para esperar q la 
        // respuesta se convierta en JSON.
        // La ejecucion se detiene aqui hasta q los datos estan
        // listos en formato JavaScript
        const data = await response.json();

        // PASO 4: Ahora q 'data' ya tiene la informacion,
        // puedes usarla.
        console.log(data);
    } catch(error) {
        // Si algo sale mal (ej: no hay internet, el servidor no responde),
        // este bloque 'catch' atrapara el error
        console.error('Ocurrio un error al obtener los productos:', error);
    }
}

// PASO 5: Llama a la funcion para q se ejecute
obtenerYMostrarProductos();