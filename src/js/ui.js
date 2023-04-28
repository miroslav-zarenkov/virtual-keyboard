import '../scss/style.scss';
import { addCharToTextArea, keyboardObj } from './logic';

export default class PageStructure {
  constructor() {
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
    keyboardObj.forEach((button) => {
      this.keyboard.appendChild(this.createButton(button));
    });
    return this.keyboard;
  }

  createButton(button) {
    this.btn = document.createElement('button');
    this.btn.classList.add('keyboard__btn');
    this.btn.value = button.keyCode;
    this.btn.textContent = button.labelEn;
    return this.btn;
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
    this.keyboardBtns = document.querySelectorAll('.keyboard__btn');
    this.keyboardBtns.forEach((btn) => btn.addEventListener('click', addCharToTextArea));
  }

  renderPage() {
    this.createPage();
    this.initialiseEventListeners();
  }
}
