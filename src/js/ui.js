import '../scss/style.scss';

export { renderPage };

const createHeader = () => {
  const header = document.createElement('header');
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'Virtual Keyboard';
  header.appendChild(headerTitle);
  return header;
};

const createPage = () => {
  document.body.appendChild(createHeader());
  document.body.appendChild(createMain());
};

const createMain = () => {
  const main = document.createElement('main');
  return main;
};

const renderPage = (event) => {
  createPage(event);
};
