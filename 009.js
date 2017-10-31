function generateNumb (min, max) {
	var random = min - 0.5 + Math.random() * (max - min + 1);
	random = Math.round(random)
	return random;
}

var min = prompt('Min:', 100);
var max = prompt('Max:', 900);
var newNumber = generateNumb(min, max) + '';
alert(newNumber);	
var count = 0;
for (var i = 0; i < 3; ++i) {
	var z = +newNumber[i];
	if (z > 5) {
		count++;
	};
};
alert(count)