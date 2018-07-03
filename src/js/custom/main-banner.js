var mainSlides = document.querySelectorAll('.main-banner__slide'),
	mainSlidePrev = document.querySelectorAll('.main-banner__prev-item');

function mainSlider(slides, slidesPrev) {
	slidesPrev.forEach(function (el, i) {
			slidesPrev[i].addEventListener('click', function (e) {
				e.preventDefault();
				for (var j = 0; j < slides.length; j++) {
					if (slides[j].classList.contains('active') && slidesPrev[j].classList.contains('active')) {
						slides[j].classList.remove('active');
						slidesPrev[j].classList.remove('active');
					}
				}
				this.classList.add('active');
				slides[i].classList.add('active');
			})
	})
}

mainSlider(mainSlides, mainSlidePrev);