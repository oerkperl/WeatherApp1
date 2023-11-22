import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Weather } from "../components/WeatherComponent";
import { SpinnerContainer } from "../components/StyledComponents";

const apiKey = process.env.REACT_APP_API_KEY_WEATHER;
const City = () => {
  const { city } = useParams();
  const [currentCity, setCurrentCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWeather = async (cityName) => {
    try {
      setIsLoading(true);
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
      const { data } = await axios(apiUrl);
      setCurrentCity(data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  useEffect(() => {
    getWeather(city);
  }, [city]);

  return (
    <>
      {isLoading && <SpinnerContainer size="60px" />}
      <Weather weather={currentCity} />
    </>
  );
};

export default City;
