Weather Forecast App
==========================

A simple weather forecast application that displays the weather forecast for a given location. The app was made as a take-home task for a job application. The task was to figure out how the API of [yr.no](yr.no) works, and then use it to retrieve the forecast for the next 10 days around 14:00 in Moscow. Alternatively, the user should be able to specify the coordinates of a location.

![screenshot](https://github.com/ali-salloum6/forecast-api/blob/main/screenshot.png?raw=true)

Getting Started
---------------

### Prerequisites

* Node.js (version 18.18.1 was used)
* Docker (optional)

### Installation

1. Clone the repository: 
   ```
   git clone https://github.com/ali-salloum6/forecast-api
   ```
2. Navigate to the repository directory 
   ```
   cd forecast-api
   ```
3. Install dependencies: 
   ```
   npm install
   ```
4. Start the application: 
   ```
   node app.js
   ```

### Dockerization

1. Build the Docker image: 
   ```
   docker build -t my-weather-app .
   ```
2. Run the Docker container: 
   ```
   docker run -p 3000:3000 my-weather-app
   ```

Usage
-----

1. Open a web browser and navigate to http://localhost:3000
2. Enter a latitude and longitude (or leave blank for Moscow) and click "Get Forecast"
3. View the current weather and forecast for the selected location

API Endpoints
--------------

`/api/forecast`: Returns the current weather and forecast for a given location.

Optinoally, you can add `lat` and `lon` parameteres for latitude and longtitude. Example: `/api/forecast?lat=55.7&lon=37.6`


Development
------------

* `app.js`: The express server file
* `script.js`: The main frontend script
* `utils.js`: Utility functions for data processing
* `index.html`: The HTML template for the application

License
-------

This project is licensed under the MIT License.

Stack
---------------

* [yr.no](https://yr.no/) for providing weather data
* [Node.js](https://nodejs.org/) for the application runtime
* [Express.js](https://expressjs.com/) for running the web server
* [Docker](https://www.docker.com/) for containerization

Authors
---------

* [Ali Salloum](https://github.com/ali-salloum6)
