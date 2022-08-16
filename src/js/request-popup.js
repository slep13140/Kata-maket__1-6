const reqButton = document.querySelectorAll('.body__button-call');
const reqMenu = document.querySelector('.request-popup');
const reqButtonClose = document.querySelector('.request-popup__button');
const reqInput = reqMenu.querySelectorAll('input');
const reqInputFocus = reqInput[0];
const body = document.querySelector('body');
const timeout = 800;

if (reqButton.length > 0) {
  for (let i = 0; i < reqButton.length; i++) {
    let reqOpenButton = reqButton[i];
    reqOpenButton.addEventListener('click', function () {
      reqMenu.classList.add('request-popup--open');
      body.classList.add('lock');
      setTimeout(function () {
        reqInputFocus.focus();
      }, timeout);
    });
  }
}

reqButtonClose.addEventListener('click', function () {
  reqMenu.classList.remove('request-popup--open');
  body.classList.remove('lock');
});

reqMenu.addEventListener('click', function (evt) {
  if (!evt.target.closest('.request-popup__menu')) {
    reqMenu.classList.remove('request-popup--open');
    body.classList.remove('lock');
  }
});
