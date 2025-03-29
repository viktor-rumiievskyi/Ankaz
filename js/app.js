let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
	contactInfo.classList.toggle('active');
}

document.querySelector('#cloce-contact-info').onclick = () => {
	contactInfo.classList.remove('active');
}


window.onscroll = () => {
	navbar.classList.remove('active');
	contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
	loop: true,
	grabCursor: true,
	cssMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	// pagination: {
	// 	el: ".swiper-pagination",
	// },
	mousewheel: true,
	keyboard: true,
});