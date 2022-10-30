
// ------------
// Eye tracking
// ------------

const eyeRightPupil = document.getElementById('eye-right-pupil');
const eyeLeftPupil = document.getElementById('eye-left-pupil');
const eyeLeftInner = document.getElementById('eye-left-inner');
const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
const xMovement = (innerEyeWidth - pupilWidth)/2;
const yMovement = (innerEyeHeight - pupilHeight)/2;

window.addEventListener('mousemove', updateEyePosition);



function updateEyePosition(event) {
  const posX = ((event.clientX / document.body.clientWidth) * 3 - 1) * xMovement;
  const posY = ((event.clientY / document.body.clientHeight) * 5 - 1) * yMovement;

  eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
  eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
}

// ------------
// "T" tracking
// ------------

window.addEventListener('mousemove', updateTPosition);

