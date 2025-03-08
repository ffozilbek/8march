window.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".button"),
    modal = document.querySelector(".modal"),
    container = document.querySelector(".container");
  const audio = new Audio("audio.mp3");
  audio.loop = true;

  if (btn && modal) {
    btn.addEventListener("click", () => {
      audio.play();
      modal.classList.add("active");
      setTimeout(() => {
        modal.classList.remove("active");
        modal.style.display = "none";
        document.body.style.overflow = "scroll";
        container.style.display = "block";
      }, 600);
    });
  }
});
