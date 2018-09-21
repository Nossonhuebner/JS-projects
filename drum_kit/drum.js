window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  console.log(key);
  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});

const removeTransition = (e) => {
  if (e.propertyName !== "transform") return;
  e.currentTarget.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
