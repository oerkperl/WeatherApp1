import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  WeatherPanel,
  Header,
  Hero,
  Container,
  Lable,
  BigCard,
  SmallCard,
  WeatheCards,
  WeatheCondition,
  WeatheConditionCard,
  Paragraph,
  TranspareFilm,
  WeatherIcon,
} from "../StyledComponents";

export const Weather = ({ weather }) => {
  let weatheArr;
  let iconUrl;
  if (weather.weather) {
    weatheArr = weather.weather[0];
    iconUrl = `https://openweathermap.org/img/wn/${weatheArr.icon}@2x.png`;
  }
  const [backgroundUrl, setBackgroundUrl] = useState(
    "https://i.ibb.co/sCyBVrp/Dream-Shaper-v7-weather-app-UI-beautifully-centred-for-desktop-3.jpg"
  );
  const { name, main, visibility, wind } = weather;

  const fetchWeatherImage = async (weather) => {
    try {
      const apiKey = process.env.REACT_APP_API_KEY_IMAGE;
      const unsplashApiUrl = `https://api.unsplash.com/photos/random?query=${weather}&client_id=${apiKey}`;
      const { data } = await axios(unsplashApiUrl);
      setBackgroundUrl(data.urls.small);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    fetchWeatherImage(weatheArr?.description);
  }, [weatheArr]);
  return (
    <>
      <Header>
        <Hero>
          <div>
            <h2>Here you can find a word wide weather forecast</h2>
          </div>
          <div>
            <Paragraph>
              Contented get distrusts certainty nay are frankness concealed ham.
              On unaffected resolution on considered of. No thought me husband
              or colonel forming effects. End sitting shewing who saw besides
              son musical adapted. Contrasted interested eat alteration
              pianoforte sympathize was.
            </Paragraph>
          </div>
        </Hero>
      </Header>
      <WeatherPanel>
        <Container>
          <Lable>Recent Place</Lable>
          <BigCard image={backgroundUrl}>
            <WeatherIcon>
              {weatheArr && (
                <img src={iconUrl} alt="Icon" width={50} height={50} />
              )}
            </WeatherIcon>
            <TranspareFilm>
              {weatheArr && <div>{weatheArr.main}</div>}
              <div>{Math.round(main?.temp)}°C</div>
              <div>{name}</div>
            </TranspareFilm>
          </BigCard>
          <Lable>Weather</Lable>
          <WeatheCards>
            <SmallCard image={backgroundUrl}>
              <TranspareFilm>
                <div>Feels Like</div>
                <div>{Math.round(main?.feels_like)}°C</div>
                {weatheArr && <div>{weatheArr.main}</div>}
              </TranspareFilm>
            </SmallCard>
            <SmallCard image={backgroundUrl}>
              <TranspareFilm>
                <div>Max Temp.</div>
                <div>{Math.round(main?.temp_max)}°C</div>
                {weatheArr && <div>{weatheArr.main}</div>}
              </TranspareFilm>
            </SmallCard>
            <SmallCard image={backgroundUrl}>
              <TranspareFilm>
                <div>Min Temp.</div>
                <div>{Math.round(main?.temp_min)}°C</div>
                {weatheArr && <div>{weatheArr.main}</div>}
              </TranspareFilm>
            </SmallCard>
            <SmallCard image={backgroundUrl}>
              <TranspareFilm>
                <div>Coulds</div>
                <div>{Math.round(main?.temp)}°C</div>
                {weatheArr && <div>{weatheArr.description}</div>}
              </TranspareFilm>
            </SmallCard>
          </WeatheCards>
        </Container>
        <Container>
          <WeatheCondition>
            <WeatheConditionCard>
              <span>
                <i className="fa-solid fa-water"></i>
                <i className="fa-solid fa-temperature-half"></i>
              </span>
              <div>
                <Lable>Humidity</Lable>
                <Lable>{main?.humidity}</Lable>
              </div>
              <Paragraph>
                The air quality is generally acceptable for most individuals.
                However, sensitive groups may experience minor to moderate
                symptoms from long-term exposure.
              </Paragraph>
            </WeatheConditionCard>
            <WeatheConditionCard>
              <span>
                <i className="fa-solid fa-gauge-high"></i>
              </span>
              <div>
                <Lable>Pressure</Lable>
                <Lable>{main?.pressure}</Lable>
              </div>
              <Paragraph>
                The air quality is generally acceptable for most individuals.
                However, sensitive groups may experience minor to moderate
                symptoms from long-term exposure.
              </Paragraph>
            </WeatheConditionCard>
            <WeatheConditionCard>
              <span>
                <i className="fa-solid fa-eye-low-vision"></i>
              </span>
              <div>
                <Lable>Visibility</Lable>
                <Lable>{visibility}</Lable>
              </div>
              <Paragraph>
                The air quality is generally acceptable for most individuals.
                However, sensitive groups may experience minor to moderate
                symptoms from long-term exposure.
              </Paragraph>
            </WeatheConditionCard>
            <WeatheConditionCard>
              <span>
                <i className="fa-solid fa-wind"></i>
              </span>
              <div>
                <Lable>Wind</Lable>
                <Lable>{wind?.speed}</Lable>
              </div>
              <Paragraph>
                The air quality is generally acceptable for most individuals.
                However, sensitive groups may experience minor to moderate
                symptoms from long-term exposure.
              </Paragraph>
            </WeatheConditionCard>
          </WeatheCondition>
        </Container>
      </WeatherPanel>
    </>
  );
};
