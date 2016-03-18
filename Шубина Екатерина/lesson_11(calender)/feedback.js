
var n = new Array ("January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
// конечно можно и так но более читаемо так
var anyArray = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];


for (j=0;j<last_date;j++)
    td_d[7+i+j].innerHTML = 1+j;
for (z=0;z<last_date;z++)
    if (td_d[z].innerHTML == today) {
        td_d[z].className = "now_day";
    }
// настоятельно рекомендую подобные записи оформлять более читабельно на пример

for ( j=0; j<last_date; j++ ) {

    td_d[7+i+j].innerHTML = 1+j;

};

for ( z=0; z<last_date; z++ ) {

    if ( td_d[z].innerHTML == today ) {
		td_d[z].className = "now_day";
    }

};

// так же
var body = document.getElementsByTagName("body")[0];

document.getElementsByTagName("body")[0] === document.body;

вообще интересный образец статичного календаря.
Только у тебя поерялись закрывающие теги html и body.
Исправь пожалуйста.