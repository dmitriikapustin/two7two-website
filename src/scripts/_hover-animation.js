
  
const instagram = document.getElementById("instagram")
const twitter = document.getElementById("twitter")  
const facebook = document.getElementById("facebook")  
const behance = document.getElementById("behance")
const vk_cont = document.getElementById("right-empty")  
const youtube_cont = document.getElementById("left-empty")  

///// ТВОЯ ФУНКЦИЯ

// function footer_animating (el, x, y) {

//     el.mouseenter(function(){
//         $(this).css({ transform: 'translate(0px, 0px) scale(0.75)'}, 100);
//         setTimeout( function() {
//             el.css({ transform: 'translate(' + x + 'px,' + y + 'px) scale(1.15)'}, 200)
//         }, 100);
//     });
//     el.mouseleave(function() {
//         $(this).css({ transform: 'translate(0px, 0px) scale(1)' }, 100);
//     });

// }


// footer_animating($('.no-mobile .top .instagram'), 0, -4)
// footer_animating($('.no-mobile .top .left-empty'), -5, -3)
// footer_animating($('.no-mobile .top .right-empty'), 5, -3)
// footer_animating($('.no-mobile .bottom .facebook'), -5, 3)
// footer_animating($('.no-mobile .bottom .behance'), 0, 4)
// footer_animating($('.no-mobile .bottom .twitter'), 5, 3)


//////// МОИ ВАРИАНТЫ НИЖЕ



// let social_icons = document.querySelector('.container-for-social')
// social_icons.addEventListener('mouseover', (e) => {
//   let target = e.target.closest('a')
//   if (!target) {return}
//   gsap.to('.cssVar', {duration: 1.35 ,'--color': 'salmon', '--size': '100%'})
// })
  
// var tl_hover = new TimelineMax()
// tl_hover.to(instagram, {scale: 0.75, duration: 0.1, paused: true, ease: "linear"})
// .to(instagram, {scale: 1.15, duration: 0.1, paused: true, ease: "linear"})
// let hover_first_step_instagram = gsap.to(instagram, {scale: 0.75, duration: 0.1, paused: true, ease: "linear"});
// let hover_third_step_instagram = gsap.to(instagram, {scale: 1, duration: 0.1, paused: true, ease: "linear"})


//// ПРОБОВАЛ ЮЗАТЬ ПОИНТЕР ЕВЕНТС НА ВРЕМЯ АНИМАЦИИ ХОВЕРА, НО ОН КАК-ТО НЕ ТАК РАБОТАЕТ, МОЖЕШЬ ПОШАМАНИТЬ



instagram.addEventListener("mouseenter", () => {

    var tl_hover = new TimelineMax()

    tl_hover.to(instagram, 0.15, {scale: 0.5, ease: "none"})
    tl_hover.to(instagram, 0.15, {scale: 1.15, y: -4, ease: "none"}, 0.15)
    // tl_hover.set(instagram, {pointerEvents: "none"})
    // tl_hover.timeScale( 3 ); 
    // hover_first_step_instagram.play()
    // setTimeout(function() {
    //     hover_second_step_instagram.play()
    // }, 1000)
    // hover_third_step_instagram.reverse(0)
});
instagram.addEventListener("mouseleave", () => {
    var tl_hover_reverse = new TimelineMax()
    // tl_hover_reverse.to(instagram, 0.15, {scale: 0.5, y: 0, ease: "none"})
    tl_hover_reverse.to(instagram, 0.1, {scale: 1, y: 0, ease: "none"})
    // hover_third_step_instagram.play()
    // hover_first_step_instagram.reverse(0)
    // hover_second_step_instagram.reverse(0)
});


facebook.addEventListener("mouseenter", () => {
    var tl_hover = new TimelineMax()
    tl_hover.to(facebook, 0.15, {scale: 0.5, ease: "none"})
    tl_hover.to(facebook, 0.15, {scale: 1.15, y: -4, ease: "none"}, 0.15)
});
facebook.addEventListener("mouseleave", () => {
    var tl_hover_reverse = new TimelineMax()
    tl_hover_reverse.to(facebook, 0.1, {scale: 1, y: 0, ease: "none"})
});


behance.addEventListener("mouseenter", () => {
    var tl_hover = new TimelineMax()
    tl_hover.to(behance, 0.15, {scale: 0.5, ease: "none"})
    tl_hover.to(behance, 0.15, {scale: 1.15, y: -4, ease: "none"}, 0.15)
});
behance.addEventListener("mouseleave", () => {
    var tl_hover_reverse = new TimelineMax()
    tl_hover_reverse.to(behance, 0.1, {scale: 1, y: 0, ease: "none"})
});


vk_cont.addEventListener("mouseenter", () => {
    var tl_hover = new TimelineMax()
    tl_hover.to(vk_cont, 0.15, {scale: 0.5, ease: "none"})
    tl_hover.to(vk_cont, 0.15, {scale: 1.15, y: -4, ease: "none"}, 0.15)
});
vk_cont.addEventListener("mouseleave", () => {
    var tl_hover_reverse = new TimelineMax()
    tl_hover_reverse.to(vk_cont, 0.1, {scale: 1, y: 0, ease: "none"})
});


youtube_cont.addEventListener("mouseenter", () => {
    var tl_hover = new TimelineMax()
    tl_hover.to(youtube_cont, 0.15, {scale: 0.5, ease: "none"})
    tl_hover.to(youtube_cont, 0.15, {scale: 1.15, y: -4, ease: "none"}, 0.15)
});
youtube_cont.addEventListener("mouseleave", () => {
    var tl_hover_reverse = new TimelineMax()
    tl_hover_reverse.to(youtube_cont, 0.1, {scale: 1, y: 0, ease: "none"})
});


twitter.addEventListener("mouseenter", () => {
    var tl_hover = new TimelineMax()
    tl_hover.to(twitter, 0.15, {scale: 0.5, ease: "none"})
    tl_hover.to(twitter, 0.15, {scale: 1.15, y: -4, ease: "none"}, 0.15)
});
twitter.addEventListener("mouseleave", () => {
    var tl_hover_reverse = new TimelineMax()
    tl_hover_reverse.to(twitter, 0.1, {scale: 1, y: 0, ease: "none"})
});




