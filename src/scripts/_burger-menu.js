var burgerMenu = document.getElementById('burger-menu');
var og_block = document.getElementById('our-games-block');
var img_block = document.getElementById('images-block');
var og_block = document.getElementById('our-games-block');
var header = document.getElementById('header');
var footer = document.getElementById('footer');
var logo = document.getElementById('logo');
var reprobates_content = document.getElementById('pixel-font-container');
var body = document.getElementById('body');
var overlay = document.getElementById('navigation-mobile');
var root = document.getElementsByTagName( 'html' )[0];
let burger_boolean = false;
let distance_reprobates;
let distance_main;
let og = document.getElementById("our-games-block");
let rep1block = document.getElementById("block-1");
let navigation = document.getElementById("pc_navigation");
let burger = document.getElementById("burger-menu");
let bc_black = document.getElementById("bc-header")




burgerMenu.addEventListener('click',function(){
  // navigation.style.display === "none !important"
  // logo.classList.toggle("scaling")
  bc_black.classList.toggle("open")
  // if ($(window).width() > 800) {
  //   header.classList.toggle("bc-black")
  // }
  // if (!navigation.style.display === "none" && !navigation.style.display === "none !important") {
  //   navigation.style.display === "none !important"
  //   console.log("ADD")
  // }
  // root.classList.toggle("no-scroll");
  // body.classList.toggle("no-scroll");
  this.classList.toggle("close");
  overlay.classList.toggle("open-nav");

  // var tl_options = new TimelineMax()
  // .to($(".navigation-mobile :nth-child(1)"), {y: }, {y: 0, duration: 0.3})
  // .to($(".navigation-mobile :nth-child(2)"), {y: }, {y: 0, duration: 0.3})
  // .to($(".navigation-mobile :nth-child(3)"), {y: }, {y: 0, duration: 0.3})
  // .to($(".navigation-mobile :nth-child(4)"), {y: }, {y: 0, duration: 0.3})
  // .to($(".navigation-mobile :nth-child(5)"), {y: }, {y: 0, duration: 0.3})

  if (burger_boolean === false) {
    navigation.style.display = "none"
      $('body').addClass("fixed-position");


    // window.onscroll = function () { window.scrollTo(0, 0); };
    // $('body').addClass('no-scroll')
    setTimeout(function() {

    if ($(window).width() < 800) {
      footer.classList.toggle("fixed-pos")
      header.classList.toggle("fixed-pos")
      if (og_block) {
        og_block.classList.toggle("fixed-pos")
      }
      if (img_block) {
        img_block.classList.toggle("fixed-pos")
      }
      if(location.href.indexOf('index')!==-1) { // for example its login.php page
        og_block.classList.toggle("fixed-pos")
        img_block.classList.toggle("fixed-pos")
      }
    }
      if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page
        pixel_bc.classList.toggle("hide-bc")
        reprobates_content.classList.toggle("fixed-pos")
      }
    }, 200)
  }
  if (burger_boolean === true) {
    navigation.style.display = "flex"
    $('body').removeClass("fixed-position");
    // $('body').removeClass('no-scroll')
    // window.onscroll = null
    console.log("scroll normal")
    setTimeout(function() {
      if ($(window).width() < 800) {
      if(location.href.indexOf('index')!==-1) { // for example its login.php page
        og_block.classList.toggle("fixed-pos")
        img_block.classList.toggle("fixed-pos")
      }
      if (og_block) {
        og_block.classList.toggle("fixed-pos")
      }
      if (img_block) {
        img_block.classList.toggle("fixed-pos")
      }
      footer.classList.toggle("fixed-pos")
      header.classList.toggle("fixed-pos")
      }

      if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page
        pixel_bc.classList.toggle("hide-bc")
        reprobates_content.classList.toggle("fixed-pos")
      }

    }, 10)
  }

  if (burger_boolean === false) {
    return burger_boolean = true;
  }
  if (burger_boolean === true) {
    return burger_boolean = false;
  }
  // navigation.classList.toggle("nav-none")
  // burger.classList.toggle("burger-block")
  // body.classList.toggle("fixed-pos");
});



// if ($(window).width() > 800) {
//   $(window).scroll(function () {
//     if (rep1block) {
//       distance_reprobates = rep1block.offsetTop - $(window).scrollTop();
//       if (distance_main < 40 || distance_reprobates < 40) {

//         setTimeout(function () {
//           navigation.addClass("nav-none")
//           burger.addClass("burger-block")

//         }, 350)
  
//     } else {

//       setTimeout(function () {
//         navigation.removeClass("nav-none")
//         burger.removeClass("burger-block")

//       }, 350)
   
//     }
//     }
//     if (og) {
//       distance_main = og.offsetTop - $(window).scrollTop();
//       if (distance_main < 40 || distance_reprobates < 40) {

//         setTimeout(function () {
//           navigation.classList.add("nav-none")
//           burger.classList.add("burger-block")
//           console.log("I am here!!!")

//         }, 350)
    
//       } else if (distance_main > 40 && burger_boolean === false|| distance_reprobates > 40 && burger_boolean === false) {

//         setTimeout(function () {
//           navigation.classList.remove("nav-none")
//           burger.classList.remove("burger-block")

//         }, 350)
     
//       }
//     }
       
  
//     // console.log(document.getElementById("our-games-block").offsetTop, distance_main, distance_reprobates)  
//   });
// }


