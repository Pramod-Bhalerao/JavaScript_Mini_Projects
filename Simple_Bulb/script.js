let btn = document.querySelector("button");
let bulb = document.querySelector("#Bulb");

let Flag = 0;
btn.addEventListener("click", function () {
  if (Flag == 0) {
    bulb.style.backgroundColor = "yellow";
    console.log("Clicked");
    btn.innerHTML = "Off"
    Flag = 1;
  } else {
    bulb.style.backgroundColor = "white";
    console.log(" Again Clicked");
    btn.innerHTML = "On"
    Flag = 0;
  }
});
