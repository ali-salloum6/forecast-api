// public/script.js
const form = document.getElementById('forecast-form');
const submitBtn = document.getElementById('submit-btn');
const forecastContainer = document.getElementById('forecast-container');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const lat = document.getElementById('lat').value;
  const lon = document.getElementById('lon').value;

  try {
    const response = await fetch(`/api/forecast?lat=${lat}&lon=${lon}`);
    const data = await response.json();

    const forecastHTML = Object.keys(data).map((date) => {
        const forecast = data[date];
        return `<p>${date}: ${forecast.temperature}°C</p>`;
      }).join('');

    forecastContainer.innerHTML = forecastHTML;
  } catch (error) {
    console.error(error);
    forecastContainer.innerHTML = 'Error fetching forecast';
  }
});