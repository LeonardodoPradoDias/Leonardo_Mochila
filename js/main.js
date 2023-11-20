const form = console.log(document.getElementById("novoItem"))

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    

    console.log(evento)
    console.log(evento.target[0].value)
})