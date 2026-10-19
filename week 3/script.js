let storyNumber = 1;

function showBeginning() {
  document.getElementById("part").innerHTML = "Beginning";

  if (storyNumber == 1) {
    document.getElementById("photo").innerHTML = '<img src="studynote.jpeg">';
    document.getElementById("story").innerHTML =
      "I sat down to study for my upcoming test.";
  } else {
    document.getElementById("photo").innerHTML = '<img src="controller.jpeg">';
    document.getElementById("story").innerHTML =
      "I was enjoying a game after a long day.";
  }
}

function showMiddle() {
  document.getElementById("part").innerHTML = "Middle";

  if (storyNumber == 1) {
    document.getElementById("photo").innerHTML = '<img src="controller.jpeg">';
    document.getElementById("story").innerHTML =
      "I decided to take a short gaming break.";
  } else {
    document.getElementById("photo").innerHTML = '<img src="clock.jpeg">';
    document.getElementById("story").innerHTML =
      "I checked the time and remembered I had studying to do.";
  }
}

function showEnd() {
  document.getElementById("part").innerHTML = "End";

  if (storyNumber == 1) {
    document.getElementById("photo").innerHTML = '<img src="clock.jpeg">';
    document.getElementById("story").innerHTML =
      "I checked the clock and realised hours had passed.";
  } else {
    document.getElementById("photo").innerHTML = '<img src="studynote.jpeg">';
    document.getElementById("story").innerHTML =
      "I stopped playing games and started studying.";
  }
}

document.getElementById("story1").addEventListener("click", function () {
  storyNumber = 1;
  showBeginning();
});

document.getElementById("story2").addEventListener("click", function () {
  storyNumber = 2;
  showBeginning();
});

document.getElementById("beginning").addEventListener("click", function () {
  showBeginning();
});

document.getElementById("middle").addEventListener("click", function () {
  showMiddle();
});

document.getElementById("end").addEventListener("click", function () {
  showEnd();
});
