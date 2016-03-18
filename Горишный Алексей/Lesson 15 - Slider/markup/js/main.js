function Slider(divSlider, controlOn, paginatorOn) {
	this.slider = divSlider;
	this.controlOn = controlOn;
	this.paginatorOn = paginatorOn;
	this.imageCur = 0;														// number of current image
	this.imagesList = this.slider.getElementsByClassName('img-slider')[0];	// ul with images
	this.imagesCount = this.imagesList.getElementsByTagName('li').length;	// count of images
	this.imageWidth = this.slider.offsetWidth;								// width of image
	this.imageHeight = this.slider.offsetHeight;							// height of image

	// move image
	move = function(shift){
		// get new number of image
		var newNum = getNewNum.call(this, shift);

		if (this.paginatorOn) {
			var newSelect = this.slider.querySelector("[num='" + newNum + "']")

			// reset class name
			this.slider.getElementsByClassName('cur-image')[0].className = "";	
			
			// set class name
			newSelect.className = 'cur-image';							
		}

		// set number of new current image
		this.imageCur = newNum;	
		
		// set new position 
		this.imagesList.style.left = -this.imageCur*this.imageWidth + "px";
	};

	// click on PREV button
	this.prev = function(e) {
		move.call(this, -1);
	};

	// click on NEXT button
	this.next = function(e) {
		move.call(this, 1);
	};

	// click on paginator button
	this.select = function(e) {
		e = e || window.event;
		move.call(this, parseInt(e.target.getAttribute("num")) - this.imageCur);
	};

	// return new number of image
	getNewNum = function(shift){
		var newNum = this.imageCur + shift;

		if (newNum < 0) {
			newNum = this.imagesCount - 1;
		}
		if (newNum >= this.imagesCount) {
			newNum = 0;
		}
		return newNum; 
	};

	if (this.controlOn) {
		// Добавляем кнопки Следующий, Предыдущий 
		var nav = document.createElement('ul');
		nav.className = "nav-slider"; 
		nav.innerHTML = "<li class='prev-slider' style='bottom: " + (this.imageHeight/2 - 15) + "px;'>&#8592</li>";	// left
		nav.innerHTML += "<li class='next-slider' style='bottom: " + (this.imageHeight/2 - 15) + "px;'>&#8594</li>";	// right
		divSlider.appendChild(nav);

		// Вешаем события 
		divSlider.getElementsByClassName('prev-slider')[0].addEventListener('click', this.prev.bind(this), false);
		divSlider.getElementsByClassName('next-slider')[0].addEventListener('click', this.next.bind(this), false);
	}

	if (this.paginatorOn) {
		// Добавляем пагинатор внизу слайдера
		var select = document.createElement('ul');
		select.className = "select-slider";
		for (var i = 0; i < this.imagesCount; i++) {
			select.innerHTML += (i == 0)?"<li class='cur-image' num=" + i + "></li>":"<li num=" + i + "></li>";	// 
		}
		divSlider.appendChild(select);

		// Вешаем события 
		divSlider.getElementsByClassName('select-slider')[0].addEventListener('click', this.select.bind(this), true);
	}
};

window.onload = function(){
	var slider1 = new Slider(document.getElementById("slider1"), true, true);
	var slider2 = new Slider(document.getElementById("slider2"), true, false);
	var slider3 = new Slider(document.getElementById("slider3"), false, true);
};