const encryptionKey = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const decryptKey = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};

const encryptButton = document.querySelector('.button-encrypt');
const decryptButton = document.querySelector('.button-decrypt');
const inputText = document.querySelector('.input-text');
const outputText = document.querySelector('.output-text');
const copyButton = document.querySelector('.copy-button');
const outputPlaceholder = document.querySelector('.output-placeholder');

encryptButton.addEventListener('click', () => {
  let text = inputText.value;
  if (text) {
      let encryptedText = text.replace(/e|i|a|o|u/g, (match) => encryptionKey[match]);
      outputText.textContent = encryptedText;
      outputPlaceholder.style.display = 'none';
      outputText.style.display = 'block';
  } else {
      outputPlaceholder.textContent = "Nenhuma mensagem encontrada";
      outputPlaceholder.style.display = 'block';
      outputText.style.display = 'none';
  }
});

decryptButton.addEventListener('click', () => {
  let text = inputText.value;
  if (text) {
      let decryptedText = text.replace(/enter|imes|ai|ober|ufat/g, (match) => decryptKey[match]);
      outputText.textContent = decryptedText;
      outputPlaceholder.style.display = 'none';
      outputText.style.display = 'block';
  } else {
      outputPlaceholder.textContent = "Nenhuma mensagem encontrada";
      outputPlaceholder.style.display = 'block';
      outputText.style.display = 'none';
  }
});

copyButton.addEventListener('click', () => {
  if (outputText.textContent !== "") {
      const textarea = document.createElement('textarea');
      textarea.value = outputText.textContent;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Texto copiado para a área de transferência');
  }
});