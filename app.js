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
    

    <div class="card border-primary mb-3" >
    <div class="card-header">Header</div>
    <div class="card-body text-primary">
      <h5 class="card-title">${articulo.titulo}</h5>
      <p class="card-text">${articulo.texto}</p>
      <button type="button" class="btn btn-outline-danger" id=" ${ articulo.id } ">eliminar</button>
    </div>


   
    
    
    `; 

    carrito.appendChild(row);    

    })
    
}
function ordenarIndex() {
    carrito.innerHTML = "";
  }


  function eliminarArticulo(e) {
    if (e.target.classList.contains("btn-outline-danger")) {
      let productoID = e.target.getAttribute("id");
      miCompra = miCompra.filter(
        (articulo) => articulo.id !== articulo.id
      );
      cuadroCarrito();
    }
  };


