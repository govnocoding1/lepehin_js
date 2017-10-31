function randomInteger(min, max) {
    var randomNumber = min - 0.5 + Math.random() * (max - min + 1)
    randomNumber = Math.round(randomNumber);
    return randomNumber;
  }
 
function countNumber(numb) {
	var count = 0;
	while (numb != 0) {
		numb = Math.floor(numb / 10);
		++count;
	}
	return count;
}

var a = +prompt('min:');
var b = +prompt('max:');
var random = randomInteger(a, b);
alert(random);
var numb;
numb = countNumber(random);
alert(numb);