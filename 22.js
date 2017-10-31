var newNumb = prompt('Numb');
var evenNumb = ' ';

for (var i = 0; i < newNumb.length; i+=2){
	evenNumb +=  +newNumb[i];
	evenNumb = evenNumb + '';
};


for (var i = 1; i < newNumb.length; i+=2){
	var oddNumb = ' ';
	oddNumb +=  newNumb[i];
	oddNumb = +oddNumb;
};


alert(evenNumb);
alert(oddNumb);
alert(evenNumb - oddNumb)

if (((evenNumb - oddNumb) % 11 == 0) | (evenNumb == oddNumb)) {
	alert('Число делится на 11');
}else {
	alert('Число не делится на 11')
}