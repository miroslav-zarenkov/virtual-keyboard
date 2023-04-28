import jsonBtns from '../json/buttons.json';
import { newPage } from './ui';

export default function addCharToTextArea() {
  const textArea = document.querySelector('textarea');
  const cursorPosition = textArea.selectionStart;
  let char = "";
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
    }else if (jsonBtns[i].role === 'key-arrow-up'){
      if (jsonBtns[i].keyCode === buttonCode) {
        char = "↑";
        break;
      }
    }else if (jsonBtns[i].role === 'key-arrow-down'){
      if (jsonBtns[i].keyCode === buttonCode) {
        char = "↓";
        break;
      }
    }else if (jsonBtns[i].role === 'key-arrow-right'){
      if (jsonBtns[i].keyCode === buttonCode) {
        char = "→";
        break;
      }
    }else if (jsonBtns[i].role === 'key-arrow-left'){
      if (jsonBtns[i].keyCode === buttonCode) {
        char = "←";
        break;
      }
    }
  }
  const beforeCursor = textArea.value.substring(0, cursorPosition);
  const afterCursor = textArea.value.substring(cursorPosition);
  textArea.value = beforeCursor + char + afterCursor;
  char = '';
  const newCursorPosition = cursorPosition + 1;
  textArea.setSelectionRange(newCursorPosition, newCursorPosition);
  textArea.focus();
}