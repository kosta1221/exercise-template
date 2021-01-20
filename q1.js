function run() {
	const input = document.getElementById("input1").value;
	const output = document.getElementById("output");
	let out = "";
	/**/
	function is_array(input) {
		if (input instanceof Array) {
			return true;
		} else if (typeof input == "string") {
			if (input.charAt(0) === "[" && input.charAt(input.length - 1) === "]") {
				return true;
			}
		}
		return false;
	}
	out = is_array(input);
	/**/
	output.innerText = out;
}
