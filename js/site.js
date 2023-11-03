// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  let form= document.querySelector("form");
  form.addEventListener("submit", () => {
	  form.classList.add("signed-up");
});