
// ------------
// Eye tracking
// ------------

const p = document.querySelectorAll(".animated-p");
let pArray = Array.from(p)


const tu1 = document.getElementById('t-u-1');
const tu2 = document.getElementById('t-u-2');
const troyan_tu = document.getElementById('troяn-t-u');
const reprobates_tu = document.getElementById('reprobates-t-u');
const troyan_oc = document.getElementById('troяn-o-c');
const reprobates_oc = document.getElementById('reprobates-o-c');
const our_games_oc = document.getElementById('our-games-o-c');
const eyeRightPupil = document.getElementById('eye-right-pupil');
const eyeLeftPupil = document.getElementById('eye-left-pupil');
const eyeLeftInner = document.getElementById('eye-left-inner');
const last_p = document.getElementById('last-p');
console.log(last_p)
const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
const xMovement = (innerEyeWidth - pupilWidth)/2;
const yMovement = (innerEyeHeight - pupilHeight)/2;

window.addEventListener('mousemove', updateEyePosition);



function updateEyePosition(event) {
  const posX = ((event.clientX / document.body.clientWidth) * 3 - 1) * xMovement;
  const posY = ((event.clientY / window.screen.height) * 2 - 1) * yMovement;
  // console.log(last_p.style.transform)
  // if(location.href.indexOf('reprobates')!==-1) { // for example its login.php page

  // }
  if(location.href.indexOf('index')!==-1) { // for example its login.php page
    troyan_tu.style.transform = `translate(0px, ${posY * 0.2}px)`;
    reprobates_tu.style.transform = `translate(0px, ${posY * -0.2}px)`;
    troyan_oc.style.transform = `translate(${posX * 0.03}px, ${posY * -0.08}px)`;
    reprobates_oc.style.transform = `translate(${posX * 0.05}px, ${posY * -0.09}px)`;
    our_games_oc.style.transform = `translate(${posX * 0.05}px, ${posY * -0.09}px)`;
  }
  // if (p_right_boolean === true) {
  //   p.forEach((item, index) => {
  //     item.style.transform = `translate(${posX * 1.1 * (index + 0.5) + 1.2 * index}px, 0`;
  //   })
  // }


  tu1.style.transform = `translate(0px, ${posY * 1.3}px)`;
  tu2.style.transform = `translate(0px, ${posY * -0.9}px)`;
  eyeLeftPupil.style.transform = `translate(${posX * 0.25}px, ${posY * -0.5}px)`;
  eyeRightPupil.style.transform = `translate(${posX * -0.3}px, ${posY * 0.45}px)`;
}




// DEMON ANIMATION

var tl_demon = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_demon.fromTo(".demon", {y: 0}, {y: 30, duration: 0.8, ease: "none"})
tl_demon.to(".demon", 1.6, {y: -30, ease: "none"}, 0.8)
tl_demon.to(".demon", 0.8, {y: 0, ease: "none"}, 2.4)


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
tl_move_c.to(".meat", 0, {scaleX: -1, ease: "none"}, 1.2)
tl_move_m.to(".meat", 1.2, {x: 0, ease: "none"}, 3.6)
tl_move_c.to(".meat", 0, {scaleX: 1, ease: "none"}, 3.6)



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


var tl_btn = new TimelineMax({repeat: -1, repeatDelay: 0});
tl_btn.fromTo("#play-btn", {scale: 0.93}, {scale: 1, duration: 0.08, ease: "none"}, 0.23)
tl_btn.to("#play-btn", 0.08, {scale: 0.93, ease: "none"}, 0.31)

