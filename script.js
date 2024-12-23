// Dark mode toggle function
let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;
    const body = document.body;
    const button = document.getElementById('dark-mode-toggle');

    if (darkMode) {
        body.classList.add('dark-mode');
        button.innerHTML = '🌞 Light Mode';
    } else {
        body.classList.remove('dark-mode');
        button.innerHTML = '🌙 Dark Mode';
    }
}

// Get weather function
async function getWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiKey = 'YOUR_API_KEY'; // Use your own API key from OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        // Update weather details
        document.getElementById('city-name').textContent = `${data.name}, ${data.sys.country}`;
        document.getElementById('temp').textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById('description').textContent = `Condition: ${data.weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById('wind').textContent = `Wind: ${data.wind.speed} m/s`;

        // Show weather info
        document.getElementById('weather-details').classList.remove('hidden');
    } catch (error) {
        console.error('Error fetching weather data', error);
        alert('Failed to fetch weather data.');
    }
}
