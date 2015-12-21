// JavaScript Document
window.onload = function() {
	var slideBox = document.getElementsByTagName("UL")[0];
	
	initGallery(slideBox, true, true);
	
	function initGallery(slideContainer, prevNextButtons, pagingButtons) {
		if (!!slideContainer && (slideContainer.nodeName == "UL")) {
			window.gallery = new Gallery(slideContainer);
			gallery.create();
			
			if (!!prevNextButtons) {
				gallery.prevNext();
			}
			
			if (!!pagingButtons) {
				gallery.pagination();
			}
		
		} else {
			alert("Список не найден");
		}
			
	};

};

function Gallery(containerUL) {
	var wrapper = document.getElementsByTagName("DIV")[0];
	var holdGallery = document.createElement("DIV");
	var galleryElementsArray = [];
	var count = 0;
	var leftMargin = 0;
	
	Gallery.prototype.create = function() {
		var holdList = document.createElement("DIV");
		
		holdGallery.setAttribute("class", "gallery-holder");
		holdList.setAttribute("class", "gallery");
		holdList.appendChild(containerUL);
		holdGallery.appendChild(holdList);
		wrapper.appendChild(holdGallery);
		
		var galleryElements = containerUL.getElementsByTagName("LI");
		for (var i = 0; i < galleryElements.length; i++) {
			galleryElementsArray.push(galleryElements[i]);
		}
	};
	
	this.prevNext = function() {
		var prevButton = document.createElement("DIV");
		var nextButton = document.createElement("DIV");
		
		holdGallery.style.width = holdGallery.offsetWidth + 120 + "px";
		
		prevButton.setAttribute("class", "prev");
		prevButton.innerHTML = '<a href="#" title="Previous">Previous</a>';
		holdGallery.appendChild(prevButton);
		
		nextButton.setAttribute("class", "next");
		nextButton.innerHTML = '<a href="#" title="Next">Next</a>';
		holdGallery.appendChild(nextButton);
		
		prevButton.addEventListener("click", previous, false);
		nextButton.addEventListener("click", next, false);
		
		function previous() {
			if (count == 0) {
				for (var i = 0; i < galleryElementsArray.length - 1; i++) {
					leftMargin += galleryElementsArray[i].offsetWidth;
					++count;
				}
				containerUL.style.marginLeft = "-" + leftMargin + "px";
			} else {
				leftMargin -= galleryElementsArray[count].offsetWidth;
				containerUL.style.marginLeft = "-" + leftMargin + "px";
				--count;
			}
		};
		
		function next() {
			if (count < galleryElementsArray.length - 1) {
				leftMargin += galleryElementsArray[count].offsetWidth;
				containerUL.style.marginLeft = "-" + leftMargin + "px";
				++count;
			} else {
				leftMargin = 0;
				containerUL.style.marginLeft = leftMargin;
				count = 0;
			}
		};
	};
	
	this.pagination = function() {
		var pagingContainer = document.createElement("DIV");
		var pagingList = document.createElement("UL");
		var pagingLinksArray = [];
		
		pagingContainer.setAttribute("class", "paging");
		pagingContainer.appendChild(pagingList);
		holdGallery.appendChild(pagingContainer);
		
		for (var i = 0; i < galleryElementsArray.length; i++) {
			pagingLinksArray[i] = document.createElement("LI");
			pagingLinksArray[i].innerHTML += '<a href="#" title="' + (i+1) + '">' + (i+1) + '</a>';
			pagingList.appendChild(pagingLinksArray[i]);
			pagingLinksArray[i].addEventListener("click", paging, false);
		}
		
		pagingList.firstElementChild.setAttribute("class", "active");
		
		
		function paging(e) {
			count = (pagingLinksArray.indexOf(e.target.parentNode) > -1) ?
					pagingLinksArray.indexOf(e.target.parentNode) : count;
			leftMargin = 0;
			
			for (var i = 0; i < count; i++) {
				leftMargin += galleryElementsArray[i].offsetWidth;
			}
			if (leftMargin == 0) {
				containerUL.style.marginLeft = leftMargin;
			} else {
				containerUL.style.marginLeft = "-" + leftMargin + "px";
			}
		};
		
		holdGallery.addEventListener("click", changeAttrib, false);
		
		function changeAttrib() {
			for (var i = 0; i < pagingLinksArray.length; i++) {
				pagingLinksArray[i].removeAttribute("class");
			}
			pagingLinksArray[count].setAttribute("class", "active");
		};
	};
	
	this.remove = function() {
		wrapper.removeChild(holdGallery);
	};
};