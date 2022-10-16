$(document).ready(function () {
    var header = document.getElementById("header")
    // HEADER APPEARANCE
    setTimeout(function() {
        header.classList.remove("hidden")
    }, 2300)

    var cases = ('.cases-scroll')
    var footer = ('.footer')

    var controller_header_animation = new ScrollMagic.Controller();

    // HIDE BEFORE CASES

    // variant with toggling class
    var scene = new ScrollMagic.Scene({
        duration: 850,
        triggerElement: cases,
        triggerHook: 1,
        reverse: true
    })
    .offset($(window).height())
    .setClassToggle(".header", "hidden")
    .addTo(controller_header_animation)

    // HIDE BEFORE FOOTER

    var scene = new ScrollMagic.Scene({
        duration: 200,
        triggerElement: footer,
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