$(document).ready(function () {
    var controller_header_animation = new ScrollMagic.Controller();

    // HIDE BEFORE CASES

    // variant with toggling class
    // var scene = new ScrollMagic.Scene({
    //     duration: 770,
    //     triggerElement: '.cases-scroll',
    //     triggerHook: 1,
    //     reverse: true
    // })
    // .offset($(window).height())
    // .setClassToggle(".header", "hidden")
    // .addTo(controller_header_animation)

    // HIDE BEFORE FOOTER

    var scene = new ScrollMagic.Scene({
        duration: 200,
        triggerElement: '.footer',
        triggerHook: 0.2,
        reverse: true
    })
    .offset($(window).height())
    .setClassToggle(".header", "hidden")
    .addTo(controller_header_animation)

    // var scene = new ScrollMagic.Scene({
    //     triggerElement: cases,
    //     triggerHook: 1,
    //     reverse: true
    // })
    // .offset($(window).height() - 40)
    // .setClassToggle(".header", "hidden")
    // .addTo(controller_header_animation)

    // variant with simple tweening
    // var scene = new ScrollMagic.Scene({
    //     duration: 200,
    //     triggerElement: cases.firstChild,
    //     triggerHook: 1,
    //     reverse: true
    // })
    // .offset($(window).height())
    // .setTween('.header', {y: -100})
    // .addTo(controller_header_animation)
    
    // var scene = new ScrollMagic.Scene({
    //     duration: 200,
    //     triggerElement: cases.lastChild,
    //     triggerHook: 0,
    //     reverse: true
    // })
    // .offset($(window).height())
    // .setTween('.header', {y: 0})
    // .addTo(controller_header_animation)  

})