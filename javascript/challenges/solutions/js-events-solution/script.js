/**
 * A simple function that changes the color of a button on click with an Id of target 
 **/
function handleButtonColorChange() {
	let button = document.getElementById('target')
	if(button.style.backgroundColor === 'green') {
		button.style.backgroundColor = "red"
	} else {
		button.style.backgroundColor ='green'
	}
}
