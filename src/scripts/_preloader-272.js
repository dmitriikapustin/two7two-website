// // import DrawSVGPlugin 
// // gsap.registerPlugin(DrawSVG)
// var counting = setInterval(function () {
//     // var loader = document.getElementById("percentage");
//     // var currval = parseInt(loader.innerHTML);
//     // var Width = 99 - currval;
//     // var loadscreen = document.getElementById("loader-progress");


//     $(".letter-studio").each(function (studio_letter_index) {
//         $(this).addClass("l_s-index-" + studio_letter_index)
//     })


//     // loader.innerHTML = ++currval;
//     // if (currval > 89) {
//     //     loader.innerHTML = 90;
//     //     if (window.jQuery) {
//     //         //console.log('jquery loaded');
//     //         loader.innerHTML = 95;
//     //         if (document.readyState == "interactive") {
//     //             loader.innerHTML = 99;
//     //         }
//     //         if (document.readyState == "complete") {
//     //             //console.log('fully loaded!');
//     //             clearInterval(counting);
//     //             loader.innerHTML = 100;
//     //             jQuery("body").toggleClass('page-loaded');

                
//     //         }
//     //     }
//     // }

//     var logo = document.querySelector("letter-studio");
//     console.log(logo)
//     logo.classList.remove("first");
//     setTimeout(function () {
//         logo.classList.add("loaded");
//     }, 500);


//     // var element = document.getElementById("animpath");
//     // var pathLength = element.getTotalLength();

//     // element.style.strokeDasharray = pathLength;
//     // element.style.strokeDashoffset = pathLength;

//     // function animateRoute(e, arg) {
//     //     // Each step we decrement the dash offset
//     //     arg -= 10;
//     //     if (arg < 0)
//     //         arg = 0; // clamp to minimum 0

//     //     element.style.strokeDashoffset = arg / 90 * pathLength;


//     //     // We need to stop looping when the length gets to 0
//     //     if (arg > 0) {
//     //         // Exit callback function (closing preloader)

//     //     }
//     //     if (element.style.strokeDashoffset === "0px" || element.style.strokeDashoffset === "0") {
//     //         setTimeout(function () {
//     //             $(".preloader").addClass("take_away");
//     //             //$(window).scrollTop(0);
//     //         }, 500)
//     //         setTimeout(function () {
//     //             $(".preloader").addClass("hidden-locked")
//     //         }, 1000)
//     //     }
//     // }

//     // animateRoute(element, Width);

//     // loadscreen.style.transition = "0.10s";
//     // loadscreen.style.width = Width + "%";


// }, 2000);