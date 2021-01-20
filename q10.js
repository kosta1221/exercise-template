function run() {
	const input = JSON.parse(document.getElementById("input1").value);
	const output = document.getElementById("output");
	let out = "";
	/*This is a function for logging a nested array in console*/
	function logArray(array) {
		for (let i = 0; i < array.length; i++) {
			console.log("row " + i);
			for (let j = 0; j < array[i].length; j++) {
				console.log(array[i][j]);
			}
		}
	}
	out = logArray(input);
	/**/
	output.innerText = out;
}
