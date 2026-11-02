let mood = "";

document.getElementById("focused").addEventListener("click", function () {
  mood = "focused";

  if (mood === "focused") {
    document.getElementById("result").innerHTML =
      "You should work on your assignments or study.";
  } else if (mood === "tired") {
    document.getElementById("result").innerHTML =
      "You should take a short break and rest.";
  } else {
    document.getElementById("result").innerHTML =
      "You should go for a walk or do something fun.";
  }
});

document.getElementById("tired").addEventListener("click", function () {
  mood = "tired";

  if (mood === "focused") {
    document.getElementById("result").innerHTML =
      "You should work on your assignments or study.";
  } else if (mood === "tired") {
    document.getElementById("result").innerHTML =
      "You should take a short break and rest.";
  } else {
    document.getElementById("result").innerHTML =
      "You should go for a walk or do something fun.";
  }
});

document.getElementById("bored").addEventListener("click", function () {
  mood = "bored";

  if (mood === "focused") {
    document.getElementById("result").innerHTML =
      "You should work on your assignments or study.";
  } else if (mood === "tired") {
    document.getElementById("result").innerHTML =
      "You should take a short break and rest.";
  } else {
    document.getElementById("result").innerHTML =
      "You should go for a walk or do something fun.";
  }
});
