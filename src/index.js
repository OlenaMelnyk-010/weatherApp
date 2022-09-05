
//show current time
function formatDate(currentTime) {

let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours <10) { 
  hours = `0${hours}`
  };
let minutes = now.getMinutes();
if (minutes < 10) { 
  minutes = `0${minutes}`
};

return `${day} ${hours}:${minutes}`
}

let timeAtForm = document.querySelector("#data");
let now = new Date();
    timeAtForm.innerHTML = formatDate(now);

    // units

function clickF (event) {
  event.preventDefault();
  let mainTempa = document.querySelector("#mainTempa");
  mainTempa.innerHTML = Math.round(mainTempa.textContent * 1.8 + 32);
}

function clickC(event) {
  event.preventDefault();

  let mainTempa = document.querySelector("h3");
  mainTempa.innerHTML = Math.round((mainTempa.textContent - 32)/1.8);
}

let tempaCilciy = document.querySelector("#celsiy-link");
let tempaFeringat = document.querySelector("#faringait-link");
tempaCilciy.addEventListener("click", clickC);
tempaFeringat.addEventListener("click", clickF);

// show city and temperature
 
  function showTemperature(responce) {
    document.querySelector("#city").innerHTML = responce.data.name;
    document.querySelector("#mainTempa").innerHTML = Math.round(responce.data.main.temp);
    document.querySelector("#humidity").innerHTML = responce.data.main.humidity;   
    document.querySelector("#wind").innerHTML = Math.round(responce.data.wind.speed);  
    document.querySelector("#discription").innerHTML = responce.data.weather[0].main;
  }

  function hundlSubmit(event) {
    event.preventDefault();
    let cityName = document.querySelector("#search").value;
    seachCity(cityName);
   
  }

  document.querySelector("#form").addEventListener("submit", hundlSubmit);
  
//defoult temperature
function seachCity(cityName) {
  let apiKey = "c3717712699a76ea2802ba838ac61fc8";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
   axios.get(apiUrl).then(showTemperature);
}

//show current temperayure

function seachLocation(position) {
  let apiKey = "c3717712699a76ea2802ba838ac61fc8";
   let lat = position.coords.latitude;
   let lot = position.coords.longitude;
   let units = "metric";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

function showGeolocatoinCity(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(seachLocation);
}
  
let geolacationElement = document.querySelector("#geolocationForm");
    geolacationElement.addEventListener("click", showGeolocatoinCity);

  //seachCity("Chernihiv");
