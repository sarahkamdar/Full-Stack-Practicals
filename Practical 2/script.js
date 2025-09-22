const API_KEY = '50209e3fdb0c4e409dd53237250207';
const API_URL = 'https://api.weatherapi.com/v1/current.json';


async function getWeather() {
    const cityInput = document.getElementById('cityInput');
    const weatherResult = document.getElementById('weatherResult');
    const cityName = cityInput.value.trim();
    
    if (cityName === '') {
        weatherResult.innerHTML = 'Please enter a city name';
        return;
    }
    

    weatherResult.innerHTML = 'Loading...';
    
    try {

        const response = await fetch(`${API_URL}?key=${API_KEY}&q=${cityName}&aqi=no`);
        const data = await response.json();
        
        if (response.ok) {

            const temperature = Math.round(data.current.temp_c);
            const location = data.location.name;
            weatherResult.innerHTML = `The weather in ${location} is ${temperature}°C`;

            
            let bgColor;
            if (temperature <= 10) {
                bgColor = '#4a90e2';
            } else if (temperature <= 20) {
                bgColor = '#50e3c2';
            } else if (temperature <= 30) {
                bgColor = '#f5d76e';
            } else if (temperature <= 40) {
                bgColor = '#f5a623';
            } else {
                bgColor = '#d7263d';
            }
            document.body.style.backgroundColor = bgColor;
        } else {

            weatherResult.innerHTML = `City "${cityName}" not found. Please try another city.`;
        }
    } catch (error) {

        weatherResult.innerHTML = 'Error fetching weather data. Please check your internet connection.';
        console.error('Weather API Error:', error);
    }
    

    cityInput.value = '';
}


document.getElementById('getWeatherBtn').addEventListener('click', getWeather);


document.getElementById('cityInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        getWeather();
    }
});
