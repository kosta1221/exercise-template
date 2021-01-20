function run() {
	const input = JSON.parse(document.getElementById("input1").value);
	const output = document.getElementById("output");
	let out = "";
	/*This is a function for logging duplicates in an array to console*/
	function findDupsInArray(array) {
		let result = [];
		let sortedArr = array.sort(function (a, b) {
			return a - b;
		});
		for (let i = 0; i < sortedArr.length; i++) {
			if (sortedArr[i] === sortedArr[i + 1] && sortedArr[i] !== sortedArr[i + 2]) {
				result.push(sortedArr[i]);
				console.log(sortedArr[i]);
			}
		}
		return result;
	}
	out = findDupsInArray(input);
	/**/
	output.innerText = out;
}
