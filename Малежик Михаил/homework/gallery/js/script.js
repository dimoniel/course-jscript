
!(function () {				
	
	window.onload = function () {	
		
		var imageArray = [	
			"image/1.jpg",		
			"image/2.jpeg",		
			"image/3.jpg",
			"image/4.jpg",
			"image/5.jpg",
			"image/6.jpg"		
		];

		var next = document.getElementById('next');
		var back = document.getElementById('back');

			next.addEventListener('click', nextImg , false);
			back.addEventListener('click', prevImg , false);
		var num = 0;
		var elem = document.createElement('img');
			elem.src = imageArray[num];
		document.getElementById('wrapper').appendChild(elem);

		var imageCount = imageArray.length;
	
							
		function nextImg () {
			++num;
			if(num > imageCount-1) num = 0;
			elem.src = imageArray[num];
		}

		function prevImg () {
			--num;
			if(num < 0) num = imageCount-1;
			elem.src = imageArray[num];
		}
	};
	
})();
