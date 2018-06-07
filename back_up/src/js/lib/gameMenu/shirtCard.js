/*
    shirt of cards

*/
import userData from '../userData.js';

const shirtType1 = document.getElementById('shirt-type-1'),
	  shirtType2 = document.getElementById('shirt-type-2'),
	  shirtType3 = document.getElementById('shirt-type-3');
	  

function cardShirtType1(){
	userData.cardShirt = 'card-shirt-type1'; 
	shirtType1.style.borderColor = 'orange';
	shirtType2.style.borderColor = 'gray';
	shirtType3.style.borderColor = 'gray';
	// console.log(userData);
};
function cardShirtType2(){
	shirtType1.style.borderColor = 'gray';
	shirtType2.style.borderColor = 'orange';
	shirtType3.style.borderColor = 'gray';
	userData.cardShirt = 'card-shirt-type2'; 
	// console.log('click type 2');
};
function cardShirtType3(){
	userData.cardShirt = 'card-shirt-type3'; 

	shirtType1.style.borderColor = 'gray';
	shirtType2.style.borderColor = 'gray';
	shirtType3.style.borderColor = 'orange';
	// console.log('click type 3');
};



/*
  events
*/ 
// preload
// style card

shirtType1.addEventListener('click', cardShirtType1 );
shirtType2.addEventListener('click', cardShirtType2 );
shirtType3.addEventListener('click', cardShirtType3 );




export {shirtType1, shirtType2, shirtType3, cardShirtType1, cardShirtType2, cardShirtType3 } ; 
