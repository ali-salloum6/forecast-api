// Get references to the form, submit button, and forecast container elements
const form = document.getElementById("forecast-form");
const submitBtn = document.getElementById("submit-btn");
const forecastContainer = document.getElementById("forecast-container");

// Add an event listener to the form's submit event
form.addEventListener("submit", async e => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the latitude and longitude values from the input fields
  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;

  try {
    // Make a GET request to the /api/forecast endpoint with the lat and lon parameters
    const response = await fetch(`/api/forecast?lat=${lat}&lon=${lon}`);

    // Parse the response as JSON
    const data = await response.json();

    // Create an HTML string to display the forecast data
    const forecastHTML = Object.keys(data)
      .map(date => {
        // For each date in the data, create a paragraph element with the date and temperature
        const forecast = data[date];
        return `<p>${date}: ${forecast.temperature}°C</p>`;
      })
      .join("");

    // Set the innerHTML of the forecast container to the generated HTML
    forecastContainer.innerHTML = forecastHTML;
  } catch (error) {
    // If there's an error, log it to the console and display an error message
    console.error(error);
    forecastContainer.innerHTML = "Error fetching forecast";
  }
});
