document.addEventListener('DOMContentLoaded', () => {

let baseDatos = []
fetch("./data.json")
    .then(response => response.json())
    .then(data =>{ 
        baseDatos = data;

        crearProductos(baseDatos);
        }
       
    )


let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const DOMbotonComprar = document.querySelector('#boton-comprar');
const miLocalStorage = window.localStorage;



function crearProductos (baseDatos) {
    baseDatos.forEach((info) => {
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
        esqueletoBoton.classList.add('btn', 'btn-outline-dark');
        esqueletoBoton.textContent = 'Agregar';
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
        const miItem = baseDatos.filter((itembaseDatos) => {
            return itembaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const esqueleto = document.createElement('li');
        esqueleto.classList.add('list-group-item', 'text-right', 'mx-2');
        esqueleto.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} -${divisa} ${miItem[0].importe}`;
        
        
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'Eliminar';
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
        const miItem = baseDatos.filter((itembaseDatos) => {
            return itembaseDatos.id === parseInt(item);
        });
       
        return total + miItem[0].importe;
    }, 0).toFixed(2);
}

function vaciarCarrito() {
    
    carrito = [];
    
    productosDelCarrito();
    
    localStorage.clear();
 alert("hola");
}
function comprarCarrito() {
    
carrito = [];
productosDelCarrito();
localStorage.clear();
Swal.fire(
    'Muchas gracias por su compra!',
    'Le enviaremos la factura a su mail!',
    'success'
  )  
};



function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage () {
    
    if (miLocalStorage.getItem('carrito') !== null) {
        carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
}


DOMbotonVaciar.addEventListener('click', vaciarCarrito);
DOMbotonComprar.addEventListener('click', comprarCarrito);


cargarCarritoDeLocalStorage();
   
productosDelCarrito();
});















