$(function(){
	var inputField = "<p><input type = \'text\' value = \'\'></p>";
	var tempObj = {};
	var contentInput;

	$('[name = "todoList"]').submit(saveList);
	$('#clear').click(clearLocalStorage);
	// $(':text').focusin(checkFieldValue).focusout(editList).keyup(writeToOl);

	loadForm();

	function loadForm(){
		var j = 0;
		$('hr').after(inputField);
		$(':text').focusin(checkFieldValue).focusout(editList).keyup(writeToOl);
		while (localStorage.getItem('task_' + j)){
			contentInput = true;
			$(':text')[j].value = 	tempObj['task_' + j] =  localStorage.getItem('task_' + j);
			addField($(':text')[j]);
			createOlTeg(j);
			writeToOl(j, tempObj['task_' + j], j);
			++j;
		}
	};

	function createOlTeg(number){
		if (contentInput && $('#todolist').children().length == number){
			$('#todolist').append('<li></li>');

		}
	}

	function writeToOl(e, value, number){
		var content = this.value || value;
		var fieldNumber = (numberOfField(this) + 1) || (number + 1);
		if (content)
			$('#todolist li')[fieldNumber - 1].innerHTML = content;
		else
			$('#todolist li')[fieldNumber - 1].innerHTML = '';

	}

	function clearLocalStorage(){
		var j = 0;
		while (localStorage.getItem('task_' + j)){
			localStorage.removeItem('task_' + j);
			++j;
		}
		$(':text').remove();
		$('#todolist li').remove();
		loadForm();
		alert('Local Storage очищено!')
	}

	function checkFieldValue(event){
		contentInput = !this.value;
		createOlTeg(numberOfField(this));
	}

	function numberOfField(element){
		var inputs = $(':text');
		for (var i = 0; i < inputs.length; i++){
			if (inputs[i] == element) return i;
		}
	}

	function addField(curentField){
		if (contentInput){
			$(curentField).parent().after(inputField);
			$(':text').last().focusin(checkFieldValue).focusout(editList).keyup(writeToOl);
		}
	}

	function removeField(element){
		$('#todolist li')[numberOfField(element[0])].remove();
		if (!contentInput){
			var inputs = $(':text');
			var j = 0;
			element.parent().remove();
			tempObj = {};
			for (var i = 0; i < inputs.length; i++){
				if (inputs[i].value){
					tempObj['task_' + j] = inputs[i].value;
					j++;
				}
			}
		}
	}

	function editList(){
		if (this.value){
			var number = numberOfField(this);
			var punkt = 'task_' + number;
			tempObj[punkt] = this.value;
			addField(this);
		}
		else removeField($(this));
	}

	function saveList(){
		for (var key in tempObj){
			localStorage.setItem(key, tempObj[key]);
		}
	}
})