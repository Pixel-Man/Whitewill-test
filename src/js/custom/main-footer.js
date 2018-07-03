var topBtn = document.querySelector('#top-btn'),
	requestAnimationFrame = requestAnimationFrame || mozRequestAnimationFrame ||
		webkitRequestAnimationFrame || msRequestAnimationFrame,
	V = 0.25;

topBtn.addEventListener('click', function (e) {
	e.preventDefault();
	var w = window.pageYOffset,
		hash = this.href.replace(/[^#]*(.*)/, '$1');
	t = document.querySelector(hash).getBoundingClientRect().top,
		start = null;
	requestAnimationFrame(step);

	function step(time) {
		if (start === null) start = time;
		var progress = time - start,
			r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
		window.scrollTo(0, r);
		if (r != w + t) {
			requestAnimationFrame(step)
		} else {
			location.hash = hash
		}
	}
}, false);
