import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Pune");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1a50d5cc2c4d8baa1e8dfbc0e5eed673`;

      const response = await fetch(url);
      const resJson = await response.json();

      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <p className="errorMsg">Weater App using React</p>
      <p className="abhijeet">Created By : Abhijeet Dhekane</p>

      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            placeholder="Enter City Name"
            className="inputFeild"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No Data found</p>
        ) : (
          <div>
            <div className="info">
              <h2 className="location">
                {" "}
                <i class="fa fa-map-marker" id="ii" aria-hidden="true"></i>
                {search}
              </h2>
              <h1 className="temp">{city.temp}°</h1>
              <h3 className="tempmin_max">
                {" "}
                Min : {city.temp_min} Cel | Max : {city.temp_max} Cel
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Tempapp;
