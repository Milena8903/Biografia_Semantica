
// Utilizando un método html
function mostrarMensaje(){
    console.log('Hizo click en el boton' + new Date().toLocaleDateString());
}

//coja la fecha del sistema y conviertalo en un string

//Agregar un eventListener al otro boton
let boton = document.getElementById("otroBoton");
boton.addEventListener("click", ()=>{console.log('Hizo click en el boton' + new Date().toLocaleDateString());})
