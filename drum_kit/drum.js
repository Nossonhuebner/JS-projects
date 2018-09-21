window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  if (audio) {
    audio.play();
  }
});
