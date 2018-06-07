import userData from '../userData.js';

const btnMenuGameStart = document.getElementById('startGame'),
	  indicatorLoad = document.getElementById('loader'),
	  preloadBlock = document.getElementById('game-menu'),
	  userPanel = document.getElementById('user-panels'),
	  cardsField = document.getElementById('cards-field'),
	  name = document.getElementById("name").value,
	  surname = document.getElementById("surname").value,
	  email = document.getElementById("email").value,
	  sectionCards = document.getElementsByTagName('section')[1];


const timeWaitDrawField = 15000;
// start the game ( click btn)
// fill the users object
function fillUserObject(){
	userData.name = name;
	userData.surname = surname;
	userData.email = email;

	// if (document.forms[0].easy.checked == true) {
	// 	userData.level = 'easy';		
	// } else if (document.forms[0].medium.checked == true) {
	// 	userData.level = 'medium';
	// } else if (document.forms[0].hard.checked == true) {
	// 	userData.level = 'hard';
	// }; 		
	console.log('func fill the objct');
};

// psevdo loader
function startLoader() {
	indicatorLoad.style.display = 'block';
	preloadBlock.style.display = 'none';
	console.log('func start loader');
};

// type shirt card
function addStylesCard() {
	sectionCards.childNodes.forEach((el) => 	
	el.className = userData.cardShirt)
	console.log('func add stylec card');

};
// sort the field cards
function sortCard() {
	console.log('sort card');

};

function drawCardField(){
		indicatorLoad.style.display = 'none';
		userPanel.style.display = 'block';
		cardsField.style.display = 'block';
		console.log(' func draw card field');
};		


const start = () => {
	fillUserObject();
	startLoader();
	console.log('func start');
	setTimeout(function(){
		console.log('timer');
		addStylesCard();
		drawCardField();
		sortCard();
	}, timeWaitDrawField );

	// sortCard();

};
// events
btnMenuGameStart.addEventListener('click', start);

export default {start, startLoader, addStylesCard, fillUserObject, sortCard};