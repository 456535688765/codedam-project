let apiKey = "Replace this with your api key"
let button = document.querySelector("button")
let input = document.querySelector("input")
let weatherInfo = document.querySelector(".weather-info")

button.addEventListener("click", displayData)

function displayData(){
let city = input.value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=YourApikey
    `).then((response) => response.json()).then((data) => {
      displayWeather(data);
    }).catch((error) => {
        console.error("Error while Fetching Data:", error);
        alert("Unable to fetch data, Please Try Again");
      });
    
}
