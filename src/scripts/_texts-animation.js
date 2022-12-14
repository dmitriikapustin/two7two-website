$(document).ready(function () { 
    var appearance_p_left = $(".appearance-p-left");
    var appearance_p_right = $(".appearance-p-right");
    var appearance_h3_left = $(".appearance-h3-left");
    var appearance_h3_right = $(".appearance-h3-right");
    var appearance_h1 = $(".appearance-h1");
    var pixels = $(".pixel");
    var pixels_mob = $(".pixel-mob");
    var pixels_2000 = $(".pixel-2000");
    var pixels_no_random = $(".pixel-no-random");
    const seraphim = document.getElementById('seraphim');



    var pixels_count = pixels.length;
    var pixels_mob_count = pixels_mob.length;
    var pixels_2000_count = pixels_2000.length;
    var pixels_no_random_count = pixels_no_random.length;

    var appearance_h3_left_count = appearance_h3_left.length;
    var appearance_h3_right_count = appearance_h3_right.length;

    var appearance_p_left_count = appearance_p_left.length;
    var appearance_p_right_count = appearance_p_right.length;


    $(".pixel").each(function (pixel_index) {
        $(this).addClass("pixel-index-" + pixel_index)
    })

    $(".pixel-mob").each(function (pixel_mob_index) {
        $(this).addClass("pixel-mob-index-" + pixel_mob_index)
    })

    $(".pixel-2000").each(function (pixel_2000_index) {
        $(this).addClass("pixel-2000-index-" + pixel_2000_index)
    })

    $(".pixel-no-random").each(function (pixel_no_random_index) {
        $(this).addClass("pixel-no-random-index-" + pixel_no_random_index)
    })

    $(".appearance-p-left").each(function (appearance_p_left_index) {
        $(this).addClass("appearance-p-left-index-" + appearance_p_left_index)
    })

    $(".appearance-p-right").each(function (appearance_p_right_index) {
        $(this).addClass("appearance-p-right-index-" + appearance_p_right_index)
    })

    $(".appearance-h3-left").each(function (appearance_h3_left_index) {
        $(this).addClass("appearance-h3-left-index-" + appearance_h3_left_index)
    })

    $(".appearance-h3-right").each(function (appearance_h3_right_index) {
        $(this).addClass("appearance-h3-right-index-" + appearance_h3_right_index)
    })

    // PIXELS APPEARANCE
    for (pixel_index = 0; pixel_index < pixels_count; pixel_index++) {
        $(".pixel-index-" + pixel_index).each(function (index) {
            var randomAppearanceK = Math.random()
            var tl_pixel = new TimelineMax();
            tl_pixel.fromTo(this, {opacity: 0}, {opacity: 1, duration: 0.4}, 0.9 + randomAppearanceK * 1)
        })
    }

    for (pixel_no_random_index = 0; pixel_no_random_index < pixels_no_random_count; pixel_no_random_index++) {
        $(".pixel-no-random-index-" + pixel_no_random_index).each(function (index) {
            var randomAppearanceK = Math.random()
            var tl_pixel = new TimelineMax();
            tl_pixel.fromTo(this, {opacity: 0}, {opacity: 1, duration: 0.4}, 0.9 + randomAppearanceK * 1)
        })
    }

    for (pixel_2000_index = 0; pixel_2000_index < pixels_2000_count; pixel_2000_index++) {
        $(".pixel-2000-index-" + pixel_2000_index).each(function (index) {
            var randomAppearanceK = Math.random()
            var tl_pixel = new TimelineMax();
            tl_pixel.fromTo(this, {opacity: 0}, {opacity: 1, duration: 0.4}, 0.9 + randomAppearanceK * 1)
        })
    }

    for (pixel_mob_index = 0; pixel_mob_index < pixels_mob_count; pixel_mob_index++) {
        $(".pixel-mob-index-" + pixel_mob_index).each(function (index) {
            var randomAppearanceK = Math.random()
            var tl_pixel = new TimelineMax();
            tl_pixel.fromTo(this, {opacity: 0}, {opacity: 1, duration: 0.4}, 0.9 + randomAppearanceK * 1)
        })
    }

    // FIRST BLOCK NO SCROLL

    for (appearance_p_left_index = 0; appearance_p_left_index < appearance_p_left_count; appearance_p_left_index++) {
        $('.appearance-p-left-index-' + appearance_p_left_index).each(function (index) {
            var tl_a_p = new TimelineMax();
            tl_a_p.fromTo(this, { x: -1500 }, { x: 0, duration: 0.25, ease: "power3.out" }, 0.8 + index * 0.5);
        });
    }

    for (appearance_p_right_index = 0; appearance_p_right_index < appearance_p_right_count; appearance_p_right_index++) {
        $('.appearance-p-right-index-' + appearance_p_right_index).each(function (index) {
            var tl_a_p = new TimelineMax();
            tl_a_p.fromTo(this, { x: 1500 }, { x: 0, duration: 0.25, ease: "power3.out" }, 0.8 + index * 0.5);
        });
    }

    for (appearance_h3_left_index = 0; appearance_h3_left_index < appearance_h3_left_count; appearance_h3_left_index++) {
        $('.appearance-h3-left-index-' + appearance_h3_left_index).each(function (index) {
            var tl_a_h3 = new TimelineMax();
            tl_a_h3.fromTo(this, { x: -1500 }, { x: 0, duration: 0.3, ease: "power3.out" }, 0.4 + index * 0.5);
        });
    }

    for (appearance_h3_right_index = 0; appearance_h3_right_index < appearance_h3_right_count; appearance_h3_right_index++) {
        $('.appearance-h3-right-index-' + appearance_h3_right_index).each(function (index) {
            var tl_a_h3 = new TimelineMax();
            tl_a_h3.fromTo(this, { x: 1500 }, { x: 0, duration: 0.25, ease: "power3.out" }, 0.55 + index * 0.5);
        });
    }

    var tl_a_h1 = new TimelineMax();
    tl_a_h1.fromTo(appearance_h1, { opacity: 0, scale: 1.3, y: 10 }, { y: 0, opacity: 1, scale: 1, duration: 0.15, ease: "power3.out" }, 0.25);

    var tl_a_burger_appearance = new TimelineMax();
    tl_a_burger_appearance.fromTo("#burger-menu", { opacity: 0 }, { opacity: 1, duration: 0.15, ease: "power3.out" }, 2);

    var tl_a_seraphim = new TimelineMax({
        onComplete: function() {
            window.addEventListener('mousemove', function (event) {
                const posX = ((event.clientX / document.body.clientWidth) * 3 - 1) * 6;
                const posY = ((event.clientY / window.screen.height) * 2 - 1) * 6;
                if (location.href.indexOf('reprobates') !== -1) { // for example its login.php page
                    seraphim.style.transform = `translate(${posX * 5}px, ${posY * 5}px)`;
                }
            });

        }
    });
    tl_a_seraphim.fromTo(seraphim, { x: 1500 }, { x: 0, duration: 1.3, ease: "power3.out" }, 1.2);
    const metagun_block2 = document.getElementById("metagun_block_2")
    const text_block2 = document.getElementById("text_block_2")
    const egg_block3 = document.getElementById("egg_block_3")

    console.log()

    if ($(window).width() > 1800) {
        var tl_metagun = new TimelineMax()
        tl_metagun.fromTo(metagun_block2, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: "power3.out" }, 1.8);
        var tl_metagun_text = new TimelineMax()
        tl_metagun_text.fromTo(text_block2, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: "power3.out" }, 2.1);
        var tl_egg = new TimelineMax()
        tl_egg.fromTo(egg_block3, { opacity: 0 }, { opacity: 1, duration: 0.7, ease: "power3.out" }, 2.4);
    }
 })