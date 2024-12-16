let ball = document.querySelector("#ball");
let body = document.querySelector("#body");

body.addEventListener("click", (e) => {
  let offsetX = ball.offsetWidth / 2;
  let offsetY = ball.offsetHeight / 2;

  ball.style.top = `${e.clientY - offsetY}px`;
  ball.style.left = `${e.clientX - offsetX}px`;
});
