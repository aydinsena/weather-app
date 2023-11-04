import React from "react";
import { PiArrowDown, PiArrowUp, PiWind, PiCloudRain } from "react-icons/pi";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

import "./weatherDetails.css";

const WeatherDetails = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";

  const cards = [
    {
        id: 1,
        icon: <PiCloudRain/>,
        title: "precipitation",
        data: weather.rain.toFixed(), 
        unit: "mm",
      },
  
    {
      id: 2,
      icon: <PiArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <PiArrowUp />,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 5,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.pressure,
      unit: "hPa",
    },
    {
      id: 6,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 7,
      icon: <PiWind />,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  
  ];

  return (
    <div className="section section-descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div>
            <div className="description-card">
             {icon}
              <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetails;
