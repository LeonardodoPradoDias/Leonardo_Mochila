const form = console.log(document.getElementById("novoItem"))

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    criarElemento(nome,quantidade)
})

function criarElemento(nome,quantidade){
    console.log(nome)
    console.log(quantidade)

}