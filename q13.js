let array = [];
/*This is a function for adding an item to an array*/
function addToArr() {
	const input = JSON.parse(document.getElementById("input1").value);
	array.push(input);
}
/* This is a function for displaying an array in the console */
function displayArr() {
	for (let i = 0; i < array.length; i++) {
		console.log("Element " + i + " = " + array[i]);
	}
}
