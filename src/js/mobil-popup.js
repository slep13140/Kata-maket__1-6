const headerButton = document.querySelectorAll('.header-body__button');
const buttonOpen = headerButton[1];
const mobilButton = document.querySelectorAll('.mobil-popup__button');
const buttonClose = mobilButton[0];
const mobilMenu = document.querySelector('.mobil-popup');
const mobilElement = document.querySelectorAll('.mobil-popup__elem');
const body = document.querySelector('body');

buttonOpen.addEventListener('click', function () {
  mobilMenu.classList.add('mobil-popup--open');
  body.classList.add('lock');
});

buttonClose.addEventListener('click', function () {
  mobilMenu.classList.remove('mobil-popup--open');
  body.classList.remove('lock');
});

mobilMenu.addEventListener('click', function (evt) {
  if (!evt.target.closest('.mobil-popup__menu')) {
    mobilMenu.classList.remove('mobil-popup--open');
    body.classList.remove('lock');
  }
});

if (mobilElement.length > 0) {
  for (let i = 0; i < mobilElement.length; i++) {
    let activeElement = mobilElement[i];
    activeElement.addEventListener('click', function () {
      let numElem = i;
      for (let j = 0; j < mobilElement.length; j++) {
        if (
          mobilElement[j].classList.contains('mobil-popup__elem--active') &&
          j !== numElem
        ) {
          mobilElement[j].classList.remove('mobil-popup__elem--active');
        }
      }
      activeElement.classList.add('mobil-popup__elem--active');
    });
  }
}
