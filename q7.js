function run() {
	const input = JSON.parse(document.getElementById("input1").value);
	const output = document.getElementById("output");
	let out = "";
	/**/
	function sortArray(array) {
		let done = false;
		while (!done) {
			done = true;
			for (let i = 1; i < array.length; i += 1) {
				if (array[i - 1] > array[i]) {
					done = false;
					let temp = array[i - 1];
					array[i - 1] = array[i];
					array[i] = temp;
				}
			}
		}

		return array;
	}
	out = sortArray(input);
	/**/
	output.innerText = out;
}
