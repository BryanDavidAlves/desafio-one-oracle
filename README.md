# Desafio de Criptografia

Este projeto é um desafio de criptografia e descriptografia de texto usando JavaScript. O objetivo é substituir certas letras por sequências específicas, seguindo as regras estabelecidas, e permitir a conversão reversa de texto criptografado para o formato original.

## Funcionalidades

- **Criptografia de texto**: Substitui certas letras por sequências específicas:
  - `e` → `enter`
  - `i` → `imes`
  - `a` → `ai`
  - `o` → `ober`
  - `u` → `ufat`
  
- **Descriptografia de texto**: Reverte a criptografia para recuperar o texto original.

- **Verificação de entrada**: 
  - Exibe uma mensagem padrão se a entrada estiver vazia.
  - Mostra a área de saída e o botão de copiar apenas quando há texto.

- **Copiar texto**: Copia o texto criptografado ou descriptografado para a área de transferência.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript ES6**

## Estrutura do Projeto

### Arquivos Principais

- `index.html`: Estrutura básica da página, incluindo as áreas de entrada, saída, e botões.
- `styles.css` e `reset.css`: Estilos da página.
- `script.js`: Lógica de criptografia, descriptografia, verificação de entrada, e manipulação de DOM.

### Lógica de Criptografia e Descriptografia

- As funções `encryptText()` e `decryptText()` aplicam as substituições conforme as regras especificadas.
- A função `checkInput()` verifica se o campo de entrada está vazio e ajusta a visibilidade das seções de texto e do botão de copiar.
- O botão de copiar (`copyText()`) é ativado apenas quando há texto disponível.

## Como Usar

1. Digite o texto na área de entrada.
2. Clique em "Criptografar" para converter o texto conforme as regras.
3. Clique em "Descriptografar" para reverter o texto criptografado ao seu formato original.
4. Use o botão "Copiar" para copiar o texto da área de saída.

## Considerações

- O projeto trabalha apenas com letras minúsculas, sem acentos ou caracteres especiais.
- As áreas de entrada e saída são atualizadas automaticamente conforme o texto é inserido ou removido.
