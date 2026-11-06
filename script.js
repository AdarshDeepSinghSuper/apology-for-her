const question = document.querySelector('#question');
const copy = document.querySelector('#copy');
const label = document.querySelector('#step-label');
const yesButton = document.querySelector('#yes-button');
const noButton = document.querySelector('#no-button');
const hint = document.querySelector('#hint');
const buttons = document.querySelector('#buttons');
const dots = document.querySelectorAll('.progress-dot');

let step = 1;
let yesTaps = 0;
let noTaps = 0;

yesButton.addEventListener('click', () => {
  if (step === 1) {
    yesTaps = Math.min(6, yesTaps + 1);
    const yesScale = Math.max(.82, 1 - yesTaps * .03);
    const noScale = Math.min(1.1, .82 + yesTaps * .045);
    yesButton.style.setProperty('--scale', yesScale);
    noButton.style.setProperty('--scale', noScale);
    noButton.hidden = false;
    yesButton.textContent = 'Yes, I’m still upset';
    hint.textContent = yesTaps < 3 ? 'I understand. Take your time.' : 'I’m listening whenever you’re ready.';
  } else {
    const phone = '7905929107';
    const message = 'I read your apology, and I still care about us.\nI’m ready to talk when you are. ❤️';
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
});

noButton.addEventListener('click', () => {
  if (step === 1) {
    step = 2;
    label.textContent = 'whenever you’re ready';
    question.innerHTML = 'Would you be open<br><em>to talking?</em>';
    copy.innerHTML = 'No pressure to answer right away.<br>I’ll listen whenever you’re ready.';
    yesButton.textContent = 'Yes, let’s talk';
    yesButton.style.setProperty('--scale', .84);
    yesButton.hidden = true;
    noButton.hidden = false;
    noButton.textContent = 'Not yet';
    noButton.style.setProperty('--scale', 1);
    noTaps = 0;
    dots[0].classList.remove('active');
    dots[1].classList.add('active');
    hint.textContent = 'There’s no rush to answer.';
    buttons.dataset.step = '2';
  } else {
    noTaps = Math.min(5, noTaps + 1);
    yesButton.hidden = false;
    yesButton.style.setProperty('--scale', Math.min(1.08, .84 + noTaps * .045));
    noButton.style.setProperty('--scale', Math.max(.86, 1 - noTaps * .025));
    hint.textContent = 'I understand. Take all the time you need.';
  }
});
