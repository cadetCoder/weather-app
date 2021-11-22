//https://home.openweathermap.org/api_keys
// api key : 82005d27a116c2880c8f0fcb866998a0

//SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {};

weather.temperature = {
  unit: "celsius"
}

// APP CONST AND VAR
const KELVIN = 273;
// API Key
const key = "cd4738e1a11c871739d95f5c440bd48d";

//CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(setPosition, showError);
    }else{
      notificationElement.style.display= "block";
      notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
    }

// SET USER'S POSITION

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

// SHOW AN ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE

function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER DATA FROM API PROVIDER
function getWeather(latitude, longitude){
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

  fetch(api)
    .then(function(response){
      let data = response.json();
      return data;
    })
    .then(function(data){
      weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      weather.description =  data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city =  data.name;
      weather.country = data.sys.country;
    })
    .then(function(){
      displayWeather();
    });
}

//DISPLAY WEATHER TO UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// Celcius to Fahrenheit conversion

function celsiusToFahrenheit(temperature){
  return (temperature * 9/5) + 32;
}

//WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENT
tempElement.addEventListener("click", function(){
  if(weather.temperature.value === undefined) return;

    if(weather.temperature.unit == "celcius"){
      let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
      fahrenheit = Math.floor(fahrenheit);
    }
})