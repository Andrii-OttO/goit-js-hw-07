const refs = {
  input: document.querySelector("div >input"),
  renderBtn: document.querySelector("[data-action='render']"),
  destroyBtn: document.querySelector("[data-action='destroy']"),
  boxes: document.getElementById("boxes"),
};
const { input, renderBtn, destroyBtn, boxes } = refs;
let amount = 0;

destroyBtn.addEventListener("click", destroyboxes);
renderBtn.addEventListener("click", createBoxes);

function createBoxes(amount) {
  amount = +input.value;
  let divSize = 30;
  for (let i = 0; i < amount; ++i) {
    const div = document.createElement("div");

    divSize += 10;
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = divSize + "px";
    div.style.height = divSize + "px";
    div.classList.add("div-box");
    div.style.marginLeft = "10px";
    boxes.appendChild(div);
  }
}
function destroyboxes() {
  const div = document.querySelectorAll(".div-box");
  for (let d of div) {
    d.remove();
  }
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
boxes.style.display = "flex";
boxes.style.padding = "10px";
