let button = document.getElementById("changeButton");

button.addEventListener("click", function () {
  document.getElementById("title").innerHTML = "You Clicked the Button!";

  document.getElementById("title").style.color = "blue";
});

let box = document.getElementById("box");

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = "lightblue";

  box.innerHTML = "Your mouse is over the box!";
});
