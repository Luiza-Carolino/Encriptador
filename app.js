
function renderizarResultado(texto) {
    if(texto) {
        document.getElementsByClassName("foto")[0].style.display = "none";
        document.getElementsByClassName("erroSemTextop")[0].style.display = "none";
        document.getElementsByClassName("erroSemTextoh1")[0].style.display = "none";
        document.getElementsByClassName("resultado")[0].style.display = "block";
        document.getElementsByClassName("copiar")[0].style.display = "block";
    } else {
        document.getElementsByClassName("foto")[0].style.display = "block";
        document.getElementsByClassName("erroSemTextop")[0].style.display = "block";
        document.getElementsByClassName("erroSemTextoh1")[0].style.display = "block";
        document.getElementsByClassName("resultado")[0].style.display = "none";
        document.getElementsByClassName("copiar")[0].style.display = "none";
    }
}

function verificarLetrasMaiusculas(texto) {
    return texto === texto.toLowerCase() && texto !== texto.toUpperCase();
}

function verificarAcentos(texto) {
    return texto === texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function verificarTexto(texto){
    const erroLetraMaiuscula = document.getElementsByClassName("erroLetraMaiuscula")[0];
    const erroAcento = document.getElementsByClassName("erroAcento")[0];
    let passou = true;

    if(!texto) passou = false;

    if (texto && !verificarLetrasMaiusculas(texto)){
        erroLetraMaiuscula.style.display = "block";
        passou = false
    } else {
        erroLetraMaiuscula.style.display = "none";
    }

    if (!verificarAcentos(texto)) {
        erroAcento.style.display = "block";
        passou = false
    } else {
        erroAcento.style.display = "none";
    }

    return passou;
}

function criptografarTexto(){
    const texto = document.getElementsByClassName("mensagem")[0]?.value;
    if(verificarTexto(texto)) {
        let textoCodificado = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.getElementsByClassName("resultado")[0].value = textoCodificado;
        document.getElementsByClassName("mensagem")[0].value = '';
    };
    renderizarResultado(texto);
    console.log(texto);

    

}

function descriptografarTexto(){
    const texto = document.getElementsByClassName("mensagem")[0]?.value;
    if(verificarTexto(texto)) {
        let textoDecodificado = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementsByClassName("resultado")[0].value = textoDecodificado;
        document.getElementsByClassName("mensagem")[0].value = '';
    };
    renderizarResultado(texto);
    console.log(texto);
}

function copiarTexto (){
    console.log('copiar texto');
}

