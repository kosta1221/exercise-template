function run() {
	const input1 = JSON.parse(document.getElementById("input1").value);
	const input2 = JSON.parse(document.getElementById("input2").value);
	const output = document.getElementById("output");
	let out = "";
	/*This is a function for retrieving the value of a specified property from all objects in an array*/
	function propValues(array, prop) {
		const result = [];
		let elementOfArray;
		let i = -1;

		while (++i < array.length) {
			elementOfArray = array[i];

			if (elementOfArray.hasOwnProperty(prop)) {
				result.push(elementOfArray[prop]);
			}
		}

		return result;
	}
	/* sample input: */
	let library = [
		{ author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },

		{ author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },

		{
			author: "Suzanne Collins",
			title: "Mockingjay: The Final Book of The Hunger Games",
			libraryID: 3245,
		},
	];
	/* Could'nt get it to work with inputs */
	//out = propValues(input1, input2);
	//console.log(propValues(input1, input2));
	/**/
	out = propValues(library, "author");
	console.log(propValues(library, "author"));
	output.innerText = out;
}
