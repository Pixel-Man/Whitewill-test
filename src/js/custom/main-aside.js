var mainAsie = document.querySelector('.main-aside'),
	toggleAside = document.querySelector('.main-aside__mob-toggle');

function asideOpen(aside, toggle) {
	var bodyWrap = document.querySelector('body'),
		click = 0;

	return {
		click: toggle.addEventListener('click', function (e) {
			e.preventDefault();
			click += 1;
			aside.classList.toggle('active');
			(click % 2 == 0) ? bodyWrap.style.left = '' : bodyWrap.style.left = '50px';
		}, false)
	}
}

asideOpen(mainAsie, toggleAside);