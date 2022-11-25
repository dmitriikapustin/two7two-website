
// ------------
// Eye tracking
// ------------

const p = document.querySelectorAll(".animated-p");
let pArray = Array.from(p)

// const p_after = window.getComputedStyle(
// 	document.querySelector(".p_after"), ':after'
// )

// console.log(p_after)

const comissar = document.getElementById('comissar');
const comissar_container = document.getElementById('comissar-container');
const tu1 = document.getElementById('t-u-1');
const tu2 = document.getElementById('t-u-2');
const eyeRightPupil = document.getElementById('eye-right-pupil');
const eyeLeftPupil = document.getElementById('eye-left-pupil');
const tu1_main = document.getElementById('t-u-1-main');
const tu2_main = document.getElementById('t-u-2-main');
const eyeRightPupil_main = document.getElementById('eye-right-pupil-main');
const eyeLeftPupil_main = document.getElementById('eye-left-pupil-main');
const troyan_tu = document.getElementById('troяn-t-u');
const reprobates_tu = document.getElementById('reprobates-t-u');
const troyan_oc = document.getElementById('troяn-o-c');
const reprobates_oc = document.getElementById('reprobates-o-c');
const developer_1_oc = document.getElementById('developer-1-o-c');
const developer_2_oc = document.getElementById('developer-2-o-c');
const our_games_oc = document.getElementById('our-games-o-c');
const og_oc = document.getElementById('og-o-c');
const eyeLeftInner = document.getElementById('eye-left-inner');
const eyeLeftInner_main = document.getElementById('eye-left-inner-main');
const last_p = document.getElementById('last-p');
// const footer = document.getElementById('footer');
console.log(last_p)

$(document).ready(function () { 
  if(location.href.indexOf('reprobates')!==-1 && $(document).width() < 800) {
    footer.style.marginTop = "0px !important"
  }
})



window.addEventListener('mousemove', updateEyePosition);



function updateEyePosition(event) {
  if (eyeLeftInner) {
  const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
  const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
  const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
  const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
  const xMovement = (innerEyeWidth - pupilWidth)/2;
  const yMovement = (innerEyeHeight - pupilHeight)/2;
  

  const posX = ((event.clientX / document.body.clientWidth) * 3 - 1) * xMovement;
  const posY = ((event.clientY / window.screen.height) * 2 - 1) * yMovement;

  if (developer_1_oc) {
    developer_1_oc.style.transform = `translate(${posX * 0.02}px, ${posY * -0.09}px)`;
  }
  if (developer_2_oc) {
    developer_2_oc.style.transform = `translate(${posX * -0.04}px, ${posY * 0.07}px)`;
  }
  if (troyan_tu) {
    troyan_tu.style.transform = `translate(0px, ${posY * 0.2}px)`;
  }
  if (reprobates_tu) {
    reprobates_tu.style.transform = `translate(0px, ${posY * 0.2}px)`;
  }
  if (troyan_oc) {
    troyan_oc.style.transform = `translate(${posX * 0.03}px, ${posY * -0.08}px)`;
  }
  if (reprobates_oc) {
    reprobates_oc.style.transform = `translate(${posX * 0.05}px, ${posY * -0.09}px)`;
  }
  if (our_games_oc) {
    our_games_oc.style.transform = `translate(${posX * 0.05}px, ${posY * -0.09}px)`;
  }
  if (og_oc) {
    og_oc.style.transform = `translate(${posX * 0.05}px, ${posY * -0.09}px)`;
  }

  if ($(document).width() > 800 && $(document).width() <= 1600) {
    tu1.style.transform = `translate(0px, ${posY * 1.1}px)`;
    tu2.style.transform = `translate(0px, ${posY * -0.9}px)`;
    eyeLeftPupil.style.transform = `translate(${posX * 0.25}px, ${posY * -0.5}px)`;
    eyeRightPupil.style.transform = `translate(${posX * -0.3}px, ${posY * 0.45}px)`;
  }
  if ($(document).width() > 1600) {
    tu1.style.transform = `translate(0px, ${posY * 0.7}px)`;
    tu2.style.transform = `translate(0px, ${posY * -0.6}px)`;
    eyeLeftPupil.style.transform = `translate(${posX * 0.15}px, ${posY * -0.35}px)`;
    eyeRightPupil.style.transform = `translate(${posX * -0.18}px, ${posY * 0.28}px)`;
  }

  if (eyeLeftInner_main) {
    const innerEyeWidth_main = eyeLeftInner_main.getBoundingClientRect().width;
    const innerEyeHeight_main = eyeLeftInner_main.getBoundingClientRect().height;
    const pupilWidth_main = eyeLeftPupil_main.getBoundingClientRect().width;
    const pupilHeight_main = eyeLeftPupil_main.getBoundingClientRect().height;
    const xMovement_main = (innerEyeWidth_main - pupilWidth_main)/2;
    const yMovement_main = (innerEyeHeight_main - pupilHeight_main)/2;
  
    const posX_main = ((event.clientX / document.body.clientWidth) * 3 - 1) * xMovement_main;
    const posY_main = ((event.clientY / window.screen.height) * 2 - 1) * yMovement_main;
  
    if ($(document).width() > 800 && $(document).width() <= 1600) {
      tu1_main.style.transform = `translate(0px, ${posY_main * 1.1}px)`;
      tu2_main.style.transform = `translate(0px, ${posY_main * -0.9}px)`;
      eyeLeftPupil_main.style.transform = `translate(${posX_main * 0.25}px, ${posY_main * -0.5}px)`;
      eyeRightPupil_main.style.transform = `translate(${posX_main * -0.3}px, ${posY_main * 0.45}px)`;
    }
    if ($(document).width() > 1600) {
      tu1_main.style.transform = `translate(0px, ${posY_main * 0.7}px)`;
      tu2_main.style.transform = `translate(0px, ${posY_main * -0.6}px)`;
      eyeLeftPupil_main.style.transform = `translate(${posX_main * 0.15}px, ${posY_main * -0.35}px)`;
      eyeRightPupil_main.style.transform = `translate(${posX_main * -0.18}px, ${posY_main * 0.28}px)`;
    }
  }
}

  // console.log(last_p.style.transform)
  // if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page

  // }
  // if(location.href.indexOf('index')!==-1) { // for example its login.php page
  //   troyan_tu.style.transform = `translate(0px, ${posY * 0.2}px)`;
  //   reprobates_tu.style.transform = `translate(0px, ${posY * -0.2}px)`;
  //   troyan_oc.style.transform = `translate(${posX * 0.03}px, ${posY * -0.08}px)`;
  //   reprobates_oc.style.transform = `translate(${posX * 0.05}px, ${posY * -0.09}px)`;
  //   our_games_oc.style.transform = `translate(${posX * 0.05}px, ${posY * -0.09}px)`;
  // }
  // if (p_right_boolean === true) {
  //   p.forEach((item, index) => {
  //     item.style.transform = `translate(${posX * 1.1 * (index + 0.5) + 1.2 * index}px, 0`;
  //   })
  // }



  // reprobates_tu.style.transform = `translate(0px, ${posY * -0.2}px)`;
  // troyan_oc.style.transform = `translate(${posX * 0.03}px, ${posY * -0.08}px)`;
  // reprobates_oc.style.transform = `translate(${posX * 0.05}px, ${posY * -0.09}px)`;
  // our_games_oc.style.transform = `translate(${posX * 0.05}px, ${posY * -0.09}px)`;
  // comissar.style.transform = `translate(${posX * 3.1}px, ${posY * 3.1}px)`;
  if (comissar_container) {
    comissar_container.style.transform = `translate(${posX * 2.5}px, ${posY * 2.5}px)`;
  }

  // if ($(document).width() <= 800) {
  //   tu1.style.transform = `translate(0px, 0px)`;
  //   tu2.style.transform = `translate(0px, 0px)`;
  //   eyeLeftPupil.style.transform = `translate(0px, 0px)`;
  //   eyeRightPupil.style.transform = `translate(0px, 0px)`;
  // }
}




// DEMON ANIMATION

if ($(window).width() > 800) {
  var tl_demon = new TimelineMax({repeat: -1, repeatDelay: 0});
  tl_demon.fromTo(".demon", {y: 0}, {y: 30, duration: 0.8, ease: "none"})
  tl_demon.to(".demon", 1.6, {y: -30, ease: "none"}, 0.8)
  tl_demon.to(".demon", 0.8, {y: 0, ease: "none"}, 2.4)
} else {
  var tl_demon = new TimelineMax({repeat: -1, repeatDelay: 0});
  tl_demon.fromTo(".demon", {y: 0}, {y: 7, duration: 0.8, ease: "none"})
  tl_demon.to(".demon", 1.6, {y: -7, ease: "none"}, 0.8)
  tl_demon.to(".demon", 0.8, {y: 0, ease: "none"}, 2.4)
}


// MEAT & COMISSAR ANIMATION

var tl_move_c = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_move_c.fromTo(".comissar", {x: 0}, {x: 120, duration: 1.2, ease: "none"})
tl_move_c.to(".comissar", 2.4, {x: -120, ease: "none"}, 1.2)
tl_move_c.to(".comissar", 0, {scaleX: -1, ease: "none"}, 1.2)
tl_move_c.to(".comissar", 1.2, {x: 0, ease: "none"}, 3.6)
tl_move_c.to(".comissar", 0, {scaleX: 1, ease: "none"}, 3.6)




var tl_move_m = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_move_m.fromTo(".meat", {x: 0}, {x: 80, duration: 1.2, ease: "none"})
tl_move_m.to(".meat", 2.4, {x: -80, ease: "none"}, 1.2)
tl_move_m.to(".meat", 0, {scaleX: -1, ease: "none"}, 1.2)
tl_move_m.to(".meat", 1.2, {x: 0, ease: "none"}, 3.6)
tl_move_m.to(".meat", 0, {scaleX: 1, ease: "none"}, 3.6)


// DIGITS ANIMATION 

$(".count").each(function(index) {
  var tl_digits_m = new TimelineMax({repeat: -1, repeatDelay: 0});
  tl_digits_m.to(this, 1.5, {opacity: 0.4, ease: "none"}, 0 + index * 0.3)
  tl_digits_m.to(this, 1.5, {opacity: 1, ease: "none"}, 2.25 + index * 0.3)
})


// PLUS ANIMATION

var tl_plus = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_plus.fromTo("#animated-plus", {scale: 0.88}, {scale: 1, duration: 0.3, ease: "none"})
tl_plus.to("#animated-plus", 0.3, {scale: 0.88, ease: "none"}, 0.3)


// PLAY && PAUSE BUTTONS ANIMATION

var tl_btn = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_btn.fromTo("#play-btn", {scale: 0.93}, {scale: 1, duration: 0.08, ease: "none"}, 0.23)
tl_btn.to("#play-btn", 0.08, {scale: 0.93, ease: "none"}, 0.31)

var tl_btn = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_btn.fromTo("#pause-btn", {scale: 0.93}, {scale: 1, duration: 0.08, ease: "none"}, 0.23)
tl_btn.to("#pause-btn", 0.08, {scale: 0.93, ease: "none"}, 0.31)

