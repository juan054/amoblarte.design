const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
card.addEventListener("click", (e)=>{
datosProductos(e.target.parentElement );
    
    } );


} );

let miCompra = [];


function datosProductos(articulo) {
    const detalleProducto = {
        titulo: articulo.querySelector(".card-title").textContent,
        texto: articulo.querySelector(".card-text").textContent,
    };
    miCompra = [...miCompra, detalleProducto];
    cuadroCarrito();
    
}




const carrito = document.querySelector("#miCarrito");
function cuadroCarrito() {
    ordenarIndex();
   
    miCompra.forEach((articulo)=>{
    const row = document.createElement("p");   
    row.innerHTML=`
    
    <div class="container">
    <h5>${articulo.titulo}</h5>
    <p>${articulo.texto}</p>
    <button class="btn btn-danger">Eliminar</button>
    </div>
    
    
    
    `; 

    carrito.appendChild(row);    

    })
    
}
function ordenarIndex() {
    carrito.innerHTML = "";
  }





