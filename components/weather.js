import React from "react";
import styles from "../styles/Home.module.css";

export default function Weather({weatherData}) {
  const weatherStatus = weatherData.weather[0].description;
  const weatherStatusFormat =
    weatherStatus.charAt(0).toUpperCase() + weatherStatus.slice(1);
  const humidity = weatherData.main.humidity;
  const tempKelvin = weatherData.main.temp;
  const pressurehPa = weatherData.main.pressure;
  const pressureInHg = Math.floor(
    pressurehPa * 0.02953
  );
  const tempFar = Math.floor(tempKelvin * 1.8 - 459.67);
  const tempCel = Math.floor(tempKelvin - 273.15);
  const windMeterPerSec = weatherData.wind.speed;
  const windMeterMph = Math.floor(2.236937 * windMeterPerSec);
  const windDegrees = weatherData.wind.deg;
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const degToCompass = (num) => {
    var val = Math.floor(num / 22.5 + 0.5);
    var arr = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    return arr[val % 16];
  };
  const windDir = degToCompass(windDegrees);

  return (
    <div className={styles.card}>
    <h3>Current Weather</h3>
    <p>
      <img src={iconUrl} /> {weatherStatusFormat}
    </p>
    <p>
      Temperature {tempFar} &#176; F/{tempCel} &#176; C
    </p>
    <p>Humidity {humidity} %</p>
    <p>
      Wind speed {windMeterMph} mph {windDir}
    </p>
    <p>
      Pressure {pressurehPa} hPa/
      {pressureInHg} inHg
    </p>
  </div>
  )
};