async function getWeather() {

    const city = document.getElementById("cityInput").value;

    if (city.trim() === "") {
        document.getElementById("error").innerText =
            "Please enter a city name";
        return;
    }

    try {

        const url =
            "/weather/fetch?city=" + encodeURIComponent(city);

        console.log("Calling:", url);

        const response = await fetch(url);

        console.log("Status:", response.status);

        const text = await response.text();

        console.log("Backend response:", text);

        if (!response.ok) {
            throw new Error(
                "HTTP " + response.status + ": " + text
            );
        }

        const data = JSON.parse(text);

        document.getElementById("cityName").innerText =
            data.location.name;

        document.getElementById("country").innerText =
            data.location.country;

        document.getElementById("temperature").innerText =
            data.current.temperature;

        document.getElementById("description").innerText =
            data.current.weather_descriptions[0];

        document.getElementById("weatherIcon").src =
            data.current.weather_icons[0];

        document.getElementById("feelsLike").innerText =
            data.current.feelslike + " °C";

        document.getElementById("humidity").innerText =
            data.current.humidity + " %";

        document.getElementById("windSpeed").innerText =
            data.current.wind_speed + " km/h";

        document.getElementById("pressure").innerText =
            data.current.pressure + " mb";

        document.getElementById("visibility").innerText =
            data.current.visibility + " km";

        document.getElementById("uvIndex").innerText =
            data.current.uv_index;

        document.getElementById("error").innerText = "";

    } catch (error) {

        console.error("Error:", error);

        document.getElementById("error").innerText =
            error.message;
    }
}