window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  const key = document.querySelector(`.key[data-key=${e.key}]`);
  if (!audio) return;

  key.classList.add('playing');
  // key.classList.remove('playing');

  audio.currentTime = 0;
  audio.play();
});

const removeTransition = (e) => {
  console.log(e);
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
