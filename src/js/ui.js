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
};

const renderPage = (event) => {
  createPage(event);
};
