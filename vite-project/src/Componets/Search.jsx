import searchImage from '../assets/search.png';


const weatherImages = {
  search:searchImage
};

export const Search = ({ weather, setWeather, fetchWeatherData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData(); // Fetch weather data when the form is submitted
  };

  return (
    <section>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            placeholder="Enter City Name"
            autoComplete="off"
          />
          <img src={searchImage} alt="search-image" onClick={handleSubmit} />
          
        </form>
      </div>
    </section>
  );
};
