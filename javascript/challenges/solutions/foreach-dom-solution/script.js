// Using the foreach loop display this array of text to the DOM.
//
// ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']
//
// Hint: Each array element must appear in it's own html tag in the browser.
//
// Extra Credit: use map or reduce.

// Declare variables for the arrays we are going to be working with
const names = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah']
const moreNames = ['Fred', 'Jen', 'Harry', 'Karen']

// foreach approach
const addNamesToDom = (names) => {

	// Get the HTML element we're going to be working with
	let target = document.getElementById('target')
	
	// Loop over the array using arrow syntax function
	names.forEach(name => {
		
		// Create an HTML element with our markup in it and append it to the DOM
		let p = document.createElement("p");
		p.innerText = name
		target.appendChild(p);
	});
}

// map approach
const addNamesToDomUsingInner = (names) => {

	// Get the HTML element we're going to be working with
	let target = document.getElementById('target')
	
	// Loop over the array using arrow syntax function
	names.map(name => {
		
		// Add an HTML element with our markup in it.
		target.innerHTML = target.innerHTML + "<p>" + name + "</p>"
	});
}

// Call the functions we have declared above
addNamesToDom(names)
addNamesToDomUsingInner(moreNames)
