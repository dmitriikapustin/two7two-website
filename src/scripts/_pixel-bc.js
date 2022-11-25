const pixel_bc = document.getElementById("pixel-bc")


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


var pixelArr = $(".pixel");
var pixelArrBottom = $(".pixel-bottom");
var pixelMobArr = $(".pixel-mob");
var pixelArr2000 = $(".pixel-2000")
var pixelNoRandom = $(".pixel-no-random")
// console.log(pixelArr)



var pixel_count = pixelArr.length;
var pixel_2000_count = pixelArr2000.length;
var pixel_bottom_count = pixelArrBottom.length;
var pixel_mob_count = pixelMobArr.length;
var pixel_no_random_count = pixelNoRandom.length;

$(document).ready(function () { 
    console.log(pixel_2000_count)
})


$(".pixel-2000").each(function(index) {
    // 1 GROUP

    if (index >= 0 && index < 11) {
        var randomLeft = getRandomArbitrary(0, 0.12) * 100;
        var randomTop = getRandomArbitrary(0, 0.17) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 11 && index < 21) {
        var randomLeft = getRandomArbitrary(0.08, 0.2) * 100;
        var randomTop = getRandomArbitrary(0, 0.17) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 21 && index < 32) {
        var randomLeft = getRandomArbitrary(0.88, 1) * 100;
        var randomTop = getRandomArbitrary(0, 0.17) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 32 && index < 42) {
        var randomLeft = getRandomArbitrary(0.8, 0.92) * 100;
        var randomTop = getRandomArbitrary(0, 0.17) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    // 2 GROUP
    if (index >= 42 && index < 53) {
        var randomLeft = getRandomArbitrary(0, 0.11) * 100;
        var randomTop = getRandomArbitrary(0.18, 0.35) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 53 && index < 63) {
        var randomLeft = getRandomArbitrary(0.11, 0.22) * 100;
        var randomTop = getRandomArbitrary(0.18, 0.35) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 63 && index < 74) {
        var randomLeft = getRandomArbitrary(0.89, 1) * 100;
        var randomTop = getRandomArbitrary(0.18, 0.35) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 74 && index < 84) {
        var randomLeft = getRandomArbitrary(0.78, 0.89) * 100;
        var randomTop = getRandomArbitrary(0.18, 0.35) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    // 3 GROUP
    if (index >= 84 && index < 98) {
        var randomLeft = getRandomArbitrary(0, 0.22) * 100;
        var randomTop = getRandomArbitrary(0.36, 0.56) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 98 && index < 112) {
        var randomLeft = getRandomArbitrary(0.78, 1) * 100;
        var randomTop = getRandomArbitrary(0.36, 0.56) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    // 4 GROUP
    if (index >= 112 && index < 126) {
        var randomLeft = getRandomArbitrary(0, 0.22) * 100;
        var randomTop = getRandomArbitrary(0.57, 0.82) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 126 && index < 140) {
        var randomLeft = getRandomArbitrary(0.78, 1) * 100;
        var randomTop = getRandomArbitrary(0.57, 0.82) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    // 5 GROUP
    if (index >= 140 && index < 154) {
        var randomLeft = getRandomArbitrary(0.78, 1) * 100;
        var randomTop = getRandomArbitrary(0.83, 1.3) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 154 && index < 168) {
        var randomLeft = getRandomArbitrary(0, 0.22) * 100;
        var randomTop = getRandomArbitrary(0.83, 1.3) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    // 6 GROUP
    if (index >= 168 && index < 182) {
        var randomLeft = getRandomArbitrary(0.78, 1) * 100;
        var randomTop = getRandomArbitrary(1.35, 2.1) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 182 && index < 196) {
        var randomLeft = getRandomArbitrary(0, 0.22) * 100;
        var randomTop = getRandomArbitrary(1.35, 2.1) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    // 7 GROUP
    if (index >= 196 && index < 210) {
        var randomLeft = getRandomArbitrary(0, 0.22) * 100;
        var randomTop = getRandomArbitrary(2.15, 3.2) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 210 && index < 224) {
        var randomLeft = getRandomArbitrary(0.78, 1) * 100;
        var randomTop = getRandomArbitrary(2.15, 3.2) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
})

$(".pixel").each(function(index) {
    if (index >= 0 && index < 7) {
        var randomLeft = getRandomArbitrary(0, 0.12) * 100;
        var randomTop = getRandomArbitrary(0, 0.15) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 7 && index < 14) {
        var randomLeft = getRandomArbitrary(0, 0.1) * 100;
        var randomTop = getRandomArbitrary(0.16, 0.31) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 14 && index < 21) {
        var randomLeft = getRandomArbitrary(0.01, 0.17) * 100;
        var randomTop = getRandomArbitrary(0.33, 0.53) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 21 && index < 28) {
        var randomLeft = getRandomArbitrary(0.01, 0.19) * 100;
        var randomTop = getRandomArbitrary(0.54, 0.96) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 28 && index < 35) {
        var randomLeft = getRandomArbitrary(0.88, 1) * 100;
        var randomTop = getRandomArbitrary(0, 0.15) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 35 && index < 42) {
        var randomLeft = getRandomArbitrary(0.9, 1) * 100;
        var randomTop = getRandomArbitrary(0.16, 0.31) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 42 && index < 49) {
        var randomLeft = getRandomArbitrary(0.83, 0.99) * 100;
        var randomTop = getRandomArbitrary(0.33, 0.53) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 49 && index < 56) {
        var randomLeft = getRandomArbitrary(0.81, 0.99) * 100;
        var randomTop = getRandomArbitrary(0.54, 0.96) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }



    if (index >= 56 && index < 61) {
        var randomLeft = getRandomArbitrary(0.15, 0.48) * 100;
        var randomTop = getRandomArbitrary(0, 0.08) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 61 && index < 66) {
        var randomLeft = getRandomArbitrary(0.52, 0.85) * 100;
        var randomTop = getRandomArbitrary(0, 0.08) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 66 && index < 70) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(0.4, 1.2) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 70 && index < 74) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(0.4, 1.2) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 74 && index < 78) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(1.25, 2.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 78 && index < 82) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(1.25, 2.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 82 && index < 86) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(2.3, 3.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 86 && index < 90) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(2.3, 3.3) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 90 && index < 93) {
        var randomLeft = getRandomArbitrary(0, 0.07) * 100;
        var randomTop = getRandomArbitrary(3.5, 4.8) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 93 && index < 96) {
        var randomLeft = getRandomArbitrary(0.93, 1) * 100;
        var randomTop = getRandomArbitrary(3.5, 4.8) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
 
})

$(".pixel-bottom").each(function(index) {

    if (index >= 0 && index < 3) {
        var randomLeft = getRandomArbitrary(0, 0.15) * 100;
        var randomTop = getRandomArbitrary(0.25, 0.5) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 3 && index < 6) {
        var randomLeft = getRandomArbitrary(0.85, 1) * 100;
        var randomTop = getRandomArbitrary(0.25, 0.5) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 10 && index < 13) {
        var randomLeft = getRandomArbitrary(0, 0.25) * 100;
        var randomTop = getRandomArbitrary(0.25, 0.7) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 13 && index < 16) {
        var randomLeft = getRandomArbitrary(0.75, 1) * 100;
        var randomTop = getRandomArbitrary(0.25, 0.7) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 6 && index < 8) {
        var randomLeft = getRandomArbitrary(0, 0.3) * 100;
        var randomTop = getRandomArbitrary(0.7, 1.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 8 && index < 10) {
        var randomLeft = getRandomArbitrary(0.7, 1) * 100;
        var randomTop = getRandomArbitrary(0.6, 1.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
})

$(".pixel-mob").each(function(index) {
    if (index >= 0 && index < 2) {
        var randomLeft = getRandomArbitrary(0, 0.06) * 100;
        var randomTop = getRandomArbitrary(0, 0.08) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    } 
    if (index >= 2 && index < 4) {
        var randomLeft = getRandomArbitrary(0, 0.08) * 100;
        var randomTop = getRandomArbitrary(0.11, 0.19) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 4 && index < 5) {
        var randomLeft = getRandomArbitrary(0, 0.08) * 100;
        var randomTop = getRandomArbitrary(0.2, 0.3) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 5 && index < 6) {
        var randomLeft = getRandomArbitrary(0, 0.08) * 100;
        var randomTop = getRandomArbitrary(0.31, 0.42) * 100;
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }


    if (index >= 6 && index < 8) {
        var randomLeft = getRandomArbitrary(0.3, 0.48) * 100;
        var randomTop = getRandomArbitrary(0, 0.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 21 && index < 22) {
        var randomLeft = getRandomArbitrary(0.3, 0.48) * 100;
        var randomTop = getRandomArbitrary(0, 0.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 22 && index < 25) {
        var randomLeft = getRandomArbitrary(0.52, 0.7) * 100;
        var randomTop = getRandomArbitrary(0, 0.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }

    if (index >= 8 && index < 10) {
        var randomLeft = getRandomArbitrary(0.92, 1) * 100;
        var randomTop = getRandomArbitrary(0.11, 0.19) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    // if (index >= 10 && index < 11) {
    //     var randomLeft = getRandomArbitrary(0.85, 0.97) * 100;
    //     var randomTop = getRandomArbitrary(0.2, 0.3) * 100; 
    //     $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    // }
    // if (index >= 11 && index < 12) {
    //     var randomLeft = getRandomArbitrary(0.83, 0.96) * 100;
    //     var randomTop = getRandomArbitrary(0.38, 0.43) * 100; 
    //     $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    // }


    if (index >= 10 && index < 13) {
        var randomLeft = getRandomArbitrary(0, 0.06) * 100;
        var randomTop = getRandomArbitrary(0.7, 1.4) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 13 && index < 16) {
        var randomLeft = getRandomArbitrary(0.94, 1) * 100;
        var randomTop = getRandomArbitrary(0.7, 1.4) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 16 && index < 19) {
        var randomLeft = getRandomArbitrary(0, 0.06) * 100;
        var randomTop = getRandomArbitrary(1.5, 2.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
    if (index >= 19 && index < 21) {
        var randomLeft = getRandomArbitrary(0.94, 1) * 100;
        var randomTop = getRandomArbitrary(1.5, 2.1) * 100; 
        $(this).css({"position":"absolute", "left":randomLeft + "vw", "top": randomTop + "vh"})
    }
})

$(".pixel-no-random").each(function (pixel_scroll_no_random_index) {
    $(this).addClass("pixel-scroll-no-random" + pixel_scroll_no_random_index)

    $(this).parent().prepend('<div class="trigger-for-pixel-scroll-no-random' + pixel_scroll_no_random_index + ' trigger"></div>');

})

$(".pixel").each(function (pixel_scroll_index) {
    $(this).addClass("pixel-scroll-" + pixel_scroll_index)

    $(this).parent().prepend('<div class="trigger-for-pixel-scroll-' + pixel_scroll_index + ' trigger"></div>');

})

$(".pixel-bottom").each(function (pixel_scroll_bottom_index) {
    $(this).addClass("pixel-scroll-bottom-" + pixel_scroll_bottom_index)

    $(this).parent().prepend('<div class="trigger-for-pixel-scroll-bottom-' + pixel_scroll_bottom_index + ' trigger"></div>');

})

$(".pixel-mob").each(function (pixel_mob_scroll_index) {
    $(this).addClass("pixel-mob-scroll-" + pixel_mob_scroll_index)

    $(this).parent().prepend('<div class="trigger-for-pixel-mob-scroll-' + pixel_mob_scroll_index + ' trigger"></div>');

})

$(".pixel-2000").each(function (pixel_2000_scroll_index) {
    $(this).addClass("pixel-2000-scroll-" + pixel_2000_scroll_index)

    $(this).parent().prepend('<div class="trigger-for-pixel-2000-scroll-' + pixel_2000_scroll_index + ' trigger"></div>');

})

var controller_all_pixels_animation = new ScrollMagic.Controller();

for (pixel_scroll_index = 0; pixel_scroll_index < pixel_count; pixel_scroll_index++) {

    $(".pixel-scroll-" + pixel_scroll_index).each(function () {
        // $(this).addClass('ov-hidden')
        var randParallax = Math.random()
        var tl_scroll_pixel = new TimelineMax();
        tl_scroll_pixel.fromTo(this, { y: 0 }, { y: -700 - 3000 * randParallax, duration: 0.5});

        var scene = new ScrollMagic.Scene({
            offset: 0,
            triggerElement: ".trigger-for-pixel-scroll-" + pixel_scroll_index,
            triggerHook: 0,
            duration: 10000,
            reverse: true
        })
            // .addIndicators()
            .setTween(tl_scroll_pixel)
            .addTo(controller_all_pixels_animation);
    });
    
}

var controller_all_pixels_animation = new ScrollMagic.Controller();

for (pixel_2000_scroll_index = 0; pixel_2000_scroll_index < pixel_2000_count; pixel_2000_scroll_index++) {

    $(".pixel-2000-scroll-" + pixel_2000_scroll_index).each(function () {
        // $(this).addClass('ov-hidden')
        var randParallax2000 = getRandomArbitrary(0.3, 1.4)
        var tl_2000_scroll_pixel = new TimelineMax();
        tl_2000_scroll_pixel.fromTo(this, { y: 0 }, { y: -700 - 2400 * randParallax2000, duration: 0.5});

        var scene = new ScrollMagic.Scene({
            offset: -600,
            triggerElement: ".trigger-for-pixel-2000-scroll-" + pixel_2000_scroll_index,
            triggerHook: 0,
            duration: 10000,
            reverse: true
        })
            // .addIndicators()
            .setTween(tl_2000_scroll_pixel)
            .addTo(controller_all_pixels_animation);
    });
    
}


var controller_all_pixels_animation = new ScrollMagic.Controller();

for (pixel_scroll_no_random_index = 0; pixel_scroll_no_random_index < pixel_no_random_count; pixel_scroll_no_random_index++) {

    $(".pixel-scroll-no-random" + pixel_scroll_no_random_index).each(function () {
        // $(this).addClass('ov-hidden')
        var randParallax2000 = getRandomArbitrary(0.3, 1.4)
        var tl_no_random_scroll_pixel = new TimelineMax();
        tl_no_random_scroll_pixel.fromTo(this, { y: 0 }, { y: -700 - 2400 * randParallax2000, duration: 0.5});

        var scene = new ScrollMagic.Scene({
            offset: -600,
            triggerElement: ".trigger-for-pixel-scroll-no-random-" + pixel_scroll_no_random_index,
            triggerHook: 0,
            duration: 10000,
            reverse: true
        })
            // .addIndicators()
            .setTween(tl_no_random_scroll_pixel)
            .addTo(controller_all_pixels_animation);
    });
    
}




for (pixel_scroll_bottom_index = 0; pixel_scroll_bottom_index < pixel_bottom_count; pixel_scroll_bottom_index++) {

    $(".pixel-scroll-bottom-" + pixel_scroll_bottom_index).each(function () {
        // $(this).addClass('ov-hidden')
        var randParallax = Math.random()
        var tl_scroll_bottom_pixel = new TimelineMax();
        tl_scroll_bottom_pixel.fromTo(this, { y: 0 }, { y: -200 - 200 * randParallax, duration: 0.5});

        var scene = new ScrollMagic.Scene({
            offset: -700,
            triggerElement: ".block-11",
            triggerHook: 0,
            duration: 1600,
            reverse: true
        })
            // .addIndicators()
            .setTween(tl_scroll_bottom_pixel)
            .addTo(controller_all_pixels_animation);
    });
    
}

var controller_all_pixels_mob_animation = new ScrollMagic.Controller();

for (pixel_mob_scroll_index = 0; pixel_mob_scroll_index < pixel_mob_count; pixel_mob_scroll_index++) {

    $(".pixel-mob-scroll-" + pixel_mob_scroll_index).each(function () {
        // $(this).addClass('ov-hidden')
        var randParallax_mob = Math.random()
        var tl_mob_scroll_pixel = new TimelineMax();
        tl_mob_scroll_pixel.fromTo(this, { y: 0 }, {y: -400 - 800 * randParallax_mob, duration: 0.5});

        var scene = new ScrollMagic.Scene({
            offset: 0,
            triggerElement: ".trigger-for-pixel-mob-scroll-" + pixel_mob_scroll_index,
            triggerHook: 0,
            duration: 2000,
            reverse: true
        })
            // .addIndicators()
            .setTween(tl_mob_scroll_pixel)
            .addTo(controller_all_pixels_mob_animation);
    });
}