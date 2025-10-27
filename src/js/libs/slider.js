// ========================= Подключение слайдера =============================================
//подключение в gulp 
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";

export const reviewsPrevSlider = new Swiper('.reviews-prev__slider', {
    // Стрелки
    navigation: {
        nextEl: '#reviews-slider-btn__next',
        prevEl: '#reviews-slider-btn__prev',
    },
    /*Скорость переключения слайдов*/
    speed: 700,
    /*Отступ у карточек*/
    spaceBetween: 10,
     /* Центрирование активного слайда */
    // centeredSlides: true,
    /* Смещение первого слайда */
    slidesOffsetBefore: 0,
    /*Показывать по n карточек*/
    slidesPerView: 1.2,
    /* При достижении конца, перепрыгнуть в начало */
    rewind: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    loop: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    autoplay: {
    delay: 3000,          // Интервал между слайдами (3 сек)
    disableOnInteraction: false, // Не отключать автопрокрутку после ручного перелистывания
    pauseOnMouseEnter: true,     // Пауза при наведении (по умолчанию false в новых версиях)
  },
    /*Брек-поинты*/
    breakpoints: {
        1600: {
            slidesPerView: 4.5,
            spaceBetween: 20,
            /* Смещение первого слайда */
            slidesOffsetBefore: -30,
        },
        1200: {
            slidesPerView: 3.5,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 2.5,
            spaceBetween: 15,
        },
        600: {
            slidesPerView: 1.7,
            spaceBetween: 10,
        }
    },

});

export const teamPrevSlider = new Swiper('.team-prev__slider', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
    /*Скорость переключения слайдов*/
    speed: 700,
    /*Отступ у карточек*/
    spaceBetween: 10,
    /*Показывать по n карточек*/
    slidesPerView: 1.2,
   
    /* При достижении конца, перепрыгнуть в начало */
    rewind: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    loop: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    autoplay: {
    delay: 3000,          // Интервал между слайдами (3 сек)
    disableOnInteraction: false, // Не отключать автопрокрутку после ручного перелистывания
    pauseOnMouseEnter: true,     // Пауза при наведении (по умолчанию false в новых версиях)
  },
    /*Брек-поинты*/
    breakpoints: {
        1440: {
            slidesPerView: 4.5,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900: {
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    },

});

export const portfolioPrevSlider = new Swiper('.portfolio-prev__slider', {
    // Стрелки
    navigation: {
        nextEl: '#portfolio-slider-btn__next',
        prevEl: '#portfolio-slider-btn__prev',
    },

    /*Скорость переключения слайдов*/
    speed: 700,
    /*Отступ у карточек*/
    spaceBetween: 10,
    /* Центрирование активного слайда */
    centeredSlides: true,
    /* Смещение первого слайда */
    slidesOffsetBefore: 0,
    /*Показывать по n карточек*/
    slidesPerView: 1.2,
    /* При достижении конца, перепрыгнуть в начало */
    rewind: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    loop: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    autoplay: {
    delay: 3000,          // Интервал между слайдами (3 сек)
    disableOnInteraction: false, // Не отключать автопрокрутку после ручного перелистывания
    pauseOnMouseEnter: true,     // Пауза при наведении (по умолчанию false в новых версиях)
  },
    /*Брек-поинты*/
    breakpoints: {
        1440: {
            slidesPerView: 5,
            spaceBetween: 30,
            /* Смещение первого слайда */
            slidesOffsetBefore: 200,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesOffsetBefore: 0,
            
        },
        900: {
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 10,
        }
    },

});

export const partnersPrevSlider = new Swiper('.partners-prev__slider', {
    // Стрелки
    navigation: {
        nextEl: '#partners-slider-btn__next',
        prevEl: '#partners-slider-btn__prev',
    },
    /*Скорость переключения слайдов*/
    speed: 700,
    /*Отступ у карточек*/
    spaceBetween: 0,
    /*Показывать по n карточек*/
    slidesPerView: 2.2,
    /* При достижении конца, перепрыгнуть в начало */
    rewind: true,
    /*Ленивая подгрузка */
    lazy: true,
    /*Бесконечная прокрутка */
    loop: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    autoplay: {
    delay: 3000,          // Интервал между слайдами (3 сек)
    disableOnInteraction: false, // Не отключать автопрокрутку после ручного перелистывания
    pauseOnMouseEnter: true,     // Пауза при наведении (по умолчанию false в новых версиях)
  },
    /*Брек-поинты*/
    breakpoints: {
        1600: {
            slidesPerView: 5,

        },
        1200: {
            slidesPerView: 4,
        },
        900: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2.5,
        }
    },

});





