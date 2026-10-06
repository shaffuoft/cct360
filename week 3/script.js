let storyText =
  "I started studying, picked up my controller for a short break, and realised hours had passed.";

function showStory() {
  document.getElementById("story").innerHTML = storyText;
}

document.getElementById("storyButton").onclick = function () {
  showStory();
};
