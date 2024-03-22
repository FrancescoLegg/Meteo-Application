"use strict";
const searchButton = document.getElementById("search-button");
const windspeed = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const situation = document.getElementById("situation");
const degree = document.getElementById("degree-value");
const image = document.getElementById("logo-meteo");
const searchBar = document.getElementById("search-bar");
const degreeContainer = document.getElementById("degree-type");
const TOKEN = "6763a2f43ca74a414fac855b3be5a700";
function SearchMeteo(TOKEN) {
    let city = document.getElementById("search-bar");
    let cityValue = city.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=${TOKEN}`)
        .then(response => response.json())
        .then(json => {
        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'assets/clear.png';
                break;
            case 'Rain':
                image.src = 'assets/rain.png';
                break;
            case 'Snow':
                image.src = 'assets/snow.png';
                break;
            case 'Clouds':
                image.src = 'assets/cloud.png';
                break;
            case 'Haze':
                image.src = 'assets/mist.png';
                break;
            case 'Drizzle':
                image.src = 'assets/drizzle.png';
                break;
            default:
                image.src = '';
        }
        image.style.display = "block";
        situation.innerHTML = json.weather[0].main;
        degreeContainer.style.display = "block";
        degree.innerHTML = json.main.temp;
        windspeed.innerHTML = json.wind.speed + "km/h" + "<br>windspeed";
        humidity.innerHTML = json.main.humidity + "%" + "<br>Humidity";
    });
}
searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener("click", (event) => {
    SearchMeteo(TOKEN);
});
