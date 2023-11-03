// jQuery 3.x-style ready event and locally scoped $
document.addEventListener('DOMContentLoaded', function () {
  const form= document.querySelector('form');
	  
form.addEventListener('submit' function (event) {
  event.preventDefault();
  alert('Thanks for Signing Up! See you at the Elbertsons soon!');
  });
 });