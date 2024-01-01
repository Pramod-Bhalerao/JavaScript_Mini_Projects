const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (i = 0; i < 6; i++) {
    color += hex[Math.ceil(Math.random() * 16)];
  }
  return color;
};

let intervalId;

const startChangingColor = function () {
  if (intervalId == null) {
    intervalId = setInterval(changeBGColor, 500);
  }
  function changeBGColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.getElementById("Start").addEventListener("click", startChangingColor);
document.getElementById("Stop").addEventListener("click", stopChangingColor);
