import { abreAba, carregarPDF, fechaAba } from './funcoes.js';

//Chama Aba//
export function iniciaAba() {
    document.getElementById("Divisao").addEventListener("click",()=>{
        abreAba();
        carregarPDF();
    });
    document.getElementById("Multiplicacao").addEventListener("click",()=>{
        abreAba();
        carregarPDFdividir();
    });
    document.getElementById("questoes").addEventListener("click",()=>{
        fechaAba();
    });
};