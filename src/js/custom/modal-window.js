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
