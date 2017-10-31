;
function countNumber(numb) {
	var count = 0;
	while (numb != 0) {
		numb = Math.floor(numb / 10);
		++count;
	}
	return count;
}

function findMaxNumber(array) {
	var i =0;
	var max = 0;
	var k;
	k = +prompt('Введите колтчество чисел', 8);
	while (i < k) {
		array.push(+prompt());
		if (max < array[i]) {
			max = array[i];
		};
		++i;
	};
	return max;
}

function makeBackNumb(numb) {
	var i = 1;
	var k = countNumber(numb);
	var backNumb = '';
	while (i <= k) {
		var numeral = Math.floor((numb % (Math.pow(10, i))) / Math.pow(10, i-1));
		backNumb += numeral;
		++i
	};
	return backNumb;
}

var newArray = [];
var maxNumb = findMaxNumber(newArray);
var backNumb = makeBackNumb(maxNumb)

alert(backNumb);
