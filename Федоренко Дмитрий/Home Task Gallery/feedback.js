
/*
Молодец

теперь все таки очистить бы window от всех лишних запчастей кроме инита модуля =))) 

так же по реализации верстки - оно конечно прикольно что нажатая кнопка остаетьсяактивной )) но еслиу тебя есть ховеры то они должны прослежиаться и при активной и при не активной кнопке.

Усложняем задачу =)) => Попробуй реализовать на одной странице 2 галереи одну толькос пагинацией а вторую только с кнопками (next / prev) естественно у каждойсво уникальный список картинок. А самое главное все это с помощью одного конструктора =). (в конструктор обьектом передаються параметры галереи)

Подобные задачи рекомендую начинать с конца- то есть как бы ты хотел что бы код выглядел в конце.

Я бы хотел что бы это было что то в таком роде =)

*/


window.onload = function() {

	var galleryWithPagination = new Gallery({// первая
		images: document.getElementById('header-gallery'),
		effect: 'slide',
		pagination: true,
		controls: false,
		keyButtons: false
	});

	var galleryWithControls = new Gallery({// и вторая
		images: document.getElementById('content-gallery'),
		effect: 'fade',
		pagination: false,
		controls: true,
		keyButtons: false
	});

];