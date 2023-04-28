import jsonBtns from '../json/buttons.json';
import { newPage } from './ui';

export default function addCharToTextArea() {
  const textArea = document.querySelector('textarea');
  let char = '';
  const buttonCode = +this.value;
  const language = newPage.getLanguage();
  for (let i = 0; i < jsonBtns.length; i++) {
    if (jsonBtns[i].role === 'character') {
      if (jsonBtns[i].keyCode === buttonCode) {
        const { labelRu } = jsonBtns[i];
        const { labelEn } = jsonBtns[i];
        if (language) {
          char = labelEn;
        } else {
          char = labelRu;
        }
        break;
      }
    }
  }
  textArea.textContent += char;
}
