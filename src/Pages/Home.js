import React, { useEffect, useState } from "react";
import { getCurrentPosition } from "../Utilities/Functions";
import { Weather } from "../components/WeatherComponent";

import axios from "axios";

const Home = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentLocationWeather = async () => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const apiKey = "c816bfd866472a5d5c34043417f2524c";
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
      const { data } = await axios.get(apiUrl);
      //console.log(data);
      setCurrentLocation(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  return <Weather weather={currentLocation} />;
};

export default Home;
