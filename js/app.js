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
}