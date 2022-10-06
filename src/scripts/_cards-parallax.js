$(document).ready(function () {

    // #TASK Remake like circles in one timeline

    // Set ScrollMagic controller and duration
    var controller_cards_anim = new ScrollMagic.Controller();
    var cards_anim_duration = 1200;

    // ScrollMagic animations for card #1
    var scene = new ScrollMagic.Scene({
            triggerElement: '.cards',
            duration: cards_anim_duration,
            reverse: true
        })
        .offset($(window).height() * 0.5 - 600)
        .setTween(".card_1", {
            transform: 'rotate(-15deg) translate3d(10%, 15%, 0)'
        })
        .addTo(controller_cards_anim)

    // ScrollMagic animations for card #2
    var scene = new ScrollMagic.Scene({
            triggerElement: '.cards',
            duration: cards_anim_duration,
            reverse: true
        })
        .offset($(window).height() * 0.5 - 600)
        .setTween(".card_2", {
            transform: 'rotate(-8deg) translate3d(50%, 35%, 0)'
        })
        .addTo(controller_cards_anim)

    // ScrollMagic animations for card #3
    var scene = new ScrollMagic.Scene({
            triggerElement: '.cards',
            duration: cards_anim_duration,
            reverse: true
        })
        .offset($(window).height() * 0.5 - 600)
        .setTween(".card_3", {
            transform: 'rotate(0deg) translate3d(90%, 55%, 0)'
        })
        .addTo(controller_cards_anim)

});