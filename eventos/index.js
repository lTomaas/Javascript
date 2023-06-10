const hTexto = document.getElementById("texto");

hTexto.addEventListener("cambioTexto", evento =>{
    hTexto.innerText = evento.detail.texto;
    hTexto.style.color = evento.detail.color;
})


function cambiarTexto(nuevoTexto, color){
    const nuevoEvento = new CustomEvent("cambioTexto", {
        detail: {
            texto: nuevoTexto,
            color: color //tambien valido solo color
        }
    })
    
    hTexto.dispatchEvent(evento);
}