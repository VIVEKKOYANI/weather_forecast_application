import axios from "axios";
import { ForecastData, WeatherData } from "../types/type";

export const weatherData = async (city: string, temperatureUnit: string) => {
  const response = await axios.get<WeatherData>(
    `${import.meta.env.VITE_FETCH_DATA_API}/weather?q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=${temperatureUnit}`
  );

  return response;
};

export const forecastData = async (city: string, temperatureUnit: string) => {
  const response = await axios.get<ForecastData>(
    `${import.meta.env.VITE_FETCH_DATA_API}/forecast?q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }&units=${temperatureUnit}`
  );
  return response;
};