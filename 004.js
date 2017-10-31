function alexandrNod(A, B) {
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

var A = +prompt('A: ');
var B = +prompt('B: ');
alert(alexandrNod(A, B))

// var nok;
// for (i = 1; i < A * B; ++i) {
// 	if ((i % A == 0 ) && (i % B == 0)) {
// 		nok = i;
// 		break;
// 	}
// }
// alert('nok= ' + nok)