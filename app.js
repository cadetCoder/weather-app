//https://home.openweathermap.org/api_keys
// api key : cd4738e1a11c871739d95f5c440bd48d

//SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");

// App data
const weather = {

};

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

//SET USER'S POSITION

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
}