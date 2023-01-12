document.addEventListener('DOMContentLoaded', () => {
/*base de datos de los productos para no hacer un html tan extenso*/

const productos = [
{id:100, nombre:`estante con mensulas retro`, importe: 8000, imagen:`./imagenes/cocinaproductos.png`},
{id:101, nombre:`mesa ratona escandinava`, importe: 45000, imagen:`./imagenes/cocinaproductos.png`},
{id:102, nombre:`escritorio gammer`, importe: 60000, imagen:`./imagenes/cocinaproductos.png`},
{id:103, nombre:`condimentero funcional`, importe: 17000, imagen:`./imagenes/cocinaproductos.png`},
{id:104, nombre:`estante flotante exagonal`, importe: 8500 , imagen:`./imagenes/cocinaproductos.png`},
{id:105, nombre:`huerta vertical para deck`, importe: 88000,  imagen:`./imagenes/cocinaproductos.png`},
{id:106, nombre:`modulo con cajones accesorio de cocina `, importe: 29000, imagen:`./imagenes/cocinaproductos.png`},
{id:107, nombre:`silla convencional`, importe: 35000, imagen:`./imagenes/cocinaproductos.png`},
{id:108, nombre:`vinoteca (cava) para 6 botellas colgante`, importe: 27000, imagen:`./imagenes/cocinaproductos.png`},
{id:109, nombre:`soporte para copas`, importe: 20000,  imagen:`./imagenes/cocinaproductos.png`},
{id:110, nombre:`barril tipo cava 12 botellas `, importe: 48000, imagen:`./imagenes/cocinaproductos.png`}
];


let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const miLocalStorage = window.localStorage;
/*funcion para agregar estos productos al html*/


function crearProductos () {
    productos.forEach((info) => {
        const esqueleto = document.createElement('div');
        esqueleto.classList.add('card', 'col-sm-4');

        const esqueletoCuerpo = document.createElement('div');
        esqueletoCuerpo.classList.add('card-body');

        const esqueletoTitulo = document.createElement('h5');
        esqueletoTitulo.classList.add('card-title');
        esqueletoTitulo.textContent = info.nombre;

        const esqueletoImagen = document.createElement('img');
        esqueletoImagen.classList.add('img-fluid');
        esqueletoImagen.setAttribute('src', info.imagen);

        const esqueletoPrecio = document.createElement('p');
        esqueletoPrecio.classList.add('card-text');
        esqueletoPrecio.textContent = `${divisa}${info.importe}`;

        const esqueletoBoton = document.createElement('button');
        esqueletoBoton.classList.add('btn', 'btn-primary');
        esqueletoBoton.textContent = '+';
        esqueletoBoton.setAttribute('marcador', info.id);
        esqueletoBoton.addEventListener('click', agregarProductoAlCarrito);


        esqueletoCuerpo.appendChild(esqueletoImagen);
        esqueletoCuerpo.appendChild(esqueletoTitulo);
        esqueletoCuerpo.appendChild(esqueletoPrecio);
        esqueletoCuerpo.appendChild(esqueletoBoton);
        esqueleto.appendChild(esqueletoCuerpo);
        DOMitems.appendChild(esqueleto);
        });
    
}


function agregarProductoAlCarrito(e) {
    carrito.push(e.target.getAttribute('marcador'))
    
    productosDelCarrito();
    
    guardarCarritoEnLocalStorage();
}

function productosDelCarrito() {
    DOMcarrito.textContent=``;
    const carritoSinDuplicados = [...new Set(carrito)];
    
    carritoSinDuplicados.forEach((item)=>{
        const miItem = productos.filter((itemProductos) => {
            return itemProductos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const esqueleto = document.createElement('li');
        esqueleto.classList.add('list-group-item', 'text-right', 'mx-2');
        esqueleto.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].importe}${divisa}`;
        
        
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);

        esqueleto.appendChild(miBoton);
        DOMcarrito.appendChild(esqueleto);
    });
    DOMtotal.textContent = calcularTotal();
}

function borrarItemCarrito(e) {
   
    const id = e.target.dataset.item;
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    
    productosDelCarrito();
   
    guardarCarritoEnLocalStorage();

}

function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = productos.filter((itemProductos) => {
            return itemProductos.id === parseInt(item);
        });
       
        return total + miItem[0].importe;
    }, 0).toFixed(2);
}

function vaciarCarrito() {
    
    carrito = [];
    
    productosDelCarrito();
    
    localStorage.clear();

}


function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}


DOMbotonVaciar.addEventListener('click', vaciarCarrito);


cargarCarritoDeLocalStorage();
crearProductos();
productosDelCarrito();
});






















