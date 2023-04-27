import '../scss/style.scss';

// eslint-disable-next-line no-use-before-define
export default renderPage;

const createHeader = () => {
  const header = document.createElement('header');
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'Virtual Keyboard';
  header.appendChild(headerTitle);
  return header;
};

const createMain = () => {
  const main = document.createElement('main');
  return main;
};

const createFooter = () => {
  const footer = document.createElement('footer');
  const footerInfo = document.createElement('p');
  footerInfo.textContent = 'Created by miroslav-zarenkov';
  footer.appendChild(footerInfo);
  return footer;
};

const createPage = () => {
  document.body.appendChild(createHeader());
  document.body.appendChild(createMain());
  document.body.appendChild(createFooter());
};

function renderPage(event) {
  createPage(event);
}
