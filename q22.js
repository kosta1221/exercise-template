function run() {
	const input1 = JSON.parse(document.getElementById("input1").value);
	const input2 = JSON.parse(document.getElementById("input2").value);
	const output = document.getElementById("output");
	let out = "";
	/*This is a function for sorting an array and getting rid of duplicate values*/
	function sortAndEliminateDups(array) {
		let sortedArr = array.sort(function (a, b) {
			return a - b;
		});
		for (let i = 0; i < sortedArr.length; i++) {
			if (sortedArr[i] === sortedArr[i + 1] && sortedArr[i] !== sortedArr[i + 2]) {
				console.log("Deleted " + sortedArr[i]);
				sortedArr.splice(i, 1);
			}
		}
		return sortedArr;
	}
	/* This is a function for merging 2 arrays, sorting them and getting rid of duplicate values */
	function mergeArrays(array1, array2) {
		let result = array1.concat(array2);
		console.log("Concatenated array before sorting and getting rid of duplicates is " + result);
		return sortAndEliminateDups(result);
	}
	out = mergeArrays(input1, input2);
	console.log(out);
	/**/
	output.innerText = out;
}
