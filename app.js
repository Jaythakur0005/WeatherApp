// Replace with your OpenWeatherMap API key
const API_KEY = '57c346e4740e2c3c003a4cb9a4823331';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherContainer = document.getElementById('weatherContainer');
const loader = document.getElementById('loader');
const errorContainer = document.getElementById('errorContainer');
const errorMessage = document.getElementById('errorMessage');

// Weather information elements
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const weatherIcon = document.getElementById('weatherIcon');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Load last searched city from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity) {
        cityInput.value = lastCity;
        handleSearch();
    }
});

async function handleSearch() {
    const city = cityInput.value.trim();
    
    if (!city) {
        showError('Please enter a city name');
        return;
    }

    try {
        showLoader();
        hideError();
        hideWeatherInfo();

        const weatherData = await fetchWeatherData(city);
        displayWeatherInfo(weatherData);
        
        // Save to localStorage
        localStorage.setItem('lastCity', city);
    } catch (error) {
        showError(error.message);
    } finally {
        hideLoader();
    }
}

async function fetchWeatherData(city) {
    const response = await fetch(
        `${API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('City not found. Please check the city name and try again.');
        }
        throw new Error('Failed to fetch weather data. Please try again later.');
    }

    return await response.json();
}

function displayWeatherInfo(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = Math.round(data.main.temp);
    weatherDescription.textContent = data.weather[0].description;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    humidity.textContent = data.main.humidity;
    windSpeed.textContent = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h

    weatherContainer.style.display = 'block';
}

function showLoader() {
    loader.style.display = 'flex';
}

function hideLoader() {
    loader.style.display = 'none';
}

function showError(message) {
    errorMessage.textContent = message;
    errorContainer.style.display = 'block';
}

function hideError() {
    errorContainer.style.display = 'none';
}

function hideWeatherInfo() {
    weatherContainer.style.display = 'none';
} 