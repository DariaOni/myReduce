Array.prototype.myReduceMethod = function (callback, initialValue) {
	let accumulator = initialValue || this[0];

	for (let i = 0; i < this.length; i++) {
		if (i === 0 && !initialValue) {
			continue;
		}

		let newValue = callback(accumulator, this[i], i, this);
		accumulator = newValue;
	}

	return accumulator;
};

let marks = [10, 2, 100];
let sum = marks.myReduceMethod((acc, el) => acc + el);
console.log(sum);
