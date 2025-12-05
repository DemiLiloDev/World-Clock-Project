function updateTime() {
  let cityElements = document.querySelectorAll(".city");

  cityElements.forEach((cityElement) => {
    let timezone = cityElement.dataset.timezone;
    if (timezone) {
      let dateElement = cityElement.querySelector(".date");
      let timeElement = cityElement.querySelector(".time");
      let cityTime = moment().tz(timezone);

      dateElement.innerHTML = cityTime.format("MMMM Do YYYY");
      timeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
    }
  });
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "") {
    showDefaultCities();
    return;
  }

  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city" data-timezone="${cityTimeZone}">
        <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>
        <a href="/" class="back-link">← Back to all cities</a>
  `;

  document.querySelector(".back-link").addEventListener("click", function (e) {
    e.preventDefault();
    showDefaultCities();
    document.querySelector("#city").value = "";
  });
}

function showDefaultCities() {
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city" data-timezone="Africa/Blantyre" id="Blantyre">
      <div>
        <h2>Blantyre</h2>
        <div class="date"></div>
      </div>
      <div class="time"></div>
    </div>
    <div class="city" data-timezone="America/New_York" id="new-york">
      <div>
        <h2>New York</h2>
        <div class="date"></div>
      </div>
      <div class="time"></div>
    </div>
    <div class="city" data-timezone="Pacific/Auckland" id="auckland">
      <div>
        <h2>Auckland</h2>
        <div class="date"></div>
      </div>
      <div class="time"></div>
    </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
