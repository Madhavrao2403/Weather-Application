# Weather-Application

Fetches real-time weather data using a Spring Boot REST API and returns it to the frontend via templates. A learning project to understand how APIs fetch and serve data.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Running the application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Example requests](#example-requests)
- [Notes & Security](#notes--security)
- [Contributing](#contributing)
- [License](#license)

## Features

- Simple Spring Boot REST controller to fetch current weather for a given city using the Weatherstack API.
- Returns upstream JSON directly to the caller.
- Minimal learning-focused codebase suitable for beginners.

## Prerequisites

- Java 17 (or compatible JDK) installed
- Maven (or the build tool used in the project) installed
- Network access to call the Weatherstack API
- A Weatherstack API key (or another weather API) — sign up at https://weatherstack.com/

## Configuration

Currently the repository contains a controller that uses a hard-coded Weatherstack API key. It's recommended to replace that with an environment variable for security.

Set environment variable (example):

- On macOS / Linux:

  export WEATHERSTACK_API_KEY=your_api_key_here

- On Windows (PowerShell):

  $env:WEATHERSTACK_API_KEY = "your_api_key_here"

Then update the controller to read the key from the environment or application properties rather than hard-coding it.

Tip: In Spring Boot you can add in application.properties:

spring.application.name=weather-application
weatherstack.api.key=${WEATHERSTACK_API_KEY}

And inject it with `@Value("${weatherstack.api.key}")`.

## Running the application

1. Build the project:

   mvn clean package

2. Run with Maven (development):

   mvn spring-boot:run

3. Or run the built jar:

   java -jar target/*.jar

The app should start on the default port (usually 8080) unless configured otherwise.

## API Endpoints

- GET /weather/fetch?city={cityName}

  Returns the raw JSON response from Weatherstack for the requested city.

Example: /weather/fetch?city=London

Response: JSON object returned by Weatherstack's current endpoint.

## Example requests

Using curl (replace CITY and set API key appropriately in the code or controller):

curl "http://localhost:8080/weather/fetch?city=London"

A successful response will return JSON similar to what the Weatherstack API provides for the current weather.

## Notes & Security

- Do NOT commit API keys or other secrets to source control. The repository currently contains a hard-coded API key — remove it and use environment variables or Spring Boot configuration.
- Consider adding retries and proper error handling / response mapping instead of returning upstream raw JSON directly, especially for production use.
- Consider adding logging (SLF4J / Logback) and tests.

## Contributing

This is a learning project. Contributions and suggestions are welcome — open an issue or submit a pull request with improvements such as:

- Move API key to configuration
- Add unit/integration tests
- Improve error handling and response mapping
- Add a simple frontend template to display weather nicely

## License

This project is provided as-is for learning purposes. Add a proper LICENSE file if you plan to share or publish under a specific license.
