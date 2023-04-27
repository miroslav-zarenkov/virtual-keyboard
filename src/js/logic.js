// eslint-disable-next-line no-use-before-define
export default addCharToTextArea;

function addCharToTextArea() {
  const textArea = document.querySelector('textarea');
  textArea.textContent += this.value;
}
