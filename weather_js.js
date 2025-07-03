// Demo weather data
const demoWeatherData = {
    'new york': {
        city: 'New York',
        country: 'US',
        temp: 22,
        feels_like: 25,
        humidity: 65,
        wind_speed: 12,
        pressure: 1013,
        visibility: 10,
        description: 'partly cloudy',
        icon: '⛅'
    },
    'london': {
        city: 'London',
        country: 'UK',
        temp: 18,
        feels_like: 16,
        humidity: 78,
        wind_speed: 8,
        pressure: 1020,
        visibility: 8,
        description: 'light rain',
        icon: '🌧️'
    },
    'tokyo': {
        city: 'Tokyo',
        country: 'JP',
        temp: 28,
        feels_like: 32,
        humidity: 72,
        wind_speed: 15,
        pressure: 1008,
        visibility: 12,
        description: 'sunny',
        icon: '☀️'
    },
    'mumbai': {
        city: 'Mumbai',
        country: 'IN',
        temp: 32,
        feels_like: 38,
        humidity: 85,
        wind_speed: 10,
        pressure: 1005,
        visibility: 6,
        description: 'humid',
        icon: '🌫️'
    },
    'sydney': {
        city: 'Sydney',
        country: 'AU',
        temp: 24,
        feels_like: 27,
        humidity: 60,
        wind_speed: 18,
        pressure: 1015,
        visibility: 15,
        description: 'clear sky',
        icon: '🌞'
    },
    'paris': {
        city: 'Paris',
        country: 'FR',
        temp: 20,
        feels_like: 19,
        humidity: 70,
        wind_speed: 7,
        pressure: 1018,
        visibility: 9,
        description: 'overcast',
        icon: '☁️'
    },
    'vijayawada': {
        city: 'Vijayawada',
        country: 'IN',
        temp: 34,
        feels_like: 39,
        humidity: 75,
        wind_speed: 12,
        pressure: 1002,
        visibility: 8,
        description: 'hot and humid',
        icon: '🔥'
    }
};

const forecastData = [
    { day: 'Today', icon: '☀️', temp: '28°/18°' },
    { day: 'Tomorrow', icon: '⛅', temp: '25°/16°' },
    { day: 'Wednesday', icon: '🌧️', temp: '22°/14°' },
    { day: 'Thursday', icon: '🌤️', temp: '26°/17°' },
    { day: 'Friday', icon: '☁️', temp: '24°/15°' }
];

function showLoading() {
    document.getElementById('loadingDiv').style.display = 'block';
    document.getElementById('errorDiv').style.display = 'none';
    document.getElementById('weatherCards').innerHTML = '';
    document.getElementById('forecastSection').style.display = 'none';
}

function hideLoading() {
    document.getElementById('loadingDiv').style.display = 'none';
}

function showError() {
    document.getElementById('errorDiv').style.display = 'block';
    hideLoading();
}

function createWeatherCard(data) {
    return `
        <div class="weather-card">
            <h2 class="city-name">${data.city}, ${data.country}</h2>
            <div class="weather-icon">${data.icon}</div>
            <div class="temperature">${data.temp}°C</div>
            <div class="weather-desc">${data.description}</div>
            <div class="weather-details">
                <div class="detail-item">
                    <div class="detail-label">Feels Like</div>
                    <div class="detail-value">${data.feels_like}°C</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Humidity</div>
                    <div class="detail-value">${data.humidity}%</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Wind Speed</div>
                    <div class="detail-value">${data.wind_speed} km/h</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Pressure</div>
                    <div class="detail-value">${data.pressure} hPa</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">Visibility</div>
                    <div class="detail-value">${data.visibility} km</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">UV Index</div>
                    <div class="detail-value">${Math.floor(Math.random() * 10) + 1}</div>
                </div>
            </div>
        </div>
    `;
}

function createForecastItems() {
    return forecastData.map(item => `
        <div class="forecast-item">
            <div class="forecast-day">${item.day}</div>
            <div class="forecast-icon">${item.icon}</div>
            <div class="forecast-temp">${item.temp}</div>
        </div>
    `).join('');
}

function searchWeather() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim().toLowerCase();
    
    if (!cityName) {
        showError();
        return;
    }

    showLoading();

    // Simulate API call delay
    setTimeout(() => {
        const weatherData = demoWeatherData[cityName];
        
        if (weatherData) {
            hideLoading();
            document.getElementById('errorDiv').style.display = 'none';
            
            // Display weather card
            document.getElementById('weatherCards').innerHTML = createWeatherCard(weatherData);
            
            // Display forecast
            document.getElementById('forecastGrid').innerHTML = createForecastItems();
            document.getElementById('forecastSection').style.display = 'block';
        } else {
            showError();
        }
    }, 1000);
}

// Load default cities on page load
function loadDefaultCities() {
    const defaultCities = ['vijayawada', 'new york', 'london'];
    let cardsHTML = '';
    
    defaultCities.forEach(city => {
        const data = demoWeatherData[city];
        if (data) {
            cardsHTML += createWeatherCard(data);
        }
    });
    
    document.getElementById('weatherCards').innerHTML = cardsHTML;
    document.getElementById('fore