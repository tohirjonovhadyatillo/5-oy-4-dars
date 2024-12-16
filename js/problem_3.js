let colorPicker = document.querySelector("#color-picker");
let body = document.querySelector("#body");

colorPicker.addEventListener("input", () => {
  body.style.backgroundColor = colorPicker.value;
});
