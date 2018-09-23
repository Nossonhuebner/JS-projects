const tock = new Audio();
tock.src = './tick.wav';

document.addEventListener("DOMContentLoaded", runClock);

function runClock() {
  setInterval(tick, 1000);
}

function tick() {
  tock.currentTime = 0.05;
  tock.play();

  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondHand = document.querySelector("#seconds");
  const minuteHand = document.querySelector("#minutes");
  const hourHand = document.querySelector("#hours");

  secondHand.style.transform = `rotate(${seconds * 6 + 90}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6 + 90}deg)`;
  hourHand.style.transform = `rotate(${hours / 12 * 360 + 90}deg)`;
}
