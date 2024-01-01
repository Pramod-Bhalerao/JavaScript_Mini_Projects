let istaus = document.querySelector("h5");
let addFriend = document.querySelector("#add");

flag = 0;

addFriend.addEventListener("click", function () {
  if (flag == 0) {
    istaus.innerHTML = "Friends";
    istaus.style.color = "green";
    addFriend.innerHTML = "Remove friend";
    flag = 1;
  } else {
    istaus.innerHTML = "Stranger";
    istaus.style.color = "red";
    addFriend.innerHTML = "Add Friend";
    flag = 0;
  }
});
