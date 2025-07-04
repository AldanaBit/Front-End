function numeroAleatorio(min,max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

const productos = [
    {
        id: 1,
        titulo: "Brazales de duelo",
        autor: "Brandon Sanderson",
        precio: 60000,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL47533580M-M"
    },
   {
        id: 2,
        titulo: "Canciones de un soñador muerto",
        autor: "Thomas Ligotti",
        precio: 42080,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL47267275M-M"
    },
    {
        id: 3,
        titulo: "El barco de teseo",
        autor: "J. J. Abrams",
        precio: 63938,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL51565329M-M"
    },
    {
        id: 4,
        titulo: "El pacto",
        autor: "Laura Alvea y Jose Ortuño",
        precio: 40400,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL47506779M-M"
    },
    {
        id: 5,
        titulo: "Los cantos de Maldoror",
        autor: "Conde de Lautréamont",
        precio: 49900,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL26853447M-M"
    },
    {
        id: 6,
        titulo: "The Children on the Hill",
        autor: "Jennifer McMahon",
        precio: 40000,
        idioma: "Ingles",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL40225225M-M"
    },
    {
        id: 7,
        titulo: "Sabotage",
        autor: "Shantel Tessier",
        precio: 32000,
        idioma: "Ingles",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL49295327M-M"
    },
    {
        id: 8,
        titulo: "Fire Night",
        autor: "Penelope Douglas",
        precio: 18500,
        idioma: "Ingles",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL47718259M-M"
    },
    {
        id: 9,
        titulo: "La vida invisible de Addie Larue",
        autor: "V.E.SCHWAB",
        precio: 42600,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL28151758M-M"
    },
    {
        id: 10,
        titulo: "The Dead Zone",
        autor: "Stephen King",
        precio: 32700,
        idioma: "Ingles",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL27281791M-M"
    },
    {
        id: 11,
        titulo: " Los ojos son la mejor parte",
        autor: "Monika Kim",
        precio: 44850,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL51053127M-M"
    },
    {
        id: 12,
        titulo: "El caso Hartung",
        autor: "Soren Sveistrup",
        precio: 42900,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL32701247M-M"
    },
    {
        id: 13,
        titulo: "The last murder at the end of the world",
        autor: "Stuart Turton",
        precio: 28700,
        idioma: "Ingles",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL51680951M-M"
    },
    {
        id: 13,
        titulo: "A la caza del hombre del saco",
        autor: "Richard Chizmar",
        precio: 47000,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL33249877M-M"
    },
    {
        id: 14,
        titulo: "Éxodo",
        autor: "Kate Stewart",
        precio: 38500,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL39556212M-M"
    },
    {
        id: 15,
        titulo: "Corazones en la atlántida",
        autor: "Stephen King",
        precio: 35700,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL9348248M-M"
    },
    {
        id: 16,
        titulo: "Mestros del horror",
        autor: "José María Nebreda Sáinz-Pardo",
        precio: 49900,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL25621029M-M"
    },
    {
        id: 17,
        titulo: "La tentación más oscura",
        autor: "Danielle Lori",
        precio: 42000,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL46950830M-M"
    },
    {
        id: 18,
        titulo: "Nightfall",
        autor: "Penelope Douglas",
        precio: 43300,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL51343625M-M"
    },
    {
        id: 19,
        titulo: "Knight and the moth",
        autor: "Rachel Gilling",
        precio: 47000,
        idioma: "Inglés",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL57568654M-M"
    },
    {
        id: 20,
        titulo: "Gothikana",
        autor: "Runix",
        precio: 29470,
        idioma: "Inglés",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL50721163M-M"
    },
    {
        id: 21,
        titulo: "El libro de Sherlock Holmes",
        autor: "Carmen Gómez Aragón",
        precio: 34800,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL47672054M-M"
    },
    {
        id: 22,
        titulo: "Nightbane y Lichtlark",
        autor: "Alex Aster",
        precio: 60000,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL51639369M-M"
    },
    {
        id: 23,
        titulo: "Never Flinch",
        autor: "Stephen King",
        precio: 51700,
        idioma: "Inglés",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL56971290M-M"
    },
    {
        id: 24,
        titulo: "The Body",
        autor: "Stephen King",
        precio: 23500,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL28266711M-M"
    },
    {
        id: 25,
        titulo: "The house we grew up in",
        autor: "Lisa Jewell",
        precio: 29900,
        idioma: "Inglés",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL25629196M-M"
    },
    {
        id: 26,
        titulo: "In the likely event",
        autor: "Rebecca Yarros",
        precio: 24990,
        idioma: "Inglés",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL46180569M-M"
    },
    {
        id: 27,
        titulo: "Skeleton Crew",
        autor: "Stephen King",
        precio: 32400,
        idioma: "Inglés",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL24765716M-M"
    },
    {
        id: 28,
        titulo: "1984",
        autor: "George Orwell",
        precio: 39800,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL39803336M-M"
    },
    {
        id: 29,
        titulo: "Hungerstone",
        autor: "Kat Dunn",
        precio: 42600,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL59380379M-M"
    },
    {
        id: 30,
        titulo: "Ugly Love",
        autor: "Colleen Hoover",
        precio: 27800,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL28530699M-M"
    },
    {
        id: 31,
        titulo: "Los Sonánbulos",
        autor: "Chuck Wendig",
        precio: 33750,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL47334312M-M"
    },
    {
        id: 32,
        titulo: "Deep Cuts",
        autor: "Holly Brickley",
        precio: 40900,
        idioma: "Inglés",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL57563339M-M"
    },
    {
        id: 33,
        titulo: "Voices in the snow",
        autor: "Darcy Coates",
        precio: 29900,
        idioma: "Inglés",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL27915548M-M"
    },
    {
        id: 34,
        titulo: "Phantasma",
        autor: "Kaylie Smith",
        precio: 34680,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL51104480M-M"
    },
    {
        id: 35,
        titulo: "Home is where the bodies are",
        autor: "Jeneva Rose",
        precio: 33000,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL51727745M-M"
    },
    {
        id: 36,
        titulo: "Cura Mortal -El corredor del laberinto Libro 3",
        autor: "James Dashner",
        precio: 36000,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL25617064M-M"
    },
    {
        id: 37,
        titulo: "Vienen cuando hace frio",
        autor: "Carlos Sisi",
        precio: 39620,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL27635905M-M"
    },
    {
        id: 38,
        titulo: "Yo soy Providence 1 La vida y época de H.P.Lovecraft",
        autor: "S.T.Joshi",
        precio: 51470,
        idioma: "Español",
        stock: numeroAleatorio(1,50),
        img: "https://covers.openlibrary.org/olid/OL47109239M-M"
    },
]