function playMusic(event) {
  //   console.log(event);
  const keyPressed = event.key.toUpperCase();
  const ascii = event.keyCode;
  //   console.log(keyPressed, ascii);
  const element = document.querySelector(`div[data-key="${ascii}"]`);
  if (!element) return;
  element.classList.add("playing");
  const audioClip = document.querySelector(`audio[data-key="${ascii}"]`);
  audioClip.currentTime = 0;
  audioClip.play();
  setTimeout(() => {
    element.classList.remove("playing");
  }, 100);
}

document.addEventListener("keydown", (event) => playMusic(event));
