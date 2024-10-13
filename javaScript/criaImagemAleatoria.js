import { catalogo } from './utilidades.js';

// Função para exibir uma imagem aleatória do catálogo //
export function exibirImagemAleatoria() {
    const randomIndex = Math.floor(Math.random() * catalogo.length);
    const imagemAleatoria = catalogo[randomIndex][Object.keys(catalogo[randomIndex])[0]];

    const container = document.getElementById('fundo');
    container.innerHTML = imagemAleatoria;
}