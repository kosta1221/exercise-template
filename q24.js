function run() {
	const input = JSON.parse(document.getElementById("input1").value);
	const output = document.getElementById("output");
	let out = "";
	/*This is a function for for removing null, 0, "", false, undefined and NaN values from an array*/
	function removeFromArr(array) {
		let result = array.slice();
		let iterationCount = 0;
		console.log("Your array at the beginning: " + result);
		for (let i = 0; i < result.length; i++) {
			iterationCount++;
			if (!result[i]) {
				console.log("Removed: " + result[i]);
				result.splice(i, 1);
				console.log("New array after " + iterationCount + " iterations: " + result);
				i--;
			}
		}
		return result;
	}
	/* Please change parameter to input on line 21 if you want to use input, this will not work properly however */
	/*JSON doesn't parse the input well for NaN, undefined and throws an error*/
	out = removeFromArr([NaN, 0, 15, false, -22, "", undefined, 47, null]);
	console.log("Final Array: " + out);
	/**/
	output.innerText = out;
}
