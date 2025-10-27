
const paragrafosGeral = document.getElementsByClassName("paragrafo-geral")
const itemlista = document.getElementsByClassName("item-lista")
const totalitens = document.getElementById("total-itens")
const itemsImportante = document.getElementsByClassName("paragrafo-geral item-importante")
const secao = document.getElementById("secao-1")
const cartao = document.getElementById("btn-adicionar")
const itemCartao = document.getElementsByClassName("cartao")
const contcat = document.getElementById("container-cartoes")
// atv 01 e 03
for(pagrafo of paragrafosGeral) {
    pagrafo.style.color = "blue"
    Array.push = ("lido")
}
//atv 2
console.log(`A página tem ${itemlista.length} elementos que possuem a classe item-lista`);
totalitens.innerText = `${itemlista.length}`

//atv 3

for (pagrafo of paragrafosGeral) {
    pagrafo.textContent += "(lido)"
    // pagrafo.textContent = pagrafo.textContent + "(lido)"
}
//atv 4
 
for(elemento of itemsImportante){
    elemento.classList.add('destaque')
}

//atv 5
for(elemento of secao && paragrafosGeral){
    elemento.style.borderColor = 'red';
    elemento.style.borderStyle = 'solid';
    elemento.style.borderWidth = '1px';
}

//atv6

for(gg of itemCartao ){
    gg.addEventListener("click", function() {
        alert("Cartão clicado!")
    })
}

//atv 7

for(edio of itemCartao){
  console.log(edio.getAttributeNode("data-produto-id").value);
}
//atv 8
console.log(contcat.length);
cartao.addEventListener("click", function(){
    const cartoesAdd = document.createElement("div");
    cartoesAdd.classList.add('cartão');
   cartoesAdd.textContent = ("Novo produto");
   contcat.appendChild(cartoesAdd);
   console.log(cartao.length);
})

//atv 09