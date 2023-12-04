const form = console.log(document.getElementById("novoItem"))

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    criarElemento(nome,quantidade)
})

function criarElemento(nome,quantidade){
    console.log(nome)
    console.log(quantidade)

     //<li class="item"><strong>7</strong>Camisas</li>
   const novoItem = document.criateElemento('li')
   novoItem.classList.add("item")
   const numeroItem = document.criateElemento('strong')
   numeroItem.innerHTML = quantidade

   novoItem.appendChild(numeroItem)
   novoItem.innerHTML += nome

   const lista = document.getElementById("lista")

   lista.appendChild(novoItem)

   console.log(novoItem)

}