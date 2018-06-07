/*
        Message in game
*/
const btnCloseMsg = document.getElementById('closeMsg');

function openMsg() {
  let objMsg = document.getElementById('msg');
  objMsg.style.display = 'inline-block';
}
// close the Msg window
function closeMsg() {
  let objMsg = document.getElementById('msg');
  objMsg.style.display = 'none';
}

const msg = {
	openMsg,
	closeMsg
};


export default { msg };



