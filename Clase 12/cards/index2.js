const productos = [
    {
        name: "Smartphone X",
        description: "Camara Pro, bateria duradera",
        price: "999.99",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Smartwatch",
        description: "Salud y notificaciones al instante",
        price: "249.00",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Auriculares BT",
        description: "Sonido claro, cancelacion de ruido",
        price: "129.50",
        image: "https://placehold.co/600x400"
    },
    {
        name: "Notebook Dell",
        description: "Ideal para trabajo y estudio",
        price: "1250.75",
        image: "https://placehold.co/600x400"
    }
];

const productContainer = document.getElementById('product-container');

// La dif con .forEach es q este ademas de recorrer el array y ejecutar una funcion por cada producto y va a devolver un array
const cardsHtml = producto.map(producto => {
    // comillas invertidas ` `
    // Las variables se insertan con $(variable)
    // Usamos template strings

    return `
            <div class="product-card">
            <img src="${producto.image}" alt= "${producto.name}">
            <h3>${producto.name}</h3>
            <p>${producto.description}</p>
            <div class="price">$${producto.price}</div>
            </div>
            `;
})

console.log(cardsHtml)

// Unimos todos los strings HTML de las cards y los insertamos en el contenedor
productContainer.innerHTML = cardsHtml.join(' ')