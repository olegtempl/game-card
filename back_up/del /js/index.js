'use strict';

var userData = {
	name: 'Anonimyus',
	surname: '',
	email: '',
	cardShirt: '',
	level: 'easy',
	score: '0'

};

/*
    shirt of cards

*/
var shirtType1 = document.getElementById('shirt-type-1');
var shirtType2 = document.getElementById('shirt-type-2');
var shirtType3 = document.getElementById('shirt-type-3');

function cardShirtType1() {
	userData.cardShirt = 'card-shirt-type1';
	shirtType1.style.borderColor = 'orange';
	shirtType2.style.borderColor = 'gray';
	shirtType3.style.borderColor = 'gray';
	// console.log(userData);
}
function cardShirtType2() {
	shirtType1.style.borderColor = 'gray';
	shirtType2.style.borderColor = 'orange';
	shirtType3.style.borderColor = 'gray';
	userData.cardShirt = 'card-shirt-type2';
	// console.log('click type 2');
}
function cardShirtType3() {
	userData.cardShirt = 'card-shirt-type3';

	shirtType1.style.borderColor = 'gray';
	shirtType2.style.borderColor = 'gray';
	shirtType3.style.borderColor = 'orange';
	// console.log('click type 3');
}

/*
  events
*/
// preload
// style card

shirtType1.addEventListener('click', cardShirtType1);
shirtType2.addEventListener('click', cardShirtType2);
shirtType3.addEventListener('click', cardShirtType3);

var btnMenuGameStart = document.getElementById('startGame');
var indicatorLoad = document.getElementById('loader');
var preloadBlock = document.getElementById('game-menu');
var userPanel = document.getElementById('user-panels');
var cardsField = document.getElementById('cards-field');
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var email = document.getElementById("email").value;
var sectionCards = document.getElementsByTagName('section')[1];

var timeWaitDrawField = 15000;
// start the game ( click btn)
// fill the users object
function fillUserObject() {
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
}

// psevdo loader
function startLoader() {
	indicatorLoad.style.display = 'block';
	preloadBlock.style.display = 'none';
	console.log('func start loader');
}

// type shirt card
function addStylesCard() {
	sectionCards.childNodes.forEach(function (el) {
		return el.className = userData.cardShirt;
	});
	console.log('func add stylec card');
}
// sort the field cards
function sortCard() {
	console.log('sort card');
}

function drawCardField() {
	indicatorLoad.style.display = 'none';
	userPanel.style.display = 'block';
	cardsField.style.display = 'block';
	console.log(' func draw card field');
}

var start = function start() {
	fillUserObject();
	startLoader();
	console.log('func start');
	setTimeout(function () {
		console.log('timer');
		addStylesCard();
		drawCardField();
		sortCard();
	}, timeWaitDrawField);

	// sortCard();
};
// events
btnMenuGameStart.addEventListener('click', start);

// game menu
// import gameMenu from './lib/gameMenu.js';
// import {cardShirtType1} from './lib/gameMenu/shirtCard.js';
// import {cardShirtType2} from './lib/gameMenu/shirtCard.js';
// import {cardShirtType3} from './lib/gameMenu/shirtCard.js';
// message in game
// import msg from './lib/msg.js';
// walk cards
// import  keyboardCards  from './lib/walkCards.js';
// import  go  from './lib/walkCards.js';


// import {}from  './lib/text.js';
// import {}from  './lib/text.js';

/*
	User data
*/

// // info msg
// closeButtonMsg.addEventListener('click', closeMsg);
// // menu game
// btnMenuGameAbout.addEventListener('click', gameMenu.about);
// btnMenuGameOut.addEventListener('click', gameMenu.out);
// // walk the cards
// addEventListener('keydown', keyboardClick);


// open menu window
// setTimeout(function(){
//  openMsg();
// }, 5000);

//# sourceMappingURL=index.js.map
