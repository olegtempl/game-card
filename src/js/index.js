// game menu
// import gameMenu from './lib/gameMenu.js';
// import shirtCard from './lib/gameMenu/shirtCard.js';
// import start from './lib/gameMenu/startGame.js';

// import {cardShirtType1} from './lib/gameMenu/shirtCard.js';
// import {cardShirtType2} from './lib/gameMenu/shirtCard.js';
// import {cardShirtType3} from './lib/gameMenu/shirtCard.js';
// message in game
// import msg from './lib/msg.js';
// walk cards
// import  keyboardCards  from './lib/walkCards.js';
// import  go  from './lib/walkCards.js';
// import userData from './lib/userData.js';

// import {}from  './lib/text.js';
// import {}from  './lib/text.js';

/*
	User data
*/

// cardTouch()
const card = document.getElementsByClassName('card');
const cardsField = document.getElementById('cards-field');
let cardTouch = () => {

let	one = 0,
	zero = 0;

	for (let n = 0; n < card.length - 2; n++) {
		var randomNumber = Math.round(Math.random());
		// randomNumber ? one += 1 : zero += 1;
		// card[n].innerHTML = `<h4>${randomNumber}</h4`;
		// card[n].style.background = userData.cardShirt;
	};
	console.log(' touch card')
	// console.log( card[0].outerHTML)
};


let seeCard = () => {
	console.log('seee');
	// setTimeout(function(){ 

	// }, 1500 )



	setTimeout(timer,1000);

};


card[0].addEventListener('click', seeCard);
card[1].addEventListener('click', seeCard);
card[2].addEventListener('click', seeCard);
card[3].addEventListener('click', seeCard);
card[3].addEventListener('click', seeCard);
card[4].addEventListener('click', seeCard);
card[5].addEventListener('click', seeCard);
card[6].addEventListener('click', seeCard);
card[7].addEventListener('click', seeCard);
card[8].addEventListener('click', seeCard);
card[9].addEventListener('click', seeCard);
card[10].addEventListener('click', seeCard);
card[11].addEventListener('click', seeCard);
card[12].addEventListener('click', seeCard);
card[13].addEventListener('click', seeCard);
card[14].addEventListener('click', seeCard);
card[15].addEventListener('click', seeCard);


var ticks;


let st = document.getElementById("st");
let endMsg = document.getElementById("end-msg");


// function startTimer() {
//   // ticks = document.getElementById("nTicks").value;
//   console.log(' start timer')
// }


st.addEventListener('click', timer	)




function timer(){
var obj=document.getElementById('timer_inp');
obj.innerHTML--;
	if (obj.innerHTML==0){
		endMsg.style.display = 'block';





		setTimeout(function(){},1000);
	} else {
		setTimeout(timer,1000);
	}
}



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
