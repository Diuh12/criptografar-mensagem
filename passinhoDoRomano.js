var botaoExecucao = document.getElementById("botaoExecucao")

botaoExecucao.addEventListener("click", escolherCesarOuBase64, false)

function ocultarCampo(botao){
    var correrCasa = document.getElementById("quantidadeDeCasa")

    if(botao.value == 'cesar'){
        correrCasa.style.visibility = "visible"
    }else{
        correrCasa.style.visibility = "hidden"
    }
}

function mudarNomeBotao(acao) {
    var botaoExecucao = document.getElementById("botaoExecucao")

    if (acao.value == "codificar") {
        botaoExecucao.innerHTML = "Codificar mensagem!"
    }else{
        botaoExecucao.innerHTML = "Decodificar mensagem!"
    }
}

function escolherCesarOuBase64(){
    if (document.getElementById("base64").checked == true){
        base64() 
    }else{
        cesar()
    }
}

function cesar() {
    var textoEntrada = document.getElementById("textoEntrada").value.split('', -1)
    var textoSaida = document.getElementById("textoSaida")
    var textoCifrado = ''
    
    for(var i = 0; i < textoEntrada.length; i++){
        if (document.getElementById("cifrar").checked == true) {
            textoCifrado += substituirLetra(textoEntrada[i])
        }else{
            textoCifrado += decifrarCesar(textoEntrada[i])
        }
    }

    textoSaida.innerHTML = textoCifrado
}

function decifrarCesar(letra) {
    var correrCasa = document.getElementById("correrCasa").value
    var letraDecifrada = String(letra).charCodeAt() - parseInt(correrCasa)

    return String.fromCharCode(letraDecifrada)
}

function substituirLetra(letra) {
    var correrCasa = document.getElementById("correrCasa").value
    var novoCharAt = String(letra).charCodeAt() + parseInt(correrCasa)

    return String.fromCharCode(novoCharAt)
}

function base64() {
    var textoEntrada = document.getElementById("textoEntrada").value 
    var textoSaida = document.getElementById("textoSaida")

    if (document.getElementById("cifrar").checked == true) {
        textoSaida.innerHTML = btoa(textoEntrada)
    }else{
        textoSaida.innerHTML = atob(textoEntrada)
    }
}
