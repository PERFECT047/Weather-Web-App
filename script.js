/**
 * Weather App
 * OK: Complete getWeatherData() to return json response Promise
 * OK: Complete searchCity() to get user input and get data using getWeatherData()
 * OK: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //template literals to create a url with input and an API key
  const fullURL = `${URL}?q=${city}&appid=${API_KEY}&units=imerial`;
  //   console.log(fullURL);
  const weatherPromise = fetch(fullURL);
  return weatherPromise.then((response)=>{
      return response.json();
  })

}

/*
 * Retrieve city input and get the weather data
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWeatherData(city).then((response)=>{
      showWeatherData(response);
      console.log(response);
  }).catch((error)=>{
      console.log(error);
  })
  
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
  //CODE GOES HERE
  document.getElementById('city-name').innerHTML= weatherData.name;
  document.getElementById('weather-type').innerHTML= weatherData.weather[0].description;
  document.getElementById('temp').innerHTML=weatherData.main.feels_like;
  document.getElementById('min-temp').innerHTML=weatherData.main.temp_min;
  document.getElementById('max-temp').innerHTML=weatherData.main.temp_max;
}
