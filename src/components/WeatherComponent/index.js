import React, { useState, useEffect } from "react";
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
} from "../StyledComponents";
import { fetchWeatherImage } from "../../Utilities/Functions";

export const Weather = ({ weather }) => {
  let weatheArr;
  let iconUrl;
  if (weather.weather) {
    weatheArr = weather.weather[0];
    iconUrl = `https://openweathermap.org/img/wn/${weatheArr.icon}@2x.png`;
  }
  const [backgroundUrl, setBackgroundUrl] = useState("");
  const { name, sys, main, visibility, wind } = weather;
  //let backdropUrl;
  //"https://i.ibb.co/sCyBVrp/Dream-Shaper-v7-weather-app-UI-beautifully-centred-for-desktop-3.jpg";

  useEffect(() => {
    fetchWeatherImage(weatheArr?.description, setBackgroundUrl);
  }, [weatheArr]);
  //const weatheArr = currentCity.weather[0];
  //console.log(weatheArr);
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
            <span>
              {weatheArr && (
                <img src={iconUrl} alt="Icon" width={50} height={50} />
              )}
            </span>
            {weatheArr && <span>{weatheArr.main}</span>}
            <span>{Math.round(main?.temp)}°C</span>
            <span>{name}</span>
          </BigCard>
          <Lable>Weather</Lable>
          <WeatheCards>
            <SmallCard image={backgroundUrl}>
              <span>Feels Like</span>
              <span>{Math.round(main?.feels_like)}°C</span>
              {weatheArr && <span>{weatheArr.main}</span>}
            </SmallCard>
            <SmallCard image={backgroundUrl}>
              <span>Max Temp.</span>
              <span>{Math.round(main?.temp_max)}°C</span>
              {weatheArr && <span>{weatheArr.main}</span>}
            </SmallCard>
            <SmallCard image={backgroundUrl}>
              <span>Min Temp.</span>
              <span>{Math.round(main?.temp_min)}°C</span>
              {weatheArr && <span>{weatheArr.main}</span>}
            </SmallCard>
            <SmallCard image={backgroundUrl}>
              <span>Coulds</span>
              <span>{Math.round(main?.temp)}°C</span>
              {weatheArr && <span>{weatheArr.description}</span>}
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
