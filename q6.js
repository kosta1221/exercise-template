function run() {
	const input1 = document.getElementById("input1").value;
	const output = document.getElementById("output");
	let out = "";
	/**/
	function insertDashesEven(input1) {
		let inputStr = input1.toString();
		let result = "";
		for (let i = 0; i < inputStr.length; i++) {
			result += inputStr[i];
			if (inputStr[i] % 2 === 0 && inputStr[i + 1] % 2 === 0) {
				result += "-";
			}
		}
		return result;
	}
	out = insertDashesEven(input1);
	/**/
	output.innerText = out;
}
