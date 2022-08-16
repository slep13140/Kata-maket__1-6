const menuLang = document.querySelector('.mobil-popup__language');
const buttonLang = document.querySelectorAll('.mobil-popup__btn-lng');

menuLang.addEventListener('input', function () {
  let checkLang = document.querySelectorAll('.mobil-popup__language--checker');
  for (let i = 0; i < buttonLang.length; i++) {
    checkLang[i].onchange = function () {
      let num = i;
      for (let j = 0; j < buttonLang.length; j++) {
        if (
          buttonLang[j].classList.contains('mobil-popup__language--active') &&
          j !== num
        ) {
          buttonLang[j].classList.remove('mobil-popup__language--active');
        }
      }
      buttonLang[i].classList.add('mobil-popup__language--active');
    };
  }
});
