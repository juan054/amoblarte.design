
let nombreContacto = document.querySelector("#nombre");
let emailContacto = document.querySelector("#email");
let direccionContacto = document.querySelector("#direccion");
let ciudadContacto = document.querySelector("#ciudad");
let localidadContacto = document.querySelector("#localidad");
let consultaContacto = document.querySelector("#consulta");


nombreContacto.addEventListener("input", function () {
    
    if (nombreContacto.value === "") {
        alert ("ingrese un nombre valido")
    }
    
});
emailContacto.addEventListener("input", function () {
    
    if (emailContacto.value === "") {
        alert ("ingrese un nombre valido")
    }
    
});
direccionContacto.addEventListener("input", function () {
    
    if (direccionContacto.value === "") {
        alert ("ingrese una direccion valida")
    }
    
});
ciudadContacto.addEventListener("input", function () {
    
    if (ciudadContacto.value === "") {
        alert ("ingrese una ciudad valida")
    }
    
});





let formulario = document.querySelector("#formulario");
let mensaje = document.querySelector("#mensaje");


const mostrarMensaje = formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    mensaje.innerHTML =`
    <div class="alert alert-primary" role="alert">
        <h4> Su consulta a sido realizada con exito a la brevedad nos contactaremos al email ${emailContacto.value}. </h4>
    </div>
 `
    
});
