// JavaScript Document
window.onload = init;

function init() {
	var gallery = document.getElementsByClassName("gallery")[0];
	var slideContainer = gallery.getElementsByTagName("UL")[0];
	var galleryElements = gallery.getElementsByTagName("LI");
	var galleryElementsArray = [];
	var count = 0;
	var leftMargin = 0;
	
	for (var i = 0; i < galleryElements.length; i++) {
		galleryElementsArray.push(galleryElements[i]);
	}
	
	control();
	
	function control() {
		var paggingLi = document.getElementsByClassName("paging")[0].getElementsByTagName("LI");
		var paggingLinksArray = [];
		document.getElementsByClassName("prev")[0].getElementsByTagName("a")[0].addEventListener("click", previous, false);
		document.getElementsByClassName("next")[0].getElementsByTagName("a")[0].addEventListener("click", next, false);
		
		for (var i = 0; i < paggingLi.length; i++) {
			paggingLinksArray[i] = paggingLi[i].getElementsByTagName("a")[0];
			paggingLinksArray[i].addEventListener("click", pagging, false);
		}
		
		function previous() {
			if (count == 0) {
				for (var i = 0; i < galleryElements.length - 1; i++) {
					leftMargin += galleryElementsArray[i].offsetWidth;
					++count;
				}
				slideContainer.style.marginLeft = "-" + leftMargin + "px";
			} else {
				leftMargin -= galleryElementsArray[count].offsetWidth;
				slideContainer.style.marginLeft = "-" + leftMargin + "px";
				--count;
			}
			changeAttrib(count);
		};
		
		function next() {
			if (count < galleryElementsArray.length - 1) {
				leftMargin += galleryElementsArray[count].offsetWidth;
				slideContainer.style.marginLeft = "-" + leftMargin + "px";
				++count;
			} else {
				leftMargin = 0;
				slideContainer.style.marginLeft = leftMargin;
				count = 0;
			}
			changeAttrib(count);
		};
		
		function pagging(e) {
			var index = paggingLinksArray.indexOf(e.target);
			leftMargin = 0;
			count = index;
			for (var i = 0; i < count; i++) {
				leftMargin += galleryElementsArray[i].offsetWidth;
			}
			if (leftMargin == 0) {
				slideContainer.style.marginLeft = leftMargin;
			} else {
				slideContainer.style.marginLeft = "-" + leftMargin + "px";
			}
			changeAttrib(count);
		}
		
		function changeAttrib(number) {
			for (var i = 0; i < paggingLi.length; i++) {
				paggingLi[i].removeAttribute("class");
			}
			paggingLi[number].setAttribute("class", "active");
		};
	};
};