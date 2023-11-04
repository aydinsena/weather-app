const API_KEY = "4c455cff615f8179bec38b799ffe9a24";

const createIconURL =  (iconid) => `https://openweathermap.org/img/wn/${iconid}@2x.png`

const getData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((response) => response.json())
    .then((data) => data);

  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country },
    name,
  } = data;

  const { description, icon } = weather[0];

  return {
    description,
    iconURL: createIconURL(icon),
    temp,
    feels_like,
    temp_max,
    temp_min,
    pressure,
    humidity,
    speed,
    country,
  };
};

export { getData };
