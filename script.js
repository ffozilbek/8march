window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".button"),
    modal = document.querySelector(".modal");
  const audio = new Audio("audio.mp3");
  audio.loop = true;

  if (btn && modal) {
    btn.addEventListener("click", () => {
      audio.play();
      modal.classList.add("active");
      setTimeout(() => {
        modal.classList.remove("active");
        modal.style.display = "none";
      }, 600);
    });
  }
});
