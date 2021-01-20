function run() {
	const input1 = JSON.parse(document.getElementById("input1").value);
	const input2 = JSON.parse(document.getElementById("input2").value);
	const output = document.getElementById("output");
	let out = "";
	/*This is a function which performs a half interval search to find the index of an element in an array*/
	function binarySearch(array, element) {
		let found = 0;
		let length = array.length / 2;

		while (!found) {
			if (length > array.length) {
				found = -1;
				break;
			}

			for (let i = 0; i < length; i++) {
				if (array[i] === element) {
					found = i;
					break;
				}
			}

			length += length;
		}

		console.log("The value of " + element + " was found in index: " + found);
		return "The value of " + element + " was found in index: " + found;
	}

	/**/
	out = binarySearch(input1, input2);
	output.innerText = out;
}
