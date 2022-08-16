import Swiper, { Pagination, Manipulation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';

//Инициализация swiper
const initSize = 513;
const swipePrice = document.querySelector('.prices__swiper');
let swiperPrice;

window.addEventListener('resize', function () {
  mobileSlider();
});

if (window.innerWidth > initSize) {
  addPriceTable();
} else {
  mobileSlider();
}

function mobileSlider() {
  if (window.innerWidth <= initSize && swipePrice.dataset.mobile == 'false') {
    swiperPrice = new Swiper(swipePrice, {
      slidesPerView: 1,
      spaceBetween: 16,
      modules: [Pagination, Manipulation],
      slideClass: 'prices__slide',
      wrapperClass: 'prices__wrapper',
      pagination: {
        el: '.prices-pagination',
      },
    });
    swipePrice.dataset.mobile = 'true';

    if (swipePrice.classList.contains('swiper-initialized')) {
      addPriceSlide();
      removePriceTable();
    }
  }

  if (window.innerWidth > initSize) {
    swipePrice.dataset.mobile = 'false';
    if (swipePrice.classList.contains('swiper-initialized')) {
      swiperPrice.removeSlide([0, 1, 2, 3, 4]);
      swiperPrice.destroy();
      addPriceTable();
    }
  }
}

function addPriceSlide() {
  swiperPrice.appendSlide([
    `<div class="prices__slide">
    <div class="prices__element"><span>Ремонтные услуги</span><p>Тестирование с выдачей технического заключения</p></div>
    <div class="prices__element"><span>Цена</span><p>Бесплатно</p></div>
    <div class="prices__element"><span>Срок</span><p>30-120 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
    </div>`,
    `<div class="prices__slide">
    <div class="prices__element"><span>Ремонтные услуги</span><p>Диагностика</p></div>
    <div class="prices__element"><span>Цена</span><p>Бесплатно</p></div>
    <div class="prices__element"><span>Срок</span><p>30 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
    </div>`,
    `<div class="prices__slide">
    <div class="prices__element"><span>Ремонтные услуги</span><p>Замена дисплея</p></div>
    <div class="prices__element"><span>Цена</span><p>1 000 ₽</p></div>
    <div class="prices__element"><span>Срок</span><p>30-120 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
    </div>`,
    `<div class="prices__slide">
    <div class="prices__element"><span>Ремонтные услуги</span><p>Замена полифонического динамика</p></div>
    <div class="prices__element"><span>Цена</span><p>1 000 ₽</p></div>
    <div class="prices__element"><span>Срок</span><p>30-120 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
    </div>`,
    `<div class="prices__slide">
    <div class="prices__element"><span>Ремонтные услуги</span><p>Замена программного обеспечения</p></div>
    <div class="prices__element"><span>Цена</span><p>1 000 ₽</p></div>
    <div class="prices__element"><span>Срок</span><p>30-120 мин</p><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></div>
    </div>`,
  ]);
}

function addPriceTable() {
  swipePrice.insertAdjacentHTML(
    'afterbegin',
    `<table class="prices__table">                    
    <tr>
        <th>Ремонтные услуги</th>
        <th>Цена</th>
        <th>Срок</th>
        <th></th>
    </tr>
    <tr>
        <td>Диагностика</td>
        <td>Бесплатно</td>
        <td>30 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    <tr>
        <td>Замена дисплея</td>
        <td>1 000 ₽</td>
        <td>30-120 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    <tr>
        <td>Замена полифонического динамика</td>
        <td>1 000 ₽</td>
        <td>30-120 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    <tr>
        <td>Тестирование с выдачей технического заключения</td>
        <td>1 000 ₽</td>
        <td>30-120 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    <tr>
        <td>Замена программного обеспечения</td>
        <td>1 000 ₽</td>
        <td>30-120 мин</td>
        <td><button type="button"><img src="img/icon-order.svg" alt="Заказать услугу"></button></td>
    </tr>
    </table>`
  );
}

function removePriceTable() {
  if (document.querySelector('.prices__table')) {
    document.querySelector('.prices__table').remove();
  }
}
