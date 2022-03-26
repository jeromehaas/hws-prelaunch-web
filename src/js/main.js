import Swiper from 'swiper/bundle';

const swiper = new Swiper(".mySwiper", {
	direction: "vertical",
	mousewheel: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	}
});