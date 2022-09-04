import Swiper, {Autoplay, Navigation, Pagination} from 'swiper';

export const slider = () => {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination, Autoplay],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    });
}