function randomize(min, max){
	var randomNumber = min - 0.5 + Math.random() * (max - min + 1);
	randomNumber = Math.round(randomNumber);
	return randomNumber;
}

function sum(x) {
	var z = 0;
	var i = 0;
	while (i < 3) {
		z += +x[i];
		++i;
	};
	return z
	
}
var min = +prompt('Min', 100);
var max = +prompt('Max', 900);

var numb = randomize(min,max)+'';
alert(numb);

alert(sum(numb));