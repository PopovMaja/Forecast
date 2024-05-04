function updateTemperature(response) {
  let newTemperature = document.querySelector("#temperature");
  let searchedCity = document.querySelector("#city-name");
  let weatherDescription = document.querySelector("#weather-description");
  let temperature = response.data.temperature.current;
  console.log(response.data);
  weatherDescription.innerHTML = response.data.condition.description;
  searchedCity.innerHTML = response.data.city;
  newTemperature.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "594t1344a33ebb79a8c028f85db36co0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(updateTemperature);
}

function searchResault(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#enter-city");
  searchCity(cityInput.value);
}

let searchBar = document.querySelector("#enter-search-bar");
searchBar.addEventListener("submit", searchResault);

searchCity("New York City");
