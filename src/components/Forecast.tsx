import React from "react";
import { ForecastProps } from "../types/type";

const Forecast: React.FC<ForecastProps> = ({ data, temperatureUnit }) => {
  if (!data) return null;

  const forecastItems = data.list
    .filter((_, index) => index % 8 === 0)
    .map((item) => (
      <div key={item.dt} className="forecast-item">
        <p>{new Date(item.dt_txt).toLocaleDateString()}</p>
        <p>Temperature: {item.main.temp} {temperatureUnit}</p>
        <p>Condition: {item.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      </div>
    ));

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-items">{forecastItems}</div>
    </div>
  );
};

export default Forecast;