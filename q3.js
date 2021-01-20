function run() {
	const input1 = JSON.parse(document.getElementById("input1").value);
	const input2 = JSON.parse(document.getElementById("input2").value);
	const output = document.getElementById("output");
	let out = "";
	/**/
	function first(array, numberOfElements) {
		if (numberOfElements === undefined) return array[0];
		else if (numberOfElements <= 0) return [];
		else return array.slice(0, numberOfElements);
	}
	out = first(input1, input2);
	/**/
	output.innerText = out;
}
