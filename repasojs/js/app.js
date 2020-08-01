// CREAR VARIABLES

//Variables con var

// var aprendiendo = 'JavaScript';

//variables con const

// const aprendiendo='JavaScript';
// aprendiendo = true;

//Variables con let

// let aprendiendo='javascript';
// aprendiendo=true;

//Scope
// var musica = 'Rock';
// if (musica) {
//     var musica = 'Grange';
//     console.log('dentro del if:', musica);

// }
// console.log('fuera del if:', musica);

//scope con let
// let musica = 'Rock';
// if (musica) {
//     let musica = 'Grange';
//     console.log('dentro del if:', musica);

// }
// console.log('fuera del if:', musica);

//-------------------------------------------------------------
// Template Strings 
const nombre = 'Juan',
    trabajo = 'Desarrollador web';

//concatenar con múltiples lineas
const contenedorApp = document.querySelector('#app');
let html = `
    <ul>
        <li>Nombre: ${nombre}</li>
        <li>Trabajo: ${trabajo}</li>

    </ul>
    `;
contenedorApp.innerHTML = html;

//---------------------------------------------------
// Creando una funcion

// Function Declaration 
function saludar(nombre) {
    console.log('Bienvenido' + nombre);
}
saludar('Luis');

// Function Expression 
const cliente = function (nombreCliente) {
    console.log('Mostrando datos del cliente: ' + nombreCliente);
}
cliente('Juan');

//--------------------------------------------------------------------
// Parametros por default en las funciones
function actividad(nombre = 'walter white', actividad = 'Enseñar quimica') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad('Juan', 'Aprender JavaScript');
actividad('Pedro', 'Creando un sitio web');
actividad();


const actividad2 = function (nombre = 'walter white', actividad = 'Enseñar quimica') {
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad2('Fabiola', 'Aprender Administración');
actividad2('Luis');


//------------------------------------------------
// arrow functions

let viajando = destino => `Viajdando a la ciudad de : ${destino}`;

let viaje;
viaje = viajando('Paris');
console.log(viaje);

//_-----------------------------------------------------------------
// Objetos 

// Object Literal 
const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador web',
    edad: 24
}
const persona2 = {
    nombre: 'Luis',
    profesion: 'Desarrollador web',
    edad: 24
}
console.log(persona);
console.log(persona2);

// Object Constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}
// crear una nueva tarea
const tarea1 = new Tarea('Aprender JS', 'Urgente');
const tarea2 = new Tarea('Aprender React', 'Urgente');
console.log(tarea1);
console.log(tarea2);

//---------------------------------------
// Prototypes
function mostrarInformacionTarea(tarea, prioridad) {
    return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
}

const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia)
console.log(mostrarInfo);

//Agregar un prototype a tarea:
Tarea.prototype.mostrarInformacion = function () {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}
console.log(tarea2.mostrarInformacion());

//--------------------------------------------------------------------------
// Destructuring de objetos
const aprendiendoJs = {
    version: {
        nueva: 'ES6',
        anterior: 'ES5'
    },
    frameworks: ['React', 'VueJs', 'AngularJs']
}

//Destructuring es extraer valores de un objeto
//Destructuring forma nueva
let { version } = aprendiendoJs;
console.log(version);

let { anterior } = aprendiendoJs.version;
console.log(anterior);


//----------------------------------------------------------------------------------------------
// Object Literal enhancement
//Es agregar valores a un objeto

const band = 'Metallica';
const genero = 'Heacy Metal';
const canciones = ['Master of puppets', 'Seek & Destroy', 'Enter Sandman'];

// forma anterior 
const metallica = {
    banda: band,
    genero: genero,
    canciones: canciones
}
console.log(metallica);

//forma nueva
const metallica1 = { band, genero, canciones };
console.log(metallica1);

//----------------------------------------------------------------------------------------------------------------
// Metodoso funciones en un Objecto

const persona1 = {
    nombre: 'Luis',
    trabajo: 'Desarrollador Web',
    edad: 24,
    mostrarInformacion() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
    }
}

persona1.mostrarInformacion();

//------------------------------------------------------------------------------------------------------
// Arreglos, map, objeck.keys

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const appContenedor = document.querySelector('#app');

//forEach
let html1 = '';
carrito.forEach(producto => {
    html1 += `<li>${producto}</li>`;
});

appContenedor.innerHTML = html1;

//map
const carMarket = carrito.map(prodcuto => {
    return `El producto es ` + prodcuto;
});
console.log(carMarket);

//Object.keys
const persona3 = {
    nombre: 'Luis',
    profesion: 'Desarrollador web',
    edad: 50
}
console.log(Object.keys(persona3));

//------------------------------------------------------------------
// reduce

const persona5 = [
    { nombre: 'Juan', edad: 23, aprendiendo: 'Js' },
    { nombre: 'Luis', edad: 24, aprendiendo: 'react' }
]


let total = persona5.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total);

//-----------------------------------------------------------------------
// Promises  para los asyncronos
const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = true;
        if (descuento) {
            resolve('Descuento aplicado');
        } else {
            reject('No se puede aplicar el descuento');
        }
    }, 3000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});


//Promise con Ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    //pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //llamado a ajax
    const xhr = new XMLHttpRequest();

    //abrir la conexion
    xhr.open('GET', api, true);

    //on load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    //opcional (on error)
    xhr.onerror = (error) => reject(error);

    //send
    xhr.send()
});

descargarUsuarios(20)
    .then(
        miembros => console.log(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    )




