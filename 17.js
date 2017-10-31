function nod(A, B) {
	if ((A == 0) && (B == 0)) {
		return 'Введите хотя одно число не равное 0';
	}
	if (A === 0) {
		return 'nod = ' + B;
	} else if (B === 0) {
		return 'nod = ' + A;
	}
	if (B > A) {
		A = A + B;
		B = A - B;
		A = A - B;
	}
	var nod;
	for (var i = 1; i < A; ++i) {
		if ((A % i == 0) && (B % i == 0)) {
			nod = i
		}
	}
	return 'nod = ' + nod;
}

function min(a, b, c) {
	if (a <= b) {
		if (a <= c ){
			return a;
		} else return c;
	} else 
	if (b <= c) {
		return b;
	} else return c;	
}

function max(a, b, c) {
	if (a >= b) {
		if (a >= c ){
			return a;
		} else return c;
	} else 
	if (b >= c) {
		return b;
	} else return c;	
}

var a = +prompt('a',1);
var b = +prompt('b',3);
var c = +prompt('c',5);

var nod = nod(min(a, b, c), max(a, b, c));
alert(nod)