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