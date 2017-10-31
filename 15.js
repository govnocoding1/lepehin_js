function createArray() {
	var i =0;
	var array = [];
	var k = +prompt('Введите колтчество чисел', 5);
	while (i < k) {
		array.push(+prompt());
		++i;
	};
	return array;
}

function findMax(array) {
	var i = 0;
	var max = 0;
	console.log(array.length)
	while (i < array.length) {
		if (max < array[i]) {
			max = array[i];
		};
		++i;
	};
	return Math.pow(max, 2);
}

function findMin(array) {
	var i = 0;
	var min = Number.MAX_SAFE_INTEGER;;
	while (i < array.length) {
		if (min > array[i]) {
			min = array[i];
		};
		++i;
	};
	return Math.pow(min, 1/2);
}

var newArray = [];
newArray = createArray();
console.log(newArray)
var maxNumber = findMax(newArray);
var minNumber = findMin(newArray);
alert("Max ^2 :   " + maxNumber + " ;   sqrt(min):  " + minNumber);
