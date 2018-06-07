import userData from '../userData.js';

const btnMenuGameStart = document.getElementById('startGame'),
	  indicatorLoad = document.getElementById('loader'),
	  preloadBlock = document.getElementById('game-menu'),
	  userPanel = document.getElementById('user-panel'),
	  cardsField = document.getElementById('cards-field'),
	  timeMsg = document.getElementById('time-msg'),
	  cardValue = document.getElementsByTagName('h3'),
	  name = document.getElementById("name").value,
	  surname = document.getElementById("surname").value,
	  email = document.getElementById("email").value,
	  sectionCards = document.getElementsByTagName('section')[1];




const timeWaitDrawField = 15;
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
	sectionCards.childNodes.forEach((el) => {
		el.className = userData.cardShirt;
			
	});

	console.log('func add stylec card');

};
// sort the field cards
function sortCard() {
	let	one = 0,
	zero = 0;

	for (let n = 0; n < card.length - 2; n++) {
		var randomNumber = Math.round(Math.random());
		randomNumber ? one += 1 : zero += 1;
		card[n].innerHTML = `<h4>${randomNumber}</h4`;
		card[n].style.background = userData.cardShirt;
		card[n].style.color = userData.cardShirt;
	};
	if ( (one % 2 != 0) || (zero % 2 != 0)) {
	  	if (one % 2 != 0) {
		  	one += 1 ;
		  	zero -= 1;	
	  		card[card.length - 1].textContent = '1'; 
	  		card[card.length - 2].textContent = '0';
	  	} else if (zero % 2 != 0) {
	  		zero += 1 ;
	  		one -=  1;
	  		card[card.length - 1].textContent = '0'; 
	  		card[card.length - 2].textContent = '1'; 
	  	};
	};


	console.log('sort card');

};

function drawCardField(){
		indicatorLoad.style.display = 'none';
		userPanel.style.display = 'block';
		footer.style.display = 'flex';
		cardsField.style.display = 'flex';
		cardValue.style.display = 'inline';
		timeMsg.style.display = 'block';
		 
	console.log(' func draw card field');

// const card = document.getElementsByClassName('card');
// card.forEach( (el, index ) => el[index].addEventListener(click, cardTouch) )



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