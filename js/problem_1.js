let block = document.querySelector("#block");
let button = document.querySelector("#button");
let body = document.querySelector("#body");
let isActive = false;

function hoverMouse(e) {
  let x = e.clientX - block.offsetWidth / 2;
  let y = e.clientY - block.offsetHeight / 2;
  block.style.top = `${y}px`;
  block.style.left = `${x}px`;
}

button.addEventListener("click", () => {
  if (isActive === false) {
    isActive = true;
    block.style.display = "block";
    button.textContent = "Off";
    body.addEventListener("mousemove", hoverMouse);
  } else {
    isActive = false;
    block.style.display = "none";
    button.textContent = "On";
    body.removeEventListener("mousemove", hoverMouse);
  }
});

button.style.padding = "10px 30px";