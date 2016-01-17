!function (){
	window.onload = function (){

	galleryWithPagination = new Gallery({
 		images: document.getElementById('first-gallery'),
 		effect: 'slide',
 		pagination: true,
 		controls: false
 		});
 
 	galleryWithControls = new Gallery({
 		images: document.getElementById('second-gallery'),
 		effect: 'fade',
 		pagination: false,
 		controls: true
 		});

		galleryWithPagination.init();
		galleryWithControls.init();
	};

	function Gallery(prop){
		var prevPos = 0;
		this.position = 0;
		var paginator = [];
		var paginatorList, next, previus;
		var some = this;
		var canIUse = true;
		var list = prop.images.getElementsByTagName('li');
		list = Array.prototype.slice.call(list);
		var width = parseInt(getComputedStyle(list[0]).width);
		prop.images.className = 'gallery ' + prop.effect;
		setInterval(function(){return canIUse = true}, 1200);

		//Initialization method slider
		this.init = function (){
			if(prop.controls){
				this.createControls();
			}
			if(prop.pagination){
				this.createPaginator();
			}
			this.createEventListener();
			sliderSize();
		};

		//Creating controls
		this.createControls = function(){
			var content = document.createElement('div');
			content.innerHTML += '<div class=\'previus\'>&larr;</div><div class=\'next\'>&rarr;</div>';
			prop.images.parentElement.appendChild(content);
			next = prop.images.parentElement.getElementsByClassName('next')[0];
			previus = prop.images.parentElement.getElementsByClassName('previus')[0];
		};

		//Creating paginator
		this.createPaginator = function (){
			var y = list.length;
			var content = document.createElement('ul');
			content.className = 'paging';
			while(y--){
				content.innerHTML += (list.length - 1 == y) ? '<li class=\'current\'></li>' : '<li class=\'\'></li>';
			};
			prop.images.parentElement.appendChild(content);
			paginatorList = prop.images.parentElement.getElementsByClassName('paging')[0];
			for (var i = 0; i < list.length; i++){
				paginator.push(paginatorList.children[i]);
			};
		};

		//Determine the size of the slider
		function sliderSize(){
			var width = parseInt(getComputedStyle(list[0]).width);
			var height = parseInt(getComputedStyle(list[0]).height);
			prop.images.parentElement.style.width = width + 'px';
			prop.images.parentElement.style.height = height + 'px';
		}

		//Add event listener
		this.createEventListener = function(){
			if (prop.controls){
				next.addEventListener('click', this.next, false);
				previus.addEventListener('click', this.previus, false);
			}
			if (prop.pagination){
				paginatorList.addEventListener('click', this.selectSlide, false);
			}
		}

		//Slide effect
		function slide(prevPos){
			var direction = nextSlidePosition();
			list[prevPos].style.left = direction * width + 'px';
			list[some.position].style.left = 0 + 'px';
			list[prevPos].className = 'moving';
			list[some.position].className = 'moving';
			if (prop.pagination){
				paginator[prevPos].removeAttribute('class');
				paginator[some.position].className = 'current';
			}
		}
			//Распологаем следующий слайд на новой позиции
			function nextSlidePosition(){
				var direction = parseInt(getComputedStyle(list[some.position]).left);
				direction = (direction > 0) ? -1 : 1;
				if (direction > 0){ //при нажатии на previus
					if (some.position == 0) {
						list[list.length - 1].style.left = -width + 'px';
					}
					else{
						list[some.position - 1].style.left = -width + 'px';
					}
					for (var i = some.position; i < list.length - 1; i++){
						list[i].style.left = -width + 'px';
					}
				}
				else{				//при нажатии на next
					if (some.position == list.length - 1) {
						list[0].style.left = width + 'px';
					}
					else{
						list[some.position + 1].style.left = width + 'px';
					}
					for (var i = 0; i < some.position; i++){
						list[i].style.left = -width + 'px';
					}
				}
				return direction;
			}

		//Fade effect
		function fade(prevPos){
			list[prevPos].className = 'prev';
			list[some.position].className = 'cur';
			if (prop.pagination){
				paginator[prevPos].removeAttribute('class');
				paginator[some.position].className = 'current';
			}
		};

		//Pressed 'NEXT' button
		this.next = function(){
			if (canIUse){
				list[prevPos].removeAttribute('class');
				prevPos = some.position;
				some.position = ++some.position % list.length;
				some.move(prevPos);
				canIUse = false;
			}
		};

		//Pressed 'PREVIUS' button
		this.previus = function(){
			if (canIUse){
				list[prevPos].removeAttribute('class');
				prevPos = some.position;
				some.position -= some.position > 0 ? 1 : -(list.length-1);
				some.move(prevPos);
				canIUse = false;
			}
		};

		//Сhoose the effect of scrolling slideshow
		this.move = function(prevPos){
			if (prop.effect == 'slide') slide(prevPos);
			if (prop.effect == 'fade') fade(prevPos);
		};

		//The method displays the slide selected with paginator
		this.selectSlide = function(e){
			var selectImage;
			if (canIUse){
				e = e || window.event;
				selectImage = e.target || e.srcElement;
				list[prevPos].removeAttribute('class');
				prevPos = some.position;
				for (var i = 0; i < paginator.length; i++){
					if (selectImage === paginator[i]){
						some.position = i;
						some.move(prevPos);
					};
				};
				canIUse = false;
			};
		};
	};

}();