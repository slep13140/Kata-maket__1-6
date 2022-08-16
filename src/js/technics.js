import Swiper, { Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';

const initSize = 513;
const swipeTech = document.querySelector('.technics__swiper');
let swiperTech;

window.addEventListener('resize', function () {
  mobileSlider();
});

if (window.innerWidth <= initSize) {
  mobileSlider();
}

function mobileSlider() {
  if (window.innerWidth <= initSize && swipeTech.dataset.mobile == 'false') {
    swiperTech = new Swiper(swipeTech, {
      modules: [Pagination],
      slideClass: 'technics__slide',
      wrapperClass: 'technics__wrapper',
      pagination: {
        el: '.technics-pagination',
      },
    });
    swipeTech.dataset.mobile = 'true';
  }

  if (window.innerWidth > initSize) {
    swipeTech.dataset.mobile = 'false';
    if (swipeTech.classList.contains('swiper-initialized')) {
      swiperTech.destroy();
    }
  }
}
