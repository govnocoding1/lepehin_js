function generateNumb (min, max) {
	var random = min - 0.5 + Math.random() * (max - min + 1);
	random = Math.round(random)
	return random;
}

function backNuber (numb) {
	var newBackNumber = newNumber[2] + newNumber[1] + newNumber[0]
	return newBackNumber;
}
var min = prompt('Min:', 100);
var max = prompt('Max:', 900);
var newNumber = generateNumb(min, max) + '';

alert(newNumber);
alert(backNuber(newNumber))