// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

var form = document.getElementById('form');
	  
function alertFunction() {
	if (form.checkValidity()) {
		alert("Thanks for Signing Up! See you at the Elbertsons soon!");
	}
}