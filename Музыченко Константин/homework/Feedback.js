интересноерешение по поводу .bg_for_header

.logo как из хедера так ииз футера собрать из текста
реализовать при помощи 1го класса ( .logo{} header .logo{} footer .logo{})
навигацию полностью переделать (кликабельная область ТОЛЬКО текс ссылки)

я рекомендую тебе переделать исходя из логики:
#wrapper
	header
		.logo
		nav
	main - элементарно натягиваеться сверху на header отрицательным margin: -15px auto 20px
		aside.sidebar
			section
			hr
			section
			section
				.banner
				.banner
		section
			article.post
			article.post
			article.post
			.pagination
	footer
		.logo
		.copy

Контент оформлен очень даже не плохо только в каждой секции 1н заголовок а второй это тег strong
так же добавь на кликабельные области cursor: pointer на hover

будь добр учти мои замечания