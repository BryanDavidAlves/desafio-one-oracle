// Função para criptografar o texto
function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função para copiar o texto criptografado ou descriptografado
function copyText() {
    const outputText = document.getElementById('texto-direita');
    if (outputText.value.trim() !== "") { // Verifica se há texto para copiar
        outputText.disabled = false;
        outputText.select();
        document.execCommand('copy');
        outputText.disabled = true;
       
    } 
}

// Função para verificar se há texto na entrada
function checkInput() {
    const inputText = document.getElementById('texto-esquerda').value.trim();
    const semTexto = document.querySelector('.sem-texto');
    const textoDireita = document.getElementById('texto-direita');
    const copiarButton = document.querySelector('.edit-button-3'); // Botão de copiar

    if (inputText === "") {
        semTexto.style.display = "flex";
        textoDireita.style.display = "none";
        copiarButton.style.display = "none"; // Esconde o botão de copiar
    } else {
        semTexto.style.display = "none";
        textoDireita.style.display = "flex";
        copiarButton.style.display = "block"; // Mostra o botão de copiar
    }
}

// Associando as funções aos botões
document.querySelector('.edit-button-1').addEventListener('click', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('texto-esquerda').value;
    const encryptedText = encryptText(inputText);
    document.getElementById('texto-direita').value = encryptedText;
    checkInput(); // Verifica a entrada e atualiza a visibilidade
});

document.querySelector('.edit-button-2').addEventListener('click', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('texto-esquerda').value;
    const decryptedText = decryptText(inputText);
    document.getElementById('texto-direita').value = decryptedText;
    checkInput(); // Verifica a entrada e atualiza a visibilidade
});

document.querySelector('.edit-button-3').addEventListener('click', function(event) {
    event.preventDefault();
    copyText();
});
