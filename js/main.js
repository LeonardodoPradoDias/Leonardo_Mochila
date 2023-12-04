const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find( elemento => elemento.nome === nome.value )

}
const itemAtual = {
    "nome" : nome.value,
    "quantidade": quantidade.value
}

if (existe) {
    itemAtual.id = existe.id
    
    atualizaElemento(itemAtual)

    itens[existe.id] = itemAtual
} else {
    itemAtual.id = itens.length

    criaElemento(itemAtual)

    itens.push(itemAtual)
}