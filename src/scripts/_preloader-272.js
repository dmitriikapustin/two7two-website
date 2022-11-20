

  if(location.href.indexOf('index')!==-1) {
    $(document).ready(function(){
        var video = document.getElementById("preloader-video")
        console.log(video)
        if (video.paused) {
          video.play();
          console.log("play")
        } else {
          console.log("pause")
          video.pause();
        }
      });
  }

// var tl_two7two = new TimelineMax({repeat: 0})

// tl_two7two.fromTo(".t-m", {y: -100, x: 0, rotate: 0, scale: 0.8}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)",  duration: .6}, 0.3 )
// tl_two7two.fromTo(".t-u", {y: -100, x: 0, rotate: 0, scale: 1}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)",  duration: .5}, 0.6)
// tl_two7two.fromTo(".w", {y: 0, x: -20, rotate: -40, scale: 0 }, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2}, 1.1)
// tl_two7two.fromTo(".o", {y: 0, x: -20, rotate: -40, scale: 0}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1.2}, 1.2)
// tl_two7two.fromTo(".o-c", { scale: 0 },  { scale: 1, duration: .5}, 1.9)
// tl_two7two.fromTo(".seven", {y: 0, x: 50, rotate: 30, scaleX: -1, scale: 0}, {y: 0, x: 50, rotate: 0, scaleX: -1, scale: 1, ease: "power1.out", duration: 0.6}, 1.9)
// tl_two7two.to(".seven", 0.4, {y: 0, x: 0, rotate: 0, scaleX: 1, ease: "power4.out"}, 2.5)

// tl_two7two.fromTo(".t-u-second", {y: -100, x: 0, scale: 1}, {y: 0, x: 0, scale: 1, ease: "elastic.out(1.1, 0.3)", duration: 1.1}, 2.75 )
// tl_two7two.fromTo(".t-m-second", {y: -100, x: 0, scale: 1}, {y: 0, x: 0, scale: 1, ease: "elastic.out(1, 0.3)", duration: 1}, 2.7 )
// tl_two7two.fromTo(".w-second", {y: -100, x: -10, rotate: -40, scale: 0 }, {y: 10 , x: -10, rotate: -30, scale: 1, ease: "power4.out", duration: 0.3}, 1.2)
// tl_two7two.to(".w-second", 0.6, {y: 0 , x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.6)"}, 3.6 )

// tl_two7two.fromTo(".o-second", {y: 0, x: 100}, {y: 0, x: -12.5, duration: .75}, 2.9 )
// tl_two7two.to(".o-second", 0.6, {y: 0, x: 0}, 3.6)
// tl_two7two.fromTo(".o-c-second", { scale: 0 },  { scale: 1, duration: .5}, 3.8)

// SECOND VARIANT

// var tl_two7two = new TimelineMax({repeat: 0})
// tl_two7two.fromTo(".t-m", {y: -100, x: 0, rotate: 0, scale: 0.8}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)",  duration: .6}, 0.3 )
// tl_two7two.fromTo(".t-u", {y: -100, x: 0, rotate: 0, scale: 1}, {y: 0, x: 0, rotate: 0, scale: 1, ease: "elastic.out(1, 0.3)",  duration: .5}, 0.6)


// tl_two7two.fromTo()
/// "STUDIO" animation ///
 
// var studio_letters = $(".studio-letters");
// console.log(studio_letters)

// studio_letters.each(function(index) {
//     var tl_studio = new TimelineMax({repeat: 0});
//     tl_studio.fromTo(this, { y: -15, x: -10, scale: 1, opacity: 0, rotate: -40 }, { y: 0, x: 0, scale: 1, opacity: 1, rotate: 0,  ease: "power3.out", duration: 0.4 }, 4.3 + index * 0.09 );
//     // tl_studio.to(this, 0.2, { opacity: 1, ease: "elastic.out(1.1, 0.6)"}, 4.9, )
// })

/// "two7two" animation ///

// var two7two_letters = $(".two7two-letters")
// console.log(two7two_letters)

function waitForElement(querySelector, timeout=0){
    const startTime = new Date().getTime();
    return new Promise((resolve, reject)=>{
        const timer = setInterval(()=>{
            const now = new Date().getTime();
            if(document.querySelector(querySelector)){
                clearInterval(timer);
                resolve();
            }else if(timeout && now - startTime >= timeout){
                clearInterval(timer);
                reject();
            }
        }, 100);
    });
}


waitForElement("#animation-container", 2800).then(function(){
    console.log("take away")
    setTimeout(() => {
        $(".preloader").addClass("take_away");
    }, 4000)
}).catch(()=>{
    // alert("element did not load in 3 seconds");
});

waitForElement("#animation-container", 3500).then(function(){
    console.log("take away")
    setTimeout(() => {
        $(".preloader").addClass("hidden-locked")
    }, 4500)
}).catch(()=>{
    // alert("element did not load in 3 seconds");
});




