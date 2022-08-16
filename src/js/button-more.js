const buttonsMore = document.querySelectorAll('.button-open');
const textMoreRead = 'Читать далее';
const textMore = 'Показать все';
const textNoMore = 'Скрыть';

if (buttonsMore.length > 0) {
  for (let i = 0; i < buttonsMore.length; i++) {
    let buttonMore = buttonsMore[i];
    buttonMore.addEventListener('click', function () {
      let buttonName = buttonMore.getAttribute('name');
      let elemName = document.getElementById(buttonName);
      let buttonText = buttonMore.querySelector('span');
      let buttonImg = buttonMore.querySelector('img');
      elemOpen(elemName);
      if (i === 0) {
        changeTextRead(buttonText, buttonImg);
      } else {
        changeTextShow(buttonText, buttonImg);
      }
    });
  }
}
function elemOpen(elemName) {
  if (elemName) {
    elemName.classList.toggle('open');
  }
}
function changeTextRead(buttonText, buttonImg) {
  if (buttonText.textContent === textMoreRead) {
    buttonImg.classList.add('img_noMore');
    buttonText.textContent = textNoMore;
  } else {
    buttonText.textContent = textMoreRead;
    buttonImg.classList.remove('img_noMore');
  }
}
function changeTextShow(buttonText, buttonImg) {
  if (buttonText.textContent === textMore) {
    buttonImg.classList.add('img_noMore');
    buttonText.textContent = textNoMore;
  } else {
    buttonText.textContent = textMore;
    buttonImg.classList.remove('img_noMore');
  }
}
