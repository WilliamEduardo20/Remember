import { expandirMenu, mudaCor } from "./funcoes.js";

// Expandir o menu //
expandirMenu();

// inicia modo Escolhido //
mudaCor();

// Modo Ajustado //
export var modo = "escuro";

var claro = document.getElementById("Claro");
var escuro = document.getElementById("Escuro");

//claro.addEventListener('click', function(){
//    if (claro.checked) {
//        escuro.disabled = true;
//        modo = "claro";
//    } else {
//        escuro.disabled = false;
//    }
//});

//escuro.addEventListener('click', function(){
//    if (escuro.checked) {
//        claro.disabled = true;
//        modo = "escuro";
//    } else {
//        claro.disabled = false;
//    }
//});