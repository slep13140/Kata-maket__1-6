import Swiper from 'swiper';
import 'swiper/scss';

const initSize = 513;
const swipeMenu = document.querySelector('.main-menu__swiper');
const menuElement = document.querySelectorAll('.main-menu__elem');
let swiperMenu;

// Инициализация Swiper

if (menuElement.length > 0) {
  for (let i = 0; i < menuElement.length; i++) {
    let activeButton = menuElement[i];
    activeButton.addEventListener('click', function () {
      let numElem = i;
      for (let j = 0; j < menuElement.length; j++) {
        if (
          menuElement[j].classList.contains('main-menu__elem--active') &&
          j !== numElem
        ) {
          menuElement[j].classList.remove('main-menu__elem--active');
        }
      }
      activeButton.classList.add('main-menu__elem--active');
      classActiveRemove();
    });
  }
}

window.addEventListener('resize', function () {
  mobileSlider();
  classActiveRemove();
});

if (window.innerWidth <= initSize) {
  mobileSlider();
}

function classActiveRemove() {
  if (window.innerWidth <= initSize) {
    for (let i = 0; i < menuElement.length; i++) {
      if (menuElement[i].classList.contains('main-menu__elem--active')) {
        menuElement[i].classList.remove('main-menu__elem--active');
      }
    }
  }
}

function mobileSlider() {
  if (window.innerWidth <= initSize && swipeMenu.dataset.mobile == 'false') {
    swiperMenu = new Swiper(swipeMenu, {
      slideClass: 'main-menu__elem',
      wrapperClass: 'main-menu__list',
    });
    swipeMenu.dataset.mobile = 'true';
  }

  if (window.innerWidth > initSize) {
    swipeMenu.dataset.mobile = 'false';
    if (swipeMenu.classList.contains('swiper-initialized')) {
      swiperMenu.destroy();
    }
  }
}
