const canvas = document.querySelector("#drawingCanvas");
const ctx = canvas.getContext("2d");
const toolBtns = document.querySelectorAll(".toolkit");
const colorPicker = document.querySelector("#colorPicker");
const clearBtn = document.querySelector(".clear");
const saveBtn = document.querySelector(".save");
const slider = document.querySelector(".slider-input");

let isDrawing = false, selectedTool = "pencil", brushSize = 2;
let prevMouseX, prevMouseY, snapshot;

// **Set canvas size**
canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 150;
ctx.lineWidth = brushSize;
ctx.strokeStyle = "black";

// **Start Drawing**
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath();
    ctx.moveTo(prevMouseX, prevMouseY);
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    if (selectedTool === "paintBucket") {
        ctx.fillStyle = colorPicker.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
});

// **Drawing**
canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    ctx.putImageData(snapshot, 0, 0);

    if (selectedTool === "pencil") {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    } else if (selectedTool === "eraser") {
        ctx.strokeStyle = "white";
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        ctx.strokeStyle = colorPicker.value;
    } else if (selectedTool === "rectangle") {
        let width = e.offsetX - prevMouseX;
        let height = e.offsetY - prevMouseY;
        ctx.strokeRect(prevMouseX, prevMouseY, width, height);
    } else if (selectedTool === "circle") {
        let radius = Math.sqrt(Math.pow(e.offsetX - prevMouseX, 2) + Math.pow(e.offsetY - prevMouseY, 2));
        ctx.beginPath();
        ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    } else if (selectedTool === "line") {
        ctx.beginPath();
        ctx.moveTo(prevMouseX, prevMouseY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

// **Stop Drawing**
canvas.addEventListener("mouseup", () => isDrawing = false);

// **Tool Selection**
toolBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        selectedTool = btn.dataset.tool;
    });
});

// **Change Color**
colorPicker.addEventListener("input", () => {
    ctx.strokeStyle = colorPicker.value;
});

// **Change Brush Size**
slider.addEventListener("input", () => {
    brushSize = slider.value;
    ctx.lineWidth = brushSize;
});

// **Clear Canvas**
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// **Save Drawing**
saveBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "drawing.png";
    link.href = canvas.toDataURL();
    link.click();
});
