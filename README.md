# Decodificador de Texto - Alura One Challenge

Bem-vindo ao Decodificador de Texto, uma aplicação web desenvolvida como parte de um desafio de programação do programa Alura One. Este projeto tem como objetivo criar uma aplicação simples de criptografia e descriptografia de texto utilizando apenas HTML, CSS e JavaScript.

## Sobre o Projeto

O Decodificador de Texto é uma aplicação que permite aos usuários criptografar e descriptografar mensagens de texto usando uma chave de criptografia específica. A criptografia utilizada substitui determinadas vogais por sequências de caracteres definidas e vice-versa. Esta aplicação é uma ótima oportunidade para praticar manipulação de strings e lógica de programação usando JavaScript.

### Regras de Criptografia

A criptografia e a descriptografia seguem as seguintes regras:

#### Chave de Criptografia

```javascript
const encryptionKey = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};
```

#### Chave de Descriptografia

```javascript
const decryptKey = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};
```

## Funcionalidades

- **Criptografar Texto:** Substitui as vogais "e", "i", "a", "o" e "u" por "enter", "imes", "ai", "ober" e "ufat", respectivamente.
- **Descriptografar Texto:** Reverte o texto criptografado de volta à sua forma original, substituindo "enter", "imes", "ai", "ober" e "ufat" pelas vogais correspondentes.

## Tecnologias Utilizadas

- **HTML:** Estrutura da página.
- **CSS:** Estilização da aplicação.
- **JavaScript:** Lógica de criptografia e descriptografia.

## Como Usar

1. **Clone o Repositório:**
   
   Clone o repositório do projeto para o seu computador.

   ```bash
   git clone https://github.com/seu-usuario/decodificador-texto.git
   ```

2. **Abra o Arquivo `index.html`:**

   Navegue até a pasta onde o projeto foi clonado e abra o arquivo `index.html` no seu navegador de preferência.

3. **Utilize a Aplicação:**

   - Digite o texto que deseja criptografar ou descriptografar na caixa de entrada.
   - Clique no botão "Criptografar" para converter o texto para a forma criptografada.
   - Clique no botão "Descriptografar" para converter o texto criptografado de volta para o texto original.

## Estrutura do Projeto

O projeto é estruturado em três arquivos principais:

- **index.html:** Contém a estrutura HTML da aplicação.
- **styles.css:** Contém o CSS para estilização da interface da aplicação.
- **script.js:** Contém o JavaScript que implementa a lógica de criptografia e descriptografia.

## Contribuição

Se você quiser contribuir para o projeto, sinta-se à vontade para fazer um fork deste repositório, criar uma nova branch para suas alterações e enviar um pull request com suas melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
