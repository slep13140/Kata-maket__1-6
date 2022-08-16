import Swiper, { Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';

const initSize = 513;
const swipeBrands = document.querySelector('.brands__swiper');
let swiperBrand;

window.addEventListener('resize', function () {
  mobileSlider();
});

if (window.innerWidth <= initSize) {
  mobileSlider();
}

function mobileSlider() {
  if (window.innerWidth <= initSize && swipeBrands.dataset.mobile == 'false') {
    swiperBrand = new Swiper(swipeBrands, {
      modules: [Pagination],
      slideClass: 'brands__slide',
      wrapperClass: 'brands__wrapper',
      pagination: {
        el: '.brands-pagination',
      },
    });
    swipeBrands.dataset.mobile = 'true';
  }

  if (window.innerWidth > initSize) {
    swipeBrands.dataset.mobile = 'false';
    if (swipeBrands.classList.contains('swiper-initialized')) {
      swiperBrand.destroy();
    }
  }
}
