$(document).ready(function () {

    const textArr = ['Дмитрий', 'Алина', 'Коля', 'Артем', 'Кирилл', 'Амина', 'Катя', 'Марина']

    const textContainer = document.getElementById("text_container")

    const images = $('.team-photos picture')

    let team = [];

    team[0] = {
        name: "Dmitrii",
        role: "Pidor day fuck 0"
    }
    team[1] = {
        name: "Dmitrii",
        role: "Pidor day fuck 1"
    }
    team[2] = {
        name: "Dmitrii",
        role: "Pidor day fuck 2"
    }
    team[3] = {
        name: "Dmitrii",
        role: "Pidor day fuck 3"
    }
    team[4] = {
        name: "Dmitrii",
        role: "Pidor day fuck 3"
    }
    team[5] = {
        name: "Dmitrii",
        role: "Pidor day fuck 3"
    }
    team[6] = {
        name: "Dmitrii",
        role: "Pidor day fuck 3"
    }
    team[7] = {
        name: "Dmitrii",
        role: "Pidor day fuck 3"
    }


    for (i = 0; i < $('.team-photos picture').length; i++) {
        $(".under-text").append('<p class="person-text animated-paragraph_item_no-scroll_team_' + i + '" id="text_under_iamges"><span class="ov-hidden"><span><b>' + team[i].name + '</b></span></span><span class="ov-hidden"><span>' + team[i].role + '</span></span></p>');
    }
    

    $('.team-photos picture').on({
        mouseenter: function() {
            $('.animated-paragraph_item_no-scroll_team_' + $(this).index() + ' span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.42, { y: 0 }, 0.5 + index * 0.09);
            });
        },
        mouseleave: function() {
            $('.person-text span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.42, { y: "1.3em" }, index * 0.02);
            });
        }
    });

    $('.team-photos').on({
        mouseenter: function() {
            $('.animated-paragraph_item_no-scroll_1 span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.42, { y: "1.3em" }, index * 0.09);
            });
        },
        mouseleave: function() {
            $('.animated-paragraph_item_no-scroll_1 span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.42, { y: 0 }, 1 + index * 0.09);
            });
            $('.person-text span span').each(function (index) {
                var tl_1 = new TimelineMax();
                tl_1.to(this, 0.2, { y: "1.3em" }, index * 0.02);
            });
        }

    });




})