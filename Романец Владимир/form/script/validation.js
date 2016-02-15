!function(){

	window.onload = function (){
		getElementsForm();
	};

	function logoutInfo(event){
		event = event || window.event;
		event.preventDefault();
		console.log(obj);
	};
	
	function validation(val, some){
		var content = '';
		if (!some.value){
			content = '';
			obj[some.name] = '';
		}
		else if (new RegExp(val).test(some.value)){
			obj[some.name] = some.value;
			content = 'correct';
		}
		else{
			content = 'incorrect';
			obj[some.name] = '';
		};
		some.parentElement.parentElement.getElementsByTagName('span')[0].className = content;
	};

	function getUserinfo(){
		switch (this.name){
			case 'firstName':
				validation(/^[A-Z][a-z]+$/, this);
				break;
			case 'lastName':
				validation(/^[A-Z][a-z]+$/, this);
				break;
			case 'email':
				validation (/^[a-zA-Z_][a-zA-Z0-9_'.]{1,30}\@([a-zA-Z0-9_]{1,10}\.){1,3}[a-zA-Z0-9_]{2,10}$/, this);
				break;
			case 'phone':
				validation (/^\+[0-9]{2}\([0-9]{3}\)[0-9]{7}$/, this);
				break;
			case 'password':
				validation(/[a-zA-Z0-9_]{6,63}$/, this);
			default:
				break;
		};
	};

	function getElementsForm(){
		var inputs = document.getElementsByTagName('input');
		inputs = Array.prototype.slice.call(inputs);
		inputs = inputs.splice(0, inputs.length - 1);
		addEvents(inputs);
	};

	function addEvents(inputs){
		document.forms['user'].addEventListener('submit', logoutInfo, false);
		for (var i = 0; i < inputs.length; i++){
			inputs[i].addEventListener('focusout', getUserinfo, false);
			inputs[i].addEventListener('blur', getUserinfo, false);
		};
	};

	function ContactInfo(){
		this.firstName = '';
		this.lastName  = '';
		this.email = '';
		this.phone = '';
		this.password = '';
	};

	var obj = new ContactInfo();
}();
