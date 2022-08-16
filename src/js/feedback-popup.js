const feedButton = document.querySelectorAll('.body__button-feedback');
const feedMenu = document.querySelector('.feedback-popup');
const feedButtonClose = document.querySelector('.feedback-popup__button');
const feedInput = feedMenu.querySelectorAll('input');
const feedInputFocus = feedInput[0];
const body = document.querySelector('body');
const timeout = 800;

if (feedButton.length > 0) {
  for (let i = 0; i < feedButton.length; i++) {
    let feedOpenButton = feedButton[i];
    feedOpenButton.addEventListener('click', function () {
      feedMenu.classList.add('feedback-popup--open');
      body.classList.add('lock');
      setTimeout(function () {
        feedInputFocus.focus();
      }, timeout);
    });
  }
}

feedButtonClose.addEventListener('click', function () {
  feedMenu.classList.remove('feedback-popup--open');
  body.classList.remove('lock');
});

feedMenu.addEventListener('click', function (evt) {
  if (!evt.target.closest('.feedback-popup__menu')) {
    feedMenu.classList.remove('feedback-popup--open');
    body.classList.remove('lock');
  }
});
