const instagram = document.getElementById("instagram")
const twitter = document.getElementById("twitter")  
const facebook = document.getElementById("facebook")  
const behance = document.getElementById("behance")
const vk_cont = document.getElementById("right-empty")  
const youtube_cont = document.getElementById("left-empty")  

function backAnimation(e, svg, t) {
    $(e).addClass('animated')
    setTimeout( function() {
        t.add( TweenLite.to(svg, 0.1, {x: 0, y: 0, ease: "none"}) ) 
        setTimeout( function() {
            t.add( TweenLite.to(svg, 0.1,{scale: 0.69, ease: "none"}) )
            setTimeout( function() {
                t.add( TweenLite.to(svg, 0.1,{scale: 1, ease: "none"}) )
                setTimeout( function() {
                    $(e).removeClass('animated')}, 300 )}, 200)}, 200)}, 200)
}

function SetAnimation(id, x_pos, y_pos) {
    var element = document.getElementById(id)
    var timeline = new TimelineMax()
    var anim_1 = 0.1
    var anim_2 = 0.1
    var element_svg = $("#" + id + " svg")
    element.addEventListener("mouseenter", () => {
        if ($(element).hasClass('playing') === false && $(element).hasClass('animated') === false) {
            $(element).addClass('playing')
            timeline.add( TweenLite.to(element_svg, anim_1, {scale: 0.69, ease: "none"}) ) 
            setTimeout( function() {
                timeline.add( TweenLite.to(element_svg, anim_2, {scale: 1.13, x: x_pos, y: y_pos, ease: "none"}) ) 
                setTimeout( function() {
                    $(element).removeClass('playing')
                }, anim_2 * 10000 )
            }, anim_1 * 200)
        }
    });
    element.addEventListener("mouseleave", () => {
        if ($(element).hasClass('playing') === false) {
            backAnimation(element, element_svg, timeline)
        } else { setTimeout( function() {
                if ($(element).hasClass('playing') === false) {
                    backAnimation(element, element_svg, timeline)
                } else { setTimeout( function() {
                        if ($(element).hasClass('playing') === false) {
                            backAnimation(element, element_svg, timeline)
                        }}, 500)
                }}, 500)
        }
    });
}

SetAnimation("instagram", 0, -5)
SetAnimation("twitter", 5, 3)
SetAnimation("facebook", -5, 3)
SetAnimation("behance", 0, 5)
SetAnimation("right-empty", 5, -3)
SetAnimation("left-empty", -5, -3)



