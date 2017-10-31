var numb = '';
var i=0;
while (i < 4) {
	var x = +prompt();
	if ((x < 16) && (x > 5)) {
		x = x * x;
		numb += (x + ',  ');
	};
	++i;
};
alert(numb);