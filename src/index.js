function updateForecastInfo(response) {
  let newTemperature = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let searchedCity = document.querySelector("#city-name");
  let weatherDescription = document.querySelector("#weather-description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#wind-speed");
  let mph = response.data.wind.speed;
  let realFeel = document.querySelector("#real-feel");
  let feelsLike = response.data.temperature.feels_like;
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  console.log(response);
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="icon"/>`;
  timeElement.innerHTML = formatDate(date);
  realFeel.innerHTML = Math.round(feelsLike);
  windSpeed.innerHTML = Math.round(mph);
  humidityElement.innerHTML = response.data.temperature.humidity;
  weatherDescription.innerHTML = response.data.condition.description;
  searchedCity.innerHTML = response.data.city;
  newTemperature.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();

  let dateNumber = date.getDate();
  let year = date.getFullYear();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[date.getMonth()];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}<br>${month}/${dateNumber}/${year}<br>${day}`;
}

function searchCity(city) {
  let apiKey = "594t1344a33ebb79a8c028f85db36co0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateForecastInfo);
}

function searchResault(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#enter-city");
  searchCity(cityInput.value);
}

let searchBar = document.querySelector("#enter-search-bar");
searchBar.addEventListener("submit", searchResault);

searchCity("New York City");
