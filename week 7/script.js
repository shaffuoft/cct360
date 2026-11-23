let url =
  "https://api.open-meteo.com/v1/forecast?latitude=43.59&longitude=-79.640015&current=cloud_cover";

function getWeather() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let cloud = data.current.cloud_cover;

      document.querySelector("#cloud-cover").textContent = cloud + "%";
      document.querySelector("#cloud-bar").style.width = cloud * 2 + "px";

      if (cloud < 30) {
        document.body.className = "clear";
        document.querySelector("#message").textContent = "Mostly clear sky";
      } else if (cloud < 70) {
        document.body.className = "partly-cloudy";
        document.querySelector("#message").textContent = "Some clouds today";
      } else {
        document.body.className = "cloudy";
        document.querySelector("#message").textContent = "Very cloudy today";
      }
    })
    .catch((error) => {
      console.log(error);
      document.querySelector("#message").textContent = "Weather not available";
    });
}

getWeather();

document.querySelector("#check-button").addEventListener("click", getWeather);
