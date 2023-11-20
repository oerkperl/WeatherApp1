//const [flagUrl, setFlagUrl] = useState("");
//const { sys, main, name, id } = city;
import axios from "axios";

export const fetchFlag = async (countryCode, handler) => {
  try {
    const { data } = await axios(
      `https://restcountries.com/v3.1/alpha/${countryCode}`
    );
    const flagUrl = data[0].flags.svg;
    handler(flagUrl);
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};

export const fetchCountryInfo = async (handler, setFlagUrl) => {
  try {
    const position = await getCurrentPosition();
    const apiKey = "dd882254e4a845e8a90a1036f2f03bbc";
    const { latitude, longitude } = position.coords;
    const { data } = await axios(
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`
    );
    const country = data.results[0].components;
    handler(country);
    fetchFlag(country.country_code, setFlagUrl);
  } catch (error) {
    console.error("Error:", error);
  }
};
