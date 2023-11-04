function App() {
  return (
<div className="app" style={{ backgroundImage: `url('https://cdn.britannica.com/49/179449-138-9F4EC401/Overview-Berlin.jpg?w=800&h=450&c=crop')` }}>
      <div className="overlay">
        <div className="container">
          <div className="section section-inputs">
            <input type="text" name="city" placeholder="Search"></input>
            <button>°F</button>
          </div>
          <div className="section section-temperature">
            <div className="icon">
              <h3>Berlin, DE </h3>
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weather-icon"/>
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>15 °C</h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
