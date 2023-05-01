import jsonBtns from '../json/buttons.json';
import newPage from './ui';

export function addCharToTextArea(key = this.value) {
  const textArea = document.querySelector('textarea');
  const cursorPosition = textArea.selectionStart;
  let char = '';
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
    const { labelRu } = jsonBtns[i];
    const { labelEn } = jsonBtns[i];
    const { labelRuShift } = jsonBtns[i];
    const { labelEnShift } = jsonBtns[i];
    if (jsonBtns[i].special === 'shift') {
      if (jsonBtns[i].keyCode === buttonCode) {
        if (language && window.event.shiftKey) {
          char = labelEnShift;
        } else if (language && !window.event.shiftKey) {
          char = labelEn;
        } else if (!language && window.event.shiftKey) {
          if (labelRuShift === null) {
            char = labelRu.toUpperCase();
          } else {
            char = labelRuShift;
          }
        } else if (!language && !window.event.shiftKey) {
          char = labelRu;
        }
        break;
      }
    } else if (jsonBtns[i].role === 'character') {
      if (jsonBtns[i].keyCode === buttonCode) {
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
  const cursorPositionStart = textArea.selectionStart;
  const cursorPositionEnd = textArea.selectionEnd;
  if (cursorPositionStart === cursorPositionEnd) {
    const beforeCursor = textArea.value.substring(0, cursorPositionStart);
    const afterCursor = textArea.value.substring(cursorPositionStart);
    if (beforeCursor === '') {
      textArea.focus();
      return;
    }
    textArea.value = beforeCursor.slice(0, -1) + afterCursor;
    const newCursorPosition = cursorPositionStart - 1;
    textArea.setSelectionRange(newCursorPosition, newCursorPosition);
    textArea.focus();
  } else {
    const { value } = textArea;
    const cursorPosition = textArea.selectionStart;
    const newValue = value.substring(0, cursorPositionStart) + value.substring(cursorPositionEnd);
    textArea.value = newValue;
    const newCursorPosition = cursorPosition;
    textArea.setSelectionRange(newCursorPosition, newCursorPosition);
    textArea.focus();
  }
}

export function shift() {
  const language = newPage.getLanguage();
  const allBtns = document.querySelectorAll('.keyboard__btn__character');
  if (newPage.capsKeyboard && language) {
    allBtns.forEach((btn) => {
      if (jsonBtns[btn.dataset.order].labelEnShift === null) {
        btn.textContent = btn.textContent.toLowerCase();
      } else {
        btn.textContent = `${jsonBtns[btn.dataset.order].labelEnShift}`;
      }
    });
  } else if (newPage.capsKeyboard && !language) {
    allBtns.forEach((btn) => {
      if (jsonBtns[btn.dataset.order].labelRuShift === null) {
        btn.textContent = btn.textContent.toLowerCase();
      } else {
        btn.textContent = `${jsonBtns[btn.dataset.order].labelRuShift}`;
      }
    });
  } else if (!newPage.capsKeyboard && language) {
    allBtns.forEach((btn) => {
      if (jsonBtns[btn.dataset.order].labelEnShift === null) {
        btn.textContent = btn.textContent.toUpperCase();
      } else {
        btn.textContent = `${jsonBtns[btn.dataset.order].labelEnShift}`;
      }
    });
  } else if (!newPage.capsKeyboard && !language) {
    allBtns.forEach((btn) => {
      if (jsonBtns[btn.dataset.order].labelRuShift === null) {
        btn.textContent = btn.textContent.toUpperCase();
      } else {
        btn.textContent = `${jsonBtns[btn.dataset.order].labelRuShift}`;
      }
    });
  }
  newPage.capsKeyboard = !newPage.capsKeyboard;
}

export function unshift() {
  const language = newPage.getLanguage();
  const allBtns = document.querySelectorAll('.keyboard__btn__character');
  if (newPage.capsKeyboard && language) {
    allBtns.forEach((btn) => {
      if (jsonBtns[btn.dataset.order].labelEnShift === null) {
        btn.textContent = btn.textContent.toLowerCase();
      } else {
        btn.textContent = `${jsonBtns[btn.dataset.order].labelEn}`;
      }
    });
  } else if (newPage.capsKeyboard && !language) {
    allBtns.forEach((btn) => {
      if (jsonBtns[btn.dataset.order].labelRuShift === null) {
        btn.textContent = btn.textContent.toLowerCase();
      } else {
        btn.textContent = `${jsonBtns[btn.dataset.order].labelRu}`;
      }
    });
  } else if (!newPage.capsKeyboard && language) {
    allBtns.forEach((btn) => {
      if (jsonBtns[btn.dataset.order].labelEnShift === null) {
        btn.textContent = btn.textContent.toUpperCase();
      } else {
        btn.textContent = `${jsonBtns[btn.dataset.order].labelEn}`;
      }
    });
  } else if (!newPage.capsKeyboard && !language) {
    allBtns.forEach((btn) => {
      if (jsonBtns[btn.dataset.order].labelRuShift === null) {
        btn.textContent = btn.textContent.toUpperCase();
      } else {
        btn.textContent = `${jsonBtns[btn.dataset.order].labelRu}`;
      }
    });
  }
  newPage.capsKeyboard = !newPage.capsKeyboard;
}
// TODO: refactor to class
