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
    yesButton.innerHTML = yesTaps < 3 ? 'Yes, I am <span>🥺</span>' : 'Still yes <span>🥹</span>';
    hint.textContent = yesTaps < 3 ? 'Ouch… I deserve that. Keep going if you need to.' : 'Okay, okay… I’m listening. Tap “No” when you’re ready.';
  } else {
    const phone = '7905929107';
    const message = 'Hey you 💗 I’m sorry for hurting/upsetting you. You mean so much to me, and I never want you to feel anything less than loved and valued. I miss your smile, and I’d really like to make things right whenever you’re ready. I love you. Will you forgive me? 🥺❤️';
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
});

noButton.addEventListener('click', () => {
  if (step === 1) {
    step = 2;
    label.textContent = 'one more little question';
    question.innerHTML = 'Do you still<br><em>love me</em> a little?';
    copy.innerHTML = 'Whatever your answer, I care about you deeply.<br>Thank you for hearing me out.';
    yesButton.innerHTML = 'Yes, always <span>💗</span>';
    yesButton.style.setProperty('--scale', .84);
    yesButton.hidden = true;
    noButton.hidden = false;
    noButton.innerHTML = 'No <span>🥺</span>';
    noButton.style.setProperty('--scale', 1);
    noTaps = 0;
    dots[0].classList.remove('active');
    dots[1].classList.add('active');
    hint.textContent = 'You can be honest… I still adore you.';
    buttons.dataset.step = '2';
  } else {
    noTaps = Math.min(5, noTaps + 1);
    yesButton.hidden = false;
    yesButton.style.setProperty('--scale', Math.min(1.08, .84 + noTaps * .045));
    noButton.style.setProperty('--scale', Math.max(.86, 1 - noTaps * .025));
    hint.textContent = noTaps < 3 ? 'I understand… but I’m still hoping for a yes 💗' : 'That little “yes” is waiting whenever you are 💞';
  }
});
