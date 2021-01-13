const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMover(event) {
  const x = event.offsetX;
  const y = event.offsetY;
}

function onMouseDown(event) {
  painting = true;
}

function onMouseUp(event) {
  stopPainting();
}

function stopPainting(evnet) {
  painting = false;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMover);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}

function init() {}

init();
