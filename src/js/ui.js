import '../scss/style.scss';

export default class PageStructure {
  constructor() {
    this.header = this.createHeader();
    this.main = this.createMain();
    this.footer = this.createFooter();
  }

  createHeader() {
    this.header = document.createElement('header');
    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Virtual Keyboard';
    this.header.appendChild(headerTitle);
    return this.header;
  }

  createMain() {
    this.main = document.createElement('main');
    return this.main;
  }

  createFooter() {
    this.footer = document.createElement('footer');
    const footerInfo = document.createElement('p');
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

  renderPage() {
    this.createPage();
  }
}
