import { exibirImagemAleatoria } from './criaImagemAleatoria.js';
import { iniciaAba } from './chamaAba.js';
import { expandirMenu } from "./funcoes.js";

// exibe imagem aleatoria //
exibirImagemAleatoria();

//Funcao chama aba//
iniciaAba();

//selecionar item
var menuItem = document.querySelectorAll(".item-menu");

function selecLink(){
    menuItem.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item)=>
    item.addEventListener('click',selecLink)
)

//Expandir o menu
expandirMenu();