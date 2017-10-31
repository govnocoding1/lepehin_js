;function generateNumb (min, max) {
	var random = min - 0.5 + Math.random() * (max - min + 1);
	random = Math.round(random)
	return random;
}

function average (numb1, numb2) {
	return (numb1 + numb2)/2;
}

function geometricMean (numb1, numb2) {
	return Math.sqrt(numb1 * numb2);
}
var min = prompt('Min:', 10);
var max = prompt('Max:', 90);
var newNumber1 = generateNumb(min, max);
var newNumber2 = generateNumb(min, max);
alert(newNumber1 + ' : ' + newNumber2 );

if (newNumber1 >= newNumber2) {
	var a = geometricMean(newNumber1, newNumber2);
	var b = average(newNumber1, newNumber2);
}	else {
	var a = average(newNumber1, newNumber2);
	var b = geometricMean(newNumber1, newNumber2);
	};
	
alert(a + ' : ' + b);