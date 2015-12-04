!function() {

var lessons = 21,
	startTableData = '<table><thead><th>student / lessons</th>',
	fixTable = '<h2>Журнал посещений</h2><table><tbody><th>student / lessons</th>';
	students = [{
			name: 'Шубина&#160;Екатерина',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Мартынова&#160;Полина',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Малежик&#160;Михаил',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Божко&#160;Дмитрий',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Дацько&#160;Юрий',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'0 отпросился по уважительной причение',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Савченко&#160;Виталий',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Бабаев&#160;Сергей',
			attendance: [
				'1 отлично',
				'0 неизвестно',
				'0 неизвестно',
				'0 неизвестно',
				'0 неизвестно',
				'0 неизвестно',
				'0 неизвестно',
				'0 неизвестно',
				'0 неизвестно',
				'0 неизвестно',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Кубрак&#160;Антон',
			attendance: [
				'1 отлично',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Бахнев&#160;Андрей',
			attendance: [
				'1 отлично',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'0 опытный верстальщик, возобновит посещение с вводных занятий по JS',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Пискунов&#160;Вадим',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Музыченко&#160;Константин',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Давидов&#160;Орхан',
			attendance: [
				'1 отлично',
				'0 возобновит посещение с вводных занятий по JS',
				'0 возобновит посещение с вводных занятий по JS',
				'0 возобновит посещение с вводных занятий по JS',
				'0 возобновит посещение с вводных занятий по JS',
				'0 возобновит посещение с вводных занятий по JS',
				'0 работает (будет посещать по выходным)',
				'1 отлично',
				'0 работает (будет посещать по выходным)',
				'1 отлично',
				'0 работает (будет посещать по выходным)',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Федоренко&#160;Дмитрий',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Романец&#160;Владимир',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'0 отпросился по уважительной причине',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Максим&#160;Бугай',
			attendance: [
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		}, {
			name: 'Алексей&#160;Горишный',
			attendance: [
				'0 начал курс позже',
				'0 начал курс позже',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				'1 отлично',
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		},
	];

for(var key = 0; key < lessons; key++ ) {
	startTableData += '<th>'+(+key+1)+'</th>'
};

startTableData += '</thead><tbody>';

fixTable

for ( key = 0; key < students.length; key++ ) {

	fixTable += '<tr><th>'+students[key].name+'</th>';
	startTableData += '<tr><th>'+students[key].name+'</th>';

	var atten = students[key].attendance;
	for(var i = 0; i < atten.length; i++ ) {
		startTableData += '<td><div'
		if( atten[i] ) {
			startTableData += ' class=';
			if(atten[i][0] > 0) {
				startTableData += '"attendance" data-reason="'+atten[i].replace('1 ','')+'"';
			} else {
				startTableData += '"miss" data-reason="'+atten[i].replace('0 ','')+'"';
			}
		}
		startTableData += '></div></td>';
	};
};

startTableData += '</tbody></table>';

fixTable += '</tbody></table>' + '<div id="table-box">'+startTableData+'<div>';

window.addEventListener('load', function() {
	var content = document.getElementsByClassName('content')[0]
	content.innerHTML = fixTable;
}, false);

}();
