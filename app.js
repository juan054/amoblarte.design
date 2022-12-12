alert ("Bienvenidos a Amoblarte.design");

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");
let nombreCompleto = alert("bienvenido " + nombre +" "+ apellido + " a amoblarte design");



const todosProductos = [
    {nombre: 'vanitory simple', precio: 15000},
    {nombre: 'vanitory de dos puertas', precio: 22000},
    {nombre: 'vanitory flotante', precio: 22000},
    {nombre: 'mesa de luz simple', precio: 16000},
    {nombre: 'mesa de luz con cajonera', precio: 25000},
    {nombre: 'mesa de luz con desayunador', precio: 35000},
    {nombre: 'escritorio simple', precio: 16000},
    {nombre: 'escritorio flotante', precio: 26000},
    {nombre: 'escritorio con cajon', precio: 34000},
    {nombre: 'alacena simple', precio: 16000},
    {nombre: 'alacena de pino', precio: 20000},
    {nombre: 'alacena de mdf', precio: 38000},
]
const resultado = todosProductos.filter((el) => el.nombre.includes('vanitory'))
const resultado1 = todosProductos.filter((el) => el.nombre.includes('mesa'))
const resultado2 = todosProductos.filter((el) => el.nombre.includes('escritorio'))
const resultado3 = todosProductos.filter((el) => el.nombre.includes('alacena'))

const conIva = todosProductos.map((el) => {
    return {
        
        nombre: el.nombre,
        precio: el.precio * 1.5
    }
})


function carrito(){

let producto = parseInt (prompt(`seleccione el producto:
        1: vanitory
        2: mesa de luz
        3: escritorio 
        4: alacena
       
        `));

    switch(producto){
            case 1:{
            console.log("producto sin iva")     
            console.log( resultado)
            break;}
            case 2:{
            console.log("producto sin iva")      
            console.log(resultado1)
            break;}
            case 3:{
            console.log("producto sin iva")          
            console.log(resultado2)
            break;}
            case 4:{
            console.log("producto sin iva")      
            console.log(resultado3)
            break;}
            default: {
            alert("producto incorrecto")
            break;}
    }

console.log("precio con iva de todos los productos")  
console.log(  conIva)
}
carrito()


    
 







