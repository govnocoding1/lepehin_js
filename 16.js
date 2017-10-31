function triangle(a, b, c) {
	if (a + b > c) {
		if (a + c > b) {
			if (b + c > a) {
				return 'Является треугольником'
			}
		}
	} 
	return 'Не является'
}

var a = +prompt();
var b = +prompt();
var c = +prompt();
var myTriangle = triangle(a, b, c);
console.log(myTriangle)