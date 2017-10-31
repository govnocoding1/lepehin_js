var a = '';
var i = 1000;
while (i < 10000) {
	if ((Math.sqrt(i) * 10 % 10 == 0) && ( Math.floor(i / 1000) == i % 100)) {
		a += i;
	};
	++i;
}
alert(a);