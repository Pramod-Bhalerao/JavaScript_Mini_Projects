let btn = document.querySelectorAll(".button");
let body = document.querySelector("body");
let DBtn = document.querySelector("#btn")

var a = 0
DBtn.addEventListener("click",function(dark){
  if(a == 0){
    body.style.backgroundColor = "black"
    body.style.color = "White"
    DBtn.innerHTML = "OFF"
    a = 1
  }else{
    body.style.backgroundColor = "White"
    body.style.color = "Black"
    DBtn.innerHTML = "ON"
    a = 0
  }
})

btn.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (E) {
    console.log(E);
    console.log(E.target);
    if (E.target.id === "grey") {
      body.style.backgroundColor = E.target.id;
    }
    if (E.target.id === "white") {
      body.style.backgroundColor = E.target.id;
    }
    if (E.target.id === "blue") {
      body.style.backgroundColor = E.target.id;
    }
    if (E.target.id === "yellow") {
      body.style.backgroundColor = E.target.id;
    }
    if (E.target.id === "purple") {
      body.style.backgroundColor = E.target.id;
    }
  });
});


