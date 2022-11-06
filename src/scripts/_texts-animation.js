$(document).ready(function () { 
    var appearance_p_left = $(".appearance-p-left");
    var appearance_p_right = $(".appearance-p-right");
    var appearance_h3_left = $(".appearance-h3-left");
    var appearance_h3_right = $(".appearance-h3-right");
    var appearance_h1 = $(".appearance-h1");
    const seraphim = document.getElementById('seraphim');



   

    var appearance_h3_left_count = appearance_h3_left.length;
    var appearance_h3_right_count = appearance_h3_right.length;

    var appearance_p_left_count = appearance_p_left.length;
    var appearance_p_right_count = appearance_p_right.length;


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


    // FIRST BLOCK NO SCROLL

    for (appearance_p_left_index = 0; appearance_p_left_index < appearance_p_left_count; appearance_p_left_index++) {
        $('.appearance-p-left-index-' + appearance_p_left_index).each(function (index) {
            var tl_a_p = new TimelineMax();
            tl_a_p.fromTo(this, { x: -1000 }, { x: 0, duration: 0.25, ease: "power3.out" }, 0.8 + index * 0.5);
        });
    }

    for (appearance_p_right_index = 0; appearance_p_right_index < appearance_p_right_count; appearance_p_right_index++) {
        $('.appearance-p-right-index-' + appearance_p_right_index).each(function (index) {
            var tl_a_p = new TimelineMax();
            tl_a_p.fromTo(this, { x: 1000 }, { x: 0, duration: 0.25, ease: "power3.out" }, 0.8 + index * 0.5);
        });
    }

    for (appearance_h3_left_index = 0; appearance_h3_left_index < appearance_h3_left_count; appearance_h3_left_index++) {
        $('.appearance-h3-left-index-' + appearance_h3_left_index).each(function (index) {
            var tl_a_h3 = new TimelineMax();
            tl_a_h3.fromTo(this, { x: -1000 }, { x: 0, duration: 0.3, ease: "power3.out" }, 0.4 + index * 0.5);
        });
    }

    for (appearance_h3_right_index = 0; appearance_h3_right_index < appearance_h3_right_count; appearance_h3_right_index++) {
        $('.appearance-h3-right-index-' + appearance_h3_right_index).each(function (index) {
            var tl_a_h3 = new TimelineMax();
            tl_a_h3.fromTo(this, { x: 1000 }, { x: 0, duration: 0.25, ease: "power3.out" }, 0.55 + index * 0.5);
        });
    }

    var tl_a_h1 = new TimelineMax();
    tl_a_h1.fromTo(appearance_h1, { opacity: 0, scale: 1.3, y: 10 }, { y: 0, opacity: 1, scale: 1, duration: 0.15, ease: "power3.out" }, 0.25);

    var tl_a_seraphim = new TimelineMax({
        onComplete: function() {
            window.addEventListener('mousemove', function (event) {
                const posX = ((event.clientX / document.body.clientWidth) * 3 - 1) * 6;
                const posY = ((event.clientY / window.screen.height) * 2 - 1) * 6;
                seraphim.style.transform = `translate(${posX * 5}px, ${posY * 5}px)`;
            });

        }
    });
    tl_a_seraphim.fromTo(seraphim, { x: 1000 }, { x: 0, duration: 1.3, ease: "power3.out" }, 1.2);


})