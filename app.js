alert ("Bienvenidos a Amoblarte.design");

solicitarNombre ();
function solicitarNombre(){
let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")

let nombrecompleto = alert ("bienvenido " + nombre + " " + apellido);
seleccionarArea();

}

function seleccionarArea(){
        let area = parseInt (prompt(`seleccione su area para ingresar:
        1: ventas
        2: logistica
        3: marketing 
        4: infraestructura
        5: sistemas
        6: limpieza
        7: reposicion
        8: etiquetado 
        9: embalaje
        10: facturacion
        `));
   
        switch (area) {
            case 1:{
            alert("saque turno")
            break;}
            case 2:{
            alert("saque turno")
            break;}
            case 3:{
            alert("saque turno")
            break;}
            case 4:{
            alert("saque turno")
            break;}
            case 5:{
            alert("saque turno")
            break;}
            case 6:{
            alert("saque turno")
            break;}
            case 7:{
            alert("saque turno")
            break;}
            case 8:{
            alert("saque turno")
            break;}
            case 9:{
            alert("saque turno")
            break;}
            case 10:{
            alert("saque turno")
            break;}    
            default: {
            alert("area incorrecta")
            break;}
            
                
        }
       
    seleccioneTurno()

    
}

function seleccioneTurno(){
    
    for (let i = 1; i <=10; i++){
        let ingresarNombre = prompt("ingresar nombre") ;

        alert ("turno n°" + i + "nombre "+ ingresarNombre);
        if(i == 1){
            break
        }
        if(i == 2){
            break
        }
        if(i == 3){
            break
        }
        if(i == 4){
            break
        }
        if(i == 5){
            break
        }
        if(i == 6){
            break
        }
        if(i == 7){
            break
        }
        if(i == 8){
            break
        }
        if(i == 9){
            break
        }
        if(i == 10){
            break
        }
    }
   
    
    



}


