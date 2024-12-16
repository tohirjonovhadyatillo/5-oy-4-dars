let colorPicker = document.querySelector("#color-picker");
let text = document.querySelectorAll(".text");

colorPicker.addEventListener("input", () => {
  text.forEach((text) => {
    text.style.color = colorPicker.value;
  });
});
