;function findMinNumber(array) {
	var i =0;
	var min = Number.MAX_SAFE_INTEGER;
	var k;
	k = +prompt('Введите колтчество чисел', 9);
	while (i < k) {
		array.push(+prompt());
		if (min > array[i]) {
			min = array[i];
		};
		++i;
	};
	return min;
}

function makeRoot(numb) {
	return Math.sqrt(numb);
}

var newArray = [];
var minNumb = findMinNumber(newArray);
var newRoot = makeRoot(minNumb);

alert(newRoot);
