function multipleNumb(x) {
	if (x == 0) { 
		return 'k НЕ равно 0';
	}
	var a = '';
	var i = k;
	while (i < 100) {
		if (i % k == 0) {
			a +=(i + ', ');
		};
		++i;
	}
	return a;
}

var k = +prompt('Введите k, неравное 0:',4);
var numbs = multipleNumb(k);
alert(numbs);

