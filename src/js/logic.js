import jsonBtns from '../json/buttons.json';
import { newPage } from './ui';

export default function addCharToTextArea() {
  const textArea = document.querySelector('textarea');
  let char = "";
  const buttonCode = +this.value;
  console.log(buttonCode)
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
    }else if (jsonBtns[i].role === 'space') {
      if (jsonBtns[i].keyCode === buttonCode) {
        char = ' ';
        break;
      }
    }else if (jsonBtns[i].role === 'enter') {
      if (jsonBtns[i].keyCode === buttonCode) {
        char = '\n';
        break;
      }
    }else if (jsonBtns[i].role === 'tab'){
      if (jsonBtns[i].keyCode === buttonCode) {
        char = '\t';
        break;
      }
    }
  }
  textArea.textContent += char;
  char = '';
}
