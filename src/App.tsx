import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import { AxiosError, ForecastData, WeatherData } from "./types/type";
import { forecastData, weatherData } from "./api/allApi";
import "./App.css";

const App: React.FC = () => {
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(
    null
  );
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [temperatureUnit, setTemperatureUnit] = useState<"metric" | "imperial">(
    "metric"
  );

  const fetchWeatherData = async (city: string) => {
    setCurrentWeather(null);
    setForecast(null);
    setLoading(true);
    try {
      setError(null);
      const currentWeatherResponse = await weatherData(city, temperatureUnit);
      setCurrentWeather(currentWeatherResponse.data);
      const forecastResponse = await forecastData(city, temperatureUnit);
      setForecast(forecastResponse.data);
    } catch (err) {
      const errorGet =
        (err as AxiosError)?.response?.data?.message ||
        "City not found or network error";
      setError(errorGet);
    } finally {
      setLoading(false);
    }
  };

  const toggleTemperatureUnit = () => {
    setTemperatureUnit((prevUnit) =>
      prevUnit === "metric" ? "imperial" : "metric"
    );
  };

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <div>
        <button onClick={toggleTemperatureUnit}>
          Switch to {temperatureUnit === "metric" ? "Fahrenheit" : "Celsius"}
        </button>
      </div>
      <SearchBar onSearch={fetchWeatherData} loading={loading} />
      {error && <p className="error">{error}</p>}
      <CurrentWeather
        data={currentWeather}
        temperatureUnit={temperatureUnit === "metric" ? "°C" : "°F"}
      />
      <Forecast
        data={forecast}
        temperatureUnit={temperatureUnit === "metric" ? "°C" : "°F"}
      />
    </div>
  );
};

export default App;