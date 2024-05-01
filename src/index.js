function searchResault(event) {
  event.preventDefault();
  cityInput = document.querySelector("#enter-city");
  searchedCity = document.querySelector("#city-name");
  searchedCity.innerHTML = cityInput.value;
}

let searchBar = document.querySelector("#enter-search-bar");
searchBar.addEventListener("submit", searchResault);
