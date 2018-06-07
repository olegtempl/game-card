/*
    Walk the cards
*/
// import go from './lib/walkCards/objGo.js';

// keyboard 
function keyboardCards(dir) {
  switch (dir.keyCode) {
      case 37: // left
      go.left()
          break;
      case 38: // up
      go.up()
          break;
      case 39: // right
          break;
      go.right()
      case 40: // down
      go.down()
          break;
  }

}


export default { keyboardCards, go };