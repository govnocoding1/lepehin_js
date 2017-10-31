function generateNumber (min, max) {
	var random = min - 0.5 + Math.random() * (max - min + 1);
	random = Math.round(random)
	return random;
}

function maxOfSymbol(numb) {
	var symbol = 0;
	var i = 0;
	var k;
	while (i < 3) {
		k = +numb[i];
		if (symbol < k) {
			symbol = k;
		};
		i++
	}
	return symbol;
}

var min = prompt('Min:', 100);
var max = prompt('Max', 900);
var randomNumber = generateNumber(min, max) + '';
alert(randomNumber);
alert(maxOfSymbol(randomNumber));
