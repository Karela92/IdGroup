$(function(){
	// Добавление класса при клике для Менюшки
	$('.content__menu li a').click(function() {
		$('.content__menu li a').removeClass('active');
		$(this).addClass('active');
	})
//

	// Менюшка - гамбургер
	$('#my-menu').mmenu({
		extensions: [ 'theme-black', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: 'Pay Menu'
		},
		offCanvas: {
			position: 'right'
		}
		
	});

	var ap = $('#my-menu').data('mmenu');
	ap.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	}).bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});
	//

//При нажатии в инпуте с номером кода все символы, кроме цифр не будут работать 
	$('.container__pay__block__filling__inputs__code input, .container__pay__block__cvv__input input').on('keydown', function(e){
	  if(e.key.length == 1 && e.key.match(/[^0-9'".]/)){
	    return false;
	  };
	})

	$('.container__pay__block__filling__inputs__card input').bind("input", function() {
		$('.container__pay__block__filling__inputs__card input').val(tgtrimm($(this).val()));
	});
	function tgtrimm(str){
		var ars = str.replace(/[^ a-zA-Z]/gi,'').replace(/\s + /gi,' ');
		return ars;
	}
	//

	$('form').submit(function(){
	  alert('Платеж прошел успешно');
	});

/*
function errorEnt(){
	var submitButt = document.querySelector('.container__submit').onclick 
}
*/

});

function validateNumber(input) {
	   if (input.value.length < 4) {
	   	input.style.borderColor = 'red';
		  input.setCustomValidity("Введите минимум 4 символа");
	   }
	   else {
	   	input.style.borderColor = '';
		  input.setCustomValidity("");
	   }
}

function validateCVV(input) {
	   if (input.value.length < 3) {
	   	input.style.borderColor = 'red';
		  input.setCustomValidity("Введите минимум 3 символа");
	   }
	   else {
	   	input.style.borderColor = '';
		  input.setCustomValidity("");
	   }
}