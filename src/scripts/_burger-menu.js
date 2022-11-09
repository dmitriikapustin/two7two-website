var burgerMenu = document.getElementById('burger-menu');
var og_block = document.getElementById('our-games-block');
var img_block = document.getElementById('images-block');
var og_block = document.getElementById('our-games-block');
var header = document.getElementById('header');
var footer = document.getElementById('footer');
var overlay = document.getElementById('navigation-mobile');
let burger_boolean = false;


burgerMenu.addEventListener('click',function(){

  this.classList.toggle("close");
  overlay.classList.toggle("open-nav");
  if (burger_boolean === false) {
    setTimeout(function() {
      og_block.classList.toggle("fixed-pos")
      img_block.classList.toggle("fixed-pos")
      footer.classList.toggle("fixed-pos")
      header.classList.toggle("fixed-pos")

    }, 200)
  }
  if (burger_boolean === true) {
    setTimeout(function() {
      og_block.classList.toggle("fixed-pos")
      img_block.classList.toggle("fixed-pos")
      footer.classList.toggle("fixed-pos")
      header.classList.toggle("fixed-pos")
    }, 10)
  }

  if (burger_boolean === false) {
    burger_boolean = true;
  }
  if (burger_boolean === true) {
    burger_boolean = false;
  }
  // body.classList.toggle("fixed-pos");
});