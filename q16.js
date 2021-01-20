function run() {
	const input1 = JSON.parse(document.getElementById("input1").value);
	const input2 = JSON.parse(document.getElementById("input2").value);
	const output = document.getElementById("output");
	let out = "";
	/*This is a function for getting an array of leap years for a range of years and logging them to the console*/
	function getLeapYears(startY, endY) {
		let result = [];
		for (let i = startY; i <= endY; i++) {
			if (i % 4 === 0) {
				if (i % 100 === 0) {
					if (i % 400 === 0) {
						result.push(i);
						console.log(i);
					}
				} else {
					result.push(i);
					console.log(i);
				}
			}
		}
		return result;
	}
	out = getLeapYears(input1, input2);
	/**/
	output.innerText = out;
}
