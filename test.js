function nod(a, b) {
	if (b == 0) {
		return a;
	} else {
		return nod(b, (a % b));
	};
};


alert(nod(5, 10));

