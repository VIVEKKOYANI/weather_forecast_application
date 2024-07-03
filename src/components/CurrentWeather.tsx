import React from "react";
import { CurrentWeatherProps } from "../types/type";

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ data, temperatureUnit }) => {
  if (!data) return null;

  const { main, weather, name } = data;
  return (
    <div className="current-weather">
      <h2>Current Weather in {name}</h2>
      <p>Temperature: {main.temp} {temperatureUnit}</p>
      <p>Condition: {weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  );
};

export default CurrentWeather;