$(document).ready(function () { 
    var welcome_text_appearance = $(".welcome-element-appearance");

    console.log(welcome_text_appearance)

    var welcome_text_appearance_count = welcome_text_appearance.length;


    // HEADING OF WELCOME BLOCK APPEARANCE

    $(".welcome-element-appearance").each(function (welcome_text_appearance_index) {
        $(this).addClass("welcome-element-appearance-index-" + welcome_text_appearance_index)
    })


    for (welcome_text_appearance_index = 0; welcome_text_appearance_index < welcome_text_appearance_count; welcome_text_appearance_index++) {
        $(".welcome-element-appearance-index-" + welcome_text_appearance_index).each(function (index) {
            var tl_element_app = new TimelineMax();
            tl_element_app.fromTo(this, {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1, duration: 0.8}, 0.5)
        })
    }

    // EYE APPEARANCE

    var tl_eye_app = new TimelineMax();
    tl_eye_app.fromTo(".red-eye", {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1, duration: 0.3}, 0.8);


    // LOGO APPEARANCE

    var tl_logo_app = new TimelineMax();
    tl_logo_app.fromTo(".logo-svg", {opacity: 0, scale: 0.5}, {opacity: 1, scale: 1, duration: 0.3}, 1.1);



    // BOTTOM TEXT APPEARANCE

    var tl_genres_and_platform_text_appearance = new TimelineMax();
    tl_genres_and_platform_text_appearance.fromTo(".welcome-text-first-appearance", {opacity: 0, x: -10}, {opacity: 1, x: 0, duration: 0.4}, 1.4);
    tl_genres_and_platform_text_appearance.fromTo(".welcome-text-second-appearance", {opacity: 0, x: -10}, {opacity: 1, x: 0, duration: 0.4}, 1.6);

})