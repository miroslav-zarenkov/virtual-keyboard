import '../scss/style.scss';
import jsonBtns from '../json/buttons.json';
import addCharToTextArea from './logic';

class PageStructure {
  constructor() {
    this.enKeyboard = true;
    this.header = this.createHeader();
    this.main = this.createMain();
    this.footer = this.createFooter();
  }

  createHeader() {
    this.header = document.createElement('header');
    this.header.classList.add('header');
    const headerTitle = document.createElement('h1');
    headerTitle.classList.add('header__title');
    headerTitle.textContent = 'Virtual Keyboard';
    this.header.appendChild(headerTitle);
    return this.header;
  }

  createMain() {
    this.main = document.createElement('main');
    this.main.classList.add('main');
    this.main.appendChild(this.createTextArea());
    this.main.appendChild(this.createKeyboard());
    return this.main;
  }

  createTextArea() {
    this.textArea = document.createElement('textarea');
    this.textArea.classList.add('main__textarea');
    return this.textArea;
  }

  createKeyboard() {
    this.keyboard = document.createElement('div');
    this.keyboard.classList.add('main__keyboard');
    this.keyboard.classList.add('keyboard');
    jsonBtns.forEach((button) => {
      this.keyboard.appendChild(this.createButton(button));
    });
    return this.keyboard;
  }

  createButton(button) {
    this.btn = document.createElement('button');
    this.btn.classList.add(`keyboard__btn__${button.role}`);
    this.btn.value = button.keyCode;
    this.btn.textContent = this.enKeyboard ? button.labelEn : button.labelRu;
    return this.btn;
  }

  changeKeyboardLanguage() {
    this.enKeyboard = !this.enKeyboard;
    const main = document.querySelector('main');
    const keyboard = document.querySelector('.keyboard');
    main.removeChild(keyboard);
    main.appendChild(this.createKeyboard());
    this.initialiseEventListeners();
  }

  createFooter() {
    this.footer = document.createElement('footer');
    this.footer.classList.add('footer');
    const footerInfo = document.createElement('p');
    footerInfo.classList.add('footer__info');
    footerInfo.textContent = 'Created by miroslav-zarenkov';
    this.footer.appendChild(footerInfo);
    return this.footer;
  }

  createPage() {
    const body = document.querySelector('body');
    body.appendChild(this.header);
    body.appendChild(this.main);
    body.appendChild(this.footer);
  }

  initialiseEventListeners() {
    this.keyboardBlock = document.querySelector('.keyboard');
    this.keyboardBtns = this.keyboardBlock.querySelectorAll('button');
    this.keyboardBtns.forEach((btn) => btn.addEventListener('click', addCharToTextArea));
    this.fnButton = document.querySelector('.keyboard__btn__fn');
    this.fnButton.addEventListener('click', this.changeKeyboardLanguage.bind(this));
  }

  renderPage() {
    this.createPage();
    this.initialiseEventListeners();
  }

  getLanguage() {
    return this.enKeyboard;
  }
}
// eslint-disable-next-line import/prefer-default-export
export const newPage = new PageStructure();
