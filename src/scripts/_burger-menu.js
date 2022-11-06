var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('navigation');
burgerMenu.addEventListener('click',function(){
  this.classList.toggle("close");
  overlay.classList.toggle("hidden");
});