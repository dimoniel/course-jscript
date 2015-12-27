!function (){
	var list=[];

	window.onload = function (){
		nav.init();
	}


	function Navigation(){
		var prevSlide = nextSlide = 0;
		var paginator = [];
		var selectPage, width;
		var nav = this;
		var canIUse = true;
		var positionX = positionY = directionX = directionY = 0;
		setInterval(function(){return canIUse = true}, 1000);
		//Метод инициализации слайдера
		nav.init =function (){
			var li = document.getElementById('items').getElementsByTagName('li');
			list = Array.prototype.slice.call(li);
			nav.createPaginator(); //Вызов метода создания пагинаторов
			document.getElementById('next').addEventListener('click', this.next, false);
			document.getElementById('previus').addEventListener('click', this.previus, false);
			document.getElementById('paging').addEventListener('click', this.selectSlide, false);
			document.body.addEventListener('keydown', this.pressKey, false);
		}
		//Листаем вправо
		this.next = function(){
			if (canIUse){
				prevSlide = nextSlide;
				nextSlide += (nextSlide == list.length - 1) ? -(list.length - 1) : 1;
				nav.move(prevSlide, 1);
				canIUse = false;
			}
		};
		//Листаем влево
		this.previus = function(){
			if (canIUse){
				prevSlide = nextSlide;
				nextSlide -= nextSlide > 0 ? 1 : -(list.length - 1);
				nav.move(prevSlide, -1);
				canIUse = false;
			}
		};
		//Добавляем возможноть управление слайдером с клавиатуры
		this.pressKey = function(e){
			e = e || window.event;
			if (e.keyCode == 39) nav.next();
			if (e.keyCode == 37) nav.previus();
		}
		//Создание пагинаторов в зависимости от количества картинок
		this.createPaginator = function (){
			var content = document.createElement('ul');
			var i = list.length;
			content.id = 'paging';
			content.innerHTML += '<li id=\'previus\'></li><li id=\'next\'></li>';
			while(i--){
				content.innerHTML += (list.length - 1 == i) ? '<li class=\'current\'></li>' : '<li class=\'\'></li>';
			}
			document.getElementById('slider').appendChild(content);
			for (var j = 2; j <= list.length + 1; j++){
				paginator.push(document.getElementById('paging').children[j]);
			}
		};
		//Генерируем координаты расположения слайдов
		function coordinates(){
			directionX = (Math.random() - Math.random() <= 0) ? -1 : 1;
			directionY = (Math.random() - Math.random() < 0) ? -1 : 1;
			positionX = Math.random() * (1300 - 0) + 0;
			if (positionX >= 610){
				positionY = Math.random() * (1000 - 0) + 0;
			}
			else {
				positionY = Math.random() * (1000 - 457) + 457;
			}
		}
		//Распологаем следующий слайд на новой позиции
		function nextSlidePosition(slide){
			if (slide == -1){ //при нажатии на previus
				if (nextSlide == 0) {
					list[list.length - 1].removeAttribute('class');
					list[list.length - 1].style.left = directionX * positionX + 'px';
					list[list.length - 1].style.top = directionY * positionY + 'px';
				}
				else{
					list[nextSlide - 1].removeAttribute('class');
					list[nextSlide - 1].style.left = directionX * positionX + 'px';
					list[nextSlide - 1].style.top = directionY * positionY + 'px';
				}
			}
			else{				//при нажатии на next
				if (nextSlide == list.length - 1) {
					list[0].removeAttribute('class');
					list[0].style.left = directionX * positionX + 'px';
					list[0].style.top = directionY * positionY + 'px';
				}
				else{
					list[nextSlide + 1].removeAttribute('class');
					list[nextSlide + 1].style.left = directionX * positionX + 'px';
					list[nextSlide + 1].style.top = directionY * positionY + 'px';
				}
			}	
		}
		//Прокручиваем слайды вправо и влево, выделяем в пагинаторе кнопочку соответствующую данному слайду
		this.move = function(prevSlide, slide){
			coordinates();
			nextSlidePosition(slide);
			coordinates();
			list[prevSlide].style.left = directionX * positionX + 'px';
			list[prevSlide].style.top = directionY * positionY + 'px';
			list[nextSlide].style.left = 0 + 'px';
			list[nextSlide].style.top = 0 + 'px';
			list[prevSlide].className = 'moving';
			list[nextSlide].className = 'moving';

			paginator[prevSlide].removeAttribute('class');
			paginator[nextSlide].className = 'current';
		};
		//Метод отображает слайд выбранный спомощью пагинатора
		this.selectSlide = function(e){
			e = e || window.event;
			selectPage = e.target || e.srcElement;
			prevSlide = nextSlide;
			for (var i = 0; i < paginator.length; i++){
				if (selectPage === paginator[i]){
					nextSlide = i;
					nav.move(prevSlide);
				};
			};
		};
	};

	var nav = new Navigation();
}();