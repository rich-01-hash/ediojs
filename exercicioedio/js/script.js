const btnAlterar = document.getElementById("btn-alterar")
const altMensagem = document.getElementById("mensagem")
const btnResetar = document.getElementById("btn-resetar")
const contador = document.getElementById("contador-valor")
const btnSomar = document.getElementById("btn-somar")
const btnSubtrair = document.getElementById("btn-subtrair")
const btnTexto = document.getElementById("btn-texto")
const altTexto = document.getElementById("texto")
const tituloPrin = document.getElementById("titulo-principal")
const btnEnviar = document.getElementById("btn-enviar")
const resultado = document.getElementById("resultado")
const campName = document.getElementById("campo-nome")
const bntcor = document.getElementById("btn-mudar-cor")
const cor = document.getElementById("cores")
const btnToggleMsg = document.getElementById("btn-toggle-msg")
const corAtual = document.getElementById("cor-atual")
let number = 0

//atividade 1 
btnAlterar.addEventListener("click", function () {
    altMensagem.innerText = "menino sapeca"

})
//atividade 2
btnResetar.addEventListener("click", function () {
    altMensagem.innerText = "mensagem"
})
//atividade 3
btnSomar.addEventListener("click", function () {
    contador.textContent = number++
})

btnSubtrair.addEventListener("click", function () {
    contador.textContent = number--
})
//atividade 4
btnTexto.addEventListener("click", function () {
    altTexto.innerText = "amo o Edio"
})

//atividade 5
btnAlterar.addEventListener("click", function () {
    tituloPrin.style.color = "blue"
})

//atividade 6
//atividade 7
btnEnviar.addEventListener("click", function () {
    if (campName.value === "") {
        resultado.style.color = "red"
        resultado.innerText = "campo obrigatório!";
    } else {
        resultado.innerText = `olá ${campName.value} !`
    }
})

// atv 08 e 10  
bntcor.addEventListener("click" , function (){
  if(cor.style.backgroundColor === "yellow") {
    cor.style.backgroundColor = "white"
    corAtual.innerText = "cor atual: branco"
  } else if (cor.style.backgroundColor === "white") {
    cor.style.backgroundColor = "yellow"
     corAtual.innerText = "cor atual: amarelo"
  } else {
    cor.style.backgroundColor = "yellow"
     corAtual.innerText = "cor atual: amarelo"
  }
})

//atv 09
btnToggleMsg.addEventListener("click" , function(){
    altMensagem.innerText = ""
})

