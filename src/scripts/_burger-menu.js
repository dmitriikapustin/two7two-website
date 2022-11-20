var burgerMenu = document.getElementById('burger-menu');
let burgerMenuMob = document.getElementById("burger-menu-mob");
let burgerMenuMobMain = document.getElementById("burger-menu-main-mob");
var og_block = document.getElementById('our-games-block');
var img_block = document.getElementById('images-block');
var og_block = document.getElementById('our-games-block');
var header = document.getElementById('header');
var headerMain = document.getElementById('header_main');
var footer = document.getElementById('footer');
var logo = document.getElementById('logo');
var logo_cont = document.getElementById('logo-container');
var reprobates_content = document.getElementById('pixel-font-container');
var body = document.getElementById('body');
var overlay = document.getElementById('navigation-mobile');
var overlay_main = document.getElementById('navigation-mobile_main');
var root = document.getElementsByTagName( 'html' )[0];
let burger_boolean = false;
let distance_reprobates;
let distance_main;
let og = document.getElementById("our-games-block");
let rep1block = document.getElementById("block-1");
let navigation = document.getElementById("pc_navigation");
let bc_black = document.getElementById("bc-header");
let burgerMainMob = document.getElementById("burger-menu-main");



// if(location.href.indexOf('reprobates')!==-1 && $(window).width() < 800) { // for example its login.php page
//   logo_cont.style.display = "none"
// }



$(document).ready(function () {

  if (burgerMenu) {
    burgerMenu.classList.add("display-none")
  }
  if (burgerMenuMob) {
    burgerMenuMob.classList.add("display-none")
  }
  if(location.href.indexOf('reprobates')!==-1) {
    burgerMenuMob.classList.remove("display-none")
    burgerMenu.classList.remove("display-none")
    // burgerMenuMobMain.classList.add("display-none")
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
      logo.classList.toggle("logo-active")
      logo.classList.toggle("todefault") // ???????????????????
      // var tl_options = new TimelineMax()
      // .to($(".navigation-mobile :nth-child(1)"), {y: }, {y: 0, duration: 0.3})
      // .to($(".navigation-mobile :nth-child(2)"), {y: }, {y: 0, duration: 0.3})
      // .to($(".navigation-mobile :nth-child(3)"), {y: }, {y: 0, duration: 0.3})
      // .to($(".navigation-mobile :nth-child(4)"), {y: }, {y: 0, duration: 0.3})
      // .to($(".navigation-mobile :nth-child(5)"), {y: }, {y: 0, duration: 0.3})
    
      if (burger_boolean === false) {
        navigation.style.display = "none"
          // $('body').addClass("fixed-position");
          // $(".burger-menu").css({"opacity":"1"})
    
        // window.onscroll = function () { window.scrollTo(0, 0); };
        $('body').addClass('fixed-position')
        // setTimeout(function() {
    
        // if ($(window).width() < 800) {
        //   footer.classList.toggle("fixed-pos")
        //   header.classList.toggle("fixed-pos")
        //   if (og_block) {
        //     og_block.classList.toggle("fixed-pos")
        //   }
        //   if (img_block) {
        //     img_block.classList.toggle("fixed-pos")
        //   }
        //   if(location.href.indexOf('index')!==-1) { // for example its login.php page
        //     og_block.classList.toggle("fixed-pos")
        //     img_block.classList.toggle("fixed-pos")
        //   }
        // }
        // }, 200)
          if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page
            pixel_bc.classList.add("hide-bc")
          }
      }
      if (burger_boolean === true) {
        setTimeout(function () {
          navigation.style.display = "flex"
        }, 200)
        $('body').removeClass("fixed-position");
        // $('body').removeClass('no-scroll')
        // window.onscroll = null
        console.log("scroll normal")
        // setTimeout(function() {
        //   if ($(window).width() < 800) {
        //   if(location.href.indexOf('index')!==-1) { // for example its login.php page
        //     og_block.classList.toggle("fixed-pos")
        //     img_block.classList.toggle("fixed-pos")
        //   }
        //   if (og_block) {
        //     og_block.classList.toggle("fixed-pos")
        //   }
        //   if (img_block) {
        //     img_block.classList.toggle("fixed-pos")
        //   }
        //   footer.classList.toggle("fixed-pos")
        //   header.classList.toggle("fixed-pos")
        //   }
    
          if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page
            pixel_bc.classList.remove("hide-bc")
          }
    
        // }, 10)
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
    
    
    
    burgerMenuMob.addEventListener('click',function(){
      
      bc_black.classList.toggle("open")
      this.classList.toggle("close");
      overlay.classList.toggle("open-nav");
      logo.classList.toggle("logo-active")
      logo.classList.toggle("todefault") 
    
      if (burger_boolean === false) {
        navigation.style.display = "none"
  
        $('body').addClass('fixed-position')
  
          if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page
            pixel_bc.classList.add("hide-bc")
          }
      }
      if (burger_boolean === true) {
        navigation.style.display = "flex"
        $('body').removeClass("fixed-position");
        // $('body').removeClass('no-scroll')
        // window.onscroll = null
        console.log("scroll normal")
        if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page
          pixel_bc.classList.remove("hide-bc")
        }
      }
    
      if (burger_boolean === false) {
        return burger_boolean = true;
      }
      if (burger_boolean === true) {
        return burger_boolean = false;
      }

    });
  }
  
  

    // burgerMenuMob.classList.add("display-none")
    // burgerMenu.classList.add("display-none")
    // burgerMenuMobMain.classList.remove("display-none")
  if (burgerMainMob) {
      burgerMainMob.addEventListener('click',function(){
        console.log(burger_boolean)
        bc_black.classList.toggle("open")
        this.classList.toggle("close");

        // logo.classList.toggle("logo-active")
        // logo.classList.toggle("todefault") 
        if (burger_boolean === true) {
          headerMain.classList.toggle("no-scroll")
          setTimeout(function () {
            overlay_main.classList.toggle("open-nav");
            burger_boolean = false;
            return burger_boolean;
          }, 180) 
        } else {
          setTimeout(function() {
            headerMain.classList.toggle("no-scroll")
        }, 180)
          overlay_main.classList.toggle("open-nav");
          burger_boolean = true;
          return burger_boolean;
        }
        // headerMain.classList.toggle("fixed-position")
        
      
        if (burger_boolean === false) {
          navigation.style.display = "none"
          $('body').css({"position":"fixed"})
          $('body').addClass('fixed-position')
    
        }
        if (burger_boolean === true) {
          // navigation.style.display = "flex"
          $('body').removeClass("fixed-position");
          // $('body').removeClass('no-scroll')
          // window.onscroll = null
          console.log("scroll normal")
        }
      
        // navigation.classList.toggle("nav-none")
        // burger.classList.toggle("burger-block")
        // body.classList.toggle("fixed-pos");
      });
    }

})
