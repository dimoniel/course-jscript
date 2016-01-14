/*
Молодец

так же по реализации верстки - оно конечно прикольно что нажатая кнопка остаетьсяактивной )) но еслиу тебя есть ховеры то они должны прослежиаться и при активной и при не активной кнопке.

Усложняем задачу =)) (в конструктор обьектом передаються параметры галереи)

Подобные задачи рекомендую начинать с конца- то есть как бы ты хотел что бы код выглядел в конце.

Я бы хотел что бы это было что то в таком роде =)

*/


window.onload = function() {

	window.gallerys = {};

	gallerys.galleryWithPagination = new Gallery({// первая
		images: document.getElementById('header-gallery'),
		effect: 'slide',
		pagination: 3,
		controls: false,
		keyButtons: false
	});

	gallerys.galleryWithControls = new Gallery({// и вторая
		images: document.getElementById('content-gallery'),
		effect: 'fade',
		pagination: false,
		controls: true,
		keyButtons: false
	});

};