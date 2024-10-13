import { definicao } from "./utilidades.js";

//Aba de perguntas//
export function abreAba(){
    document.getElementById("aba-principal").style.left = "0";
}
export function fechaAba() {
    document.getElementById("aba-principal").style.left = "-1000%";
}

//Cria pdf//
export function carregarPDF() {
    var iframe = document.getElementById('pdfViewer');
    iframe.src = './pdf/pdf.pdf';
}

//Expandir o menu//
export function expandirMenu() {
    var btnExp = document.querySelector('#btn-exp');
    var menuSide = document.querySelector('.menu-lateral');

    btnExp.addEventListener('click', function(){
        menuSide.classList.toggle('expandir');
        document.getElementById("id").classList.toggle('expandir');
    });
}

//anicia Modo//
export function mudaCor(){
    if (definicao == "escuro") {
        var icons = document.querySelector(".fa-solid");
        icons.style.color = 'whitesmoke';
 
        var menu = document.querySelector(".menu-lateral");
        menu.style.backgroundColor = "black";
    
        var logo = document.querySelector(".logo-nome");
        logo.style.backgroundColor = "black";
        var nome = document.querySelector(".arial");
        nome.style.color = "whitesmoke";
    } else {

    }
}