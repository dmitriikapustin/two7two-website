
// $(document).bind( 'mousewheel', function (e) { 
//     var nt = $(document.body).scrollTop()-(e.deltaY*e.deltaFactor*100); 
//     //e.preventDefault(); 
//     e.stopPropagation(); 
//     $(document.body).stop().animate( { 
//          scrollTop : nt 
//      } , 500 , "linear" );  
// } )

// gsap.registerPlugin(ScrollTrigger);

// const container = $('.container');
// const parent = $('.parent');



// document.addEventListener("wheel", (event) => {
//   const data = {
//     el: container,
//     parentEl: ".parent",
//     deltaY: event.deltaY,
//     power: 5
//   };
//   scrollRule(data);
// });

// // core rule
// const scrollRule = (data) => {
//   const containerEl = gsap.getProperty(data.el);
//   const htmlEl = gsap.getProperty(data.parentEl);
//   const scrollAmout = (amout) => {
//     return `-= ${amout}`;
//   };
//   const scrolling = (y) => {
//     gsap.to(data.el, data.power, {
//       y: scrollAmout(y),
//       ease: "Power3.easeOut"
//     });
//   };
//   const scrollTo = (num) => {
//     gsap.to(data.el, data.power, {
//       y: num,
//       ease: "Power3.easeOut"
//     });
//   };
//   const maxBorderLine = htmlEl("height") - containerEl("height");
//   const bottomDiff = Math.abs(maxBorderLine - containerEl("y"));

//   if (containerEl("y") > data.deltaY) {
//     scrollTo(0);
//   } else if (bottomDiff < data.deltaY) {
//     scrollTo(maxBorderLine);
//   } else if (containerEl("y") >= 1) {
//     scrolling(data.deltaY >= 0 ? data.deltaY : 0);
//   } else {
//     scrolling(data.deltaY);
//   }
// };
// // end
