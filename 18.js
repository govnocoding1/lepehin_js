var startNumb = 19080 + '';
var endNumb;
for(var i = 0; i < 10; ++i){
	startNumb = '19' + i + '80' ;
	for(var j = 0; j < 10; ++j ){
		startNumb = 19 + startNumb[3] + 8 + j;
		if (Math.sqrt(startNumb) === Math.round(Math.sqrt(startNumb))) {
			endNumb = startNumb  + '';
		};
	}
};
alert(endNumb);