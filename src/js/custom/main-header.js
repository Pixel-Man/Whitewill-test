var mainHeader = document.querySelector('.main-header'),
	navMobToggle = document.querySelector('.main-header__nav-btn-mob');

navMobToggle.addEventListener('click', function (e) {
	e.preventDefault();
	mainHeader.classList.toggle('active');
}, false);

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled == 0) {
		mainHeader.classList.remove('fixed');
	} else {
		mainHeader.classList.add('fixed');
	}
};

window.addEventListener('resize', function () {
	var windowSize = window.innerWidth;
	if (windowSize > '767') {
		mainHeader.classList.remove('active');
	}
}, false);