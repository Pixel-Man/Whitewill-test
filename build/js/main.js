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
var modalContent = [
	{
		title: 'Food Products',
		desc: 'Lorem ipsum dolor sit amet, mea enim mutat ne. Te sed cibo facete erroribus. Liber democritum sed ex, at eam insolens assueverit. Ad cum dolore noluisse. Cu everti equidem saperet qui, porro euripidis sea no.\n' +
		'\n' +
		'Vix labore ancillae ut, at his affert recteque. Probo ocurreret nec in. Cetero platonem eam te, laoreet appareat lucilius his te. Sed semper molestiae torquatos ut, quaeque cotidieque ad vix.\n' +
		'\n' +
		'In quis adipisci sed, verear iudicabit evertitur eos no, nec facer expetenda interpretaris ea. Ea sea equidem delicata accommodare, ius ullum ornatus eu. Omnis errem cum eu, eu nullam aliquid quo. Est novum euripidis intellegebat eu, erat suscipit vis ex. Vim lorem recteque at, per tibique erroribus ut.'
	},
	{
		title: 'Locate store',
		desc: 'Mutat illud in nec, quo ex dolore graeci. Utinam fuisset te mel. Quidam accumsan adipiscing his id. An nulla fierent his.\n' +
		'\n' +
		'Cum adipisci iudicabit no. Eu eum deserunt splendide elaboraret. Sed elitr similique in, mel te tincidunt conclusionemque. Vim ne diam disputationi, vitae nostrud theophrastus duo cu. Ferri clita nam ex, ea percipit sententiae assueverit usu. Ei adhuc omnes gloriatur sed, ne vis virtute luptatum.\n' +
		'\n' +
		'Eos wisi tractatos vulputate at, at vis quando complectitur. Vis cu omnis volumus, ei esse denique quaestio qui. Quo natum mutat cu, tantas patrioque in vel. In graeci comprehensam signiferumque quo, te ius facilis voluptaria repudiandae, aeterno menandri platonem ad mei. Id propriae lucilius vituperata eum. Nam cibo molestie cu, wisi laoreet dolores ei est.\n'
	},
	{
		title: 'Fan Club',
		desc: 'Ius at esse explicari, id mel eirmod consulatu. No verear delicatissimi mea. Ius dolorem iudicabit torquatos ut. Cum te regione gubergren rationibus, vivendo copiosae ad ius.\n' +
		'\n' +
		'Vide dissentias in sed, no facete perpetua electram pri. Vis no dico ubique corpora, ne alii elitr pro. Ius ut possim laboramus torquatos. Vim in reque animal appetere, ut porro incorrupte quo. Vix in tale viderer, vitae mucius qui ad, per habemus accusata id.\n' +
		'\n' +
		'Facilisis mediocritatem eu vis, cu essent vidisse aperiam quo. Pri ad purto erroribus evertitur, duo legimus detraxit menandri id, pri dicat vocent vivendo an. Ad vim malorum detraxit. Eam adhuc audiam legimus ea.'
	}
];

var makeElement = function (tagName, className, text) {
	var element = document.createElement(tagName);
	element.classList.add(className);
	if (text) {
		element.textContent = text;
	}

	return element;
};

var createModal = function (modalContent, i, color) {
	var fragment = document.createDocumentFragment();
	var articleContent = makeElement('article', 'modal-window__content');
	articleContent.style.backgroundColor = color;
	var articleContentTitle = makeElement('h3', 'modal-window__content-title', modalContent[i].title);
	articleContentTitle.classList.add('block-title');
	articleContent.appendChild(articleContentTitle);
	var articleContentClosed = makeElement('button', 'modal-window__content-closed-btn', 'Closed');
	articleContent.appendChild(articleContentClosed);
	var articleContentDesc = makeElement('p', 'modal-window__content-desc', modalContent[i].desc);
	articleContent.appendChild(articleContentDesc);
	fragment.appendChild(articleContent);

	return fragment;
};

var listModalWindow = document.querySelectorAll('.js-modal'),
	modalWindow = document.querySelector('.modal-window'),
	modalWindowContent;

listModalWindow.forEach(function (elem, i) {
	elem.addEventListener('click', function (e) {
		e.preventDefault();
		modalWindow.classList.add('active');
		modalWindow.appendChild(createModal(modalContent, i, '#f5f5f5'));
		modalWindowContent = modalWindow.querySelector('.modal-window__content');
		modalWindowContent.classList.add('open');
	});
});

var modalClosed, modalClosedWrap;

document.addEventListener('click', function (ev) {
	modalClosed = ev.target.classList.contains('modal-window__content-closed-btn');
	modalClosedWrap = ev.target.classList.contains('modal-window');

	if (ev.target && modalClosed || ev.target && modalClosedWrap) {
		ev.preventDefault();
		modalWindowContent.classList.remove('open');
		modalWindowContent.classList.add('closed');
		setTimeout(function () {
			modalWindow.classList.remove('active');
			modalWindow.innerHTML = '';
		}, 500)
	}
});
var createCalc = function () {
	var fragment = document.createDocumentFragment();
	var articleCalc = makeElement('article', 'modal-window__content');
	var articleCalcTitle = makeElement('h3', 'modal-window__content-title', 'Calculator');
	articleCalcTitle.classList.add('block-title');
	articleCalc.appendChild(articleCalcTitle);
	var articleCalcClosed = makeElement('button', 'modal-window__content-closed-btn', 'Closed');
	articleCalc.appendChild(articleCalcClosed);
	var articleCalcDesc = makeElement('p', 'modal-window__content-desc', 'Калькулятор расчета стоимости объекта в зависимости от введенной площади');
	articleCalc.appendChild(articleCalcDesc);
	var articleCalcInput = makeElement('input', 'modal-window__calc-input');
	articleCalcInput.setAttribute('type', 'number');
	articleCalcInput.setAttribute('min', '10');
	articleCalcInput.setAttribute('max', '200');
	articleCalcInput.setAttribute('step', '1');
	articleCalc.appendChild(articleCalcInput);
	var articleCalcLabel = makeElement('p', 'modal-window__calc-label', 'Конечная стоимость:');
	articleCalc.appendChild(articleCalcLabel);
	var articleCalcSum = makeElement('output', 'modal-window__calc-output');
	articleCalc.appendChild(articleCalcSum);
	fragment.appendChild(articleCalc);

	return fragment;
};

var calcInput, calcOutput;

var openModal = function (e) {
	e.preventDefault();
	modalWindow.classList.add('active');
	modalWindow.appendChild(createCalc());
	modalWindowContent = modalWindow.querySelector('.modal-window__content');
	modalWindowContent.classList.add('open');
	modalWindowClosed = modalWindow.querySelector('.modal-window__content-closed-btn');
	calcInput = modalWindow.querySelector('.modal-window__calc-input');
	calcOutput = modalWindow.querySelector('.modal-window__calc-output');

	calcInput.oninput = function () {
		var area = this.value,
			calcValue = 0,
			calcCoef = 0;
			calcFinalCost = 0;

		var calc = function () {
			if (area <= 50) {
				calcValue = 10000;
			} else if (area <= 100) {
				calcValue = 15000;
				calcCoef = calcValue * 125 / 100;
			} else if (area <= 200) {
				calcValue = 20000;
				calcCoef = calcValue * 150 / 100;
			}
			calcFinalCost = area * calcValue + calcCoef + ' руб.';

			return calcFinalCost;
		};

		calcOutput.value = calc();
	};
};

var calculatorBtn = document.querySelector('.js-calculator');

calculatorBtn.addEventListener('click', openModal);