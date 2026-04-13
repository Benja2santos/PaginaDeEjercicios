// FUNCION DEL BOTON DE RECARGA
function recarga(){
    document.querySelector("button")
            .addEventListener("click", () => {
                window.location.reload();
            });
}
// EJECUCION INSTANTANEA
recarga();

// FUNCION PARA SALUDAR AL USUARIO (PIDE NOMBRE E IMPRIME "Hola [nombre]")
function saludar(){
    const nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje");

    if (nombre.trim() === ""){
        mensaje.textContent = "Escribe tu nombre";
    }else{
        mensaje.innerText = `Hola ${nombre}! Bienvenid@`;
    }
}

