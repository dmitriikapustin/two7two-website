var counting = setInterval(function () {
    var loader = document.getElementById("percentage");
    var currval = parseInt(loader.innerHTML);
    var Width = 99 - currval;
    var loadscreen = document.getElementById("loader-progress");
    var parapraphs_1 = $(".animated-paragraph_item_no-scroll_1");
    var parapraphs_2 = $(".animated-paragraph_item_no-scroll_2");
    var parapraphs_1_count = parapraphs_1.length;
    var parapraphs_2_count = parapraphs_2.length;

    $(".animated-paragraph_item_no-scroll_1").each(function (paragraph_1_index) {
        $(this).addClass("paragraph_1-index-" + paragraph_1_index)
    })


    $(".animated-paragraph_item_no-scroll_2").each(function (paragraph_2_index) {
        $(this).addClass("paragraph_2-index-" + paragraph_2_index)
    })

    loader.innerHTML = ++currval;
    if (currval > 89) {
        loader.innerHTML = 90;
        if (window.jQuery) {
            //console.log('jquery loaded');
            loader.innerHTML = 95;
            if (document.readyState == "interactive") {
                loader.innerHTML = 99;
            }
            if (document.readyState == "complete") {
                //console.log('fully loaded!');
                clearInterval(counting);
                loader.innerHTML = 100;
                jQuery("body").toggleClass('page-loaded');
                var header = document.getElementById("header")
                // HEADER APPEARANCE
                setTimeout(function() {
                    header.classList.remove("hidden")
                }, 0)
                // PARAGRAPH UNDER IMAGES APPEARANCE
                for (parapraphs_1_index = 0; parapraphs_1_index < parapraphs_1_count; parapraphs_1_index++) {
                    $('.paragraph_1-index-' + parapraphs_1_index + " span").each(function (index) {
                        var tl_1 = new TimelineMax();
                        tl_1.to(this, 0.5, { y: 0 }, 2.5 + index * 0.09);
                    });
                }

                // SECOND PARAGRAPH APPEARANCE
                for (parapraphs_2_index = 0; parapraphs_2_index < parapraphs_2_count; parapraphs_2_index++) {
                    $('.paragraph_2-index-' + parapraphs_2_index + " span").each(function (index) {
                        var tl_2 = new TimelineMax();
                        tl_2.to(this, 0.5, { y: 0 }, 3 + index * 0.09);
                    });
                }   
                // IMAGES APPEARANCE

                // COMMON BLOCK OF IMAGES
                var tl_images = new TimelineMax();
                tl_images.to($(".team-photos"), 0.4, { x: 0 }, 1.4);

                // IMAGES
                $(".team-photos picture").each(function(image_index) {
                    var tl = new TimelineMax();
                    tl.to(this, 0.9, { x: 0 + image_index * 50 }, 2.1);
                })
            }
        }
    }

    var logo = document.getElementById("logo");
    logo.classList.remove("first");
    setTimeout(function () {
        logo.classList.add("loaded");
    }, 500);


    var element = document.getElementById("animpath");
    var pathLength = element.getTotalLength();

    element.style.strokeDasharray = pathLength;
    element.style.strokeDashoffset = pathLength;

    function animateRoute(e, arg) {
        // Each step we decrement the dash offset
        arg -= 10;
        if (arg < 0)
            arg = 0; // clamp to minimum 0

        element.style.strokeDashoffset = arg / 90 * pathLength;


        // We need to stop looping when the length gets to 0
        if (arg > 0) {
            // Exit callback function (closing preloader)

        }
        if (element.style.strokeDashoffset === "0px" || element.style.strokeDashoffset === "0") {
            setTimeout(function () {
                $(".preloader").addClass("take_away");
                //$(window).scrollTop(0);
            }, 500)
            setTimeout(function () {
                $(".preloader").addClass("hidden-locked")
            }, 1000)
        }
    }

    animateRoute(element, Width);

    loadscreen.style.transition = "0.10s";
    loadscreen.style.width = Width + "%";


}, 20);