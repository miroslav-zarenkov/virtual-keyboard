import jsonBtns from '../json/buttons.json';
// eslint-disable-next-line import/no-cycle
import { newPage } from './ui';

export function addCharToTextArea(key = this.value) {
  const textArea = document.querySelector('textarea');
  const cursorPosition = textArea.selectionStart;
  let char = '';
  // const buttonCode = +this.value;
  const buttonCode = +key || +this.value;
  const language = newPage.getLanguage();
  const capsLock = newPage.getCapsLock();
  if (buttonCode === 20 || buttonCode === 16 || buttonCode === null
      || buttonCode === 17 || buttonCode === 18 || buttonCode === 91
      || buttonCode === 93 || buttonCode === 8) {
    textArea.focus();
    return;
  }
  for (let i = 0; i < jsonBtns.length; i++) {
    if (jsonBtns[i].role === 'character') {
      if (jsonBtns[i].keyCode === buttonCode) {
        const { labelRu } = jsonBtns[i];
        const { labelEn } = jsonBtns[i];
        if (language) {
          if (capsLock) {
            char = labelEn.toUpperCase();
          } else {
            char = labelEn;
          }
        } else if (capsLock) {
          char = labelRu.toUpperCase();
        } else {
          char = labelRu;
        }
        break;
      }
    } else if (jsonBtns[i].role === 'space') {
      if (jsonBtns[i].keyCode === buttonCode) {
        char = ' ';
        break;
      }
    } else if (jsonBtns[i].role === 'enter') {
      if (jsonBtns[i].keyCode === buttonCode) {
        char = '\n';
        break;
      }
    } else if (jsonBtns[i].role === 'tab') {
      if (jsonBtns[i].keyCode === buttonCode) {
        char = '\t';
        break;
      }
    } else if (jsonBtns[i].role === 'key-arrow-up'
              || jsonBtns[i].role === 'key-arrow-down'
              || jsonBtns[i].role === 'key-arrow-right'
              || jsonBtns[i].role === 'key-arrow-left') {
      if (jsonBtns[i].keyCode === buttonCode) {
        char = jsonBtns[i].labelEn;
        break;
      }
    }
  }
  const beforeCursor = textArea.value.substring(0, cursorPosition);
  const afterCursor = textArea.value.substring(cursorPosition);
  textArea.value = beforeCursor + char + afterCursor;
  const newCursorPosition = cursorPosition + 1;
  textArea.setSelectionRange(newCursorPosition, newCursorPosition);
  textArea.focus();
}

export function backspace() {
  const textArea = document.querySelector('textarea');
  const cursorPosition = textArea.selectionStart;
  const beforeCursor = textArea.value.substring(0, cursorPosition);
  const afterCursor = textArea.value.substring(cursorPosition);
  if (beforeCursor === '') {
    textArea.focus();
    return;
  }
  textArea.value = beforeCursor.slice(0, -1) + afterCursor;
  const newCursorPosition = cursorPosition - 1;
  textArea.setSelectionRange(newCursorPosition, newCursorPosition);
  textArea.focus();
}
