function generateNumb (min, max) {
	var random = min - 0.5 + Math.random() * (max - min + 1);
	random = Math.round(random)
	return random;
}

function count(numb){
	var sum = 0;
	numb += '';
	var i = 0;
	while (i < 4) {
		sum += +numb[i];
		++i;
	}
	return sum;
}

function sumNumbers (newFourthNumber, newThirdNumber, newSecondNumber, newFirstNumber) {
	var sumOfNumber = newFourthNumber + newThirdNumber + newSecondNumber + newFirstNumber;
	return sumOfNumber;
}

var min = prompt('Min:', 100);
var max = prompt('Max:', 900);

var newFirstNumber = generateNumb(min, max);
var newSecondNumber = generateNumb(min, max);
var newThirdNumber = generateNumb(min, max);
var newFourthNumber = generateNumb(min, max);

alert('First number: ' + newFirstNumber);
alert('Second number: ' + newSecondNumber);
alert('Third number: ' + newThirdNumber);
alert('Fourth number: ' + newFourthNumber);
var sum = sumNumbers(newFourthNumber, newThirdNumber, newSecondNumber, newFirstNumber);
alert('Sum:' + sum);
sum = count(sum);
alert(sum);
