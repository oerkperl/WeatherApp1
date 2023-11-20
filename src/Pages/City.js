import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Weather } from "../components/WeatherComponent";
import axios from "axios";

const City = () => {
  const { city } = useParams();

  const [currentCity, setCurrentCity] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWeather = async (cityName) => {
    const apiKey = "c816bfd866472a5d5c34043417f2524c";
    try {
      setIsLoading(true);
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
      const { data } = await axios(apiUrl);
      //console.log(data);
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

  return <Weather weather={currentCity} />;
};

export default City;
