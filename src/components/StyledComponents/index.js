import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Link } from "react-router-dom";
const accentColor = "#0D084D";
export const GlobalStyle = createGlobalStyle`
  
  * { 
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    font-family: 'Plus Jakarta Sans', sans-serif;
    position:relative;
  }
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerContainer = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: ${(props) => (props.size ? props.size : "40px")};
  height: ${(props) => (props.size ? props.size : "40px")};
  animation: ${spin} 1s linear infinite;
  position: absolute;
  top: 25%;
  left: 50%;
  z-index: 11;
`;

export const Wrapper = styled.div`
  display: flex;
  border-bottom: 1px solid lightgrey;
  &.sidebar-active {
    @media (max-width: 1000px) {
      position: relative;
      &::before {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 0;
      }
    }
  }
`;

export const Sidebar = styled.div`
  border-right: 1px solid lightgray;
  width: 300px;
  padding-left: 1rem;
  position: relative;
  @media (max-width: 1000px) {
    &.sidebar-active {
      position: absolute;
      z-index: 5;
      background: #fff;
      height: 100%;
    }
  }
`;
export const Button = styled.button``;
export const Menu = styled(Button)`
  position: absolute;
  margin: 0.5rem 0 0 1rem;
  font-size: 20px;
  border: none;
  color: ${accentColor};
  width: 30px;
  height: 30px;
  text-align: center;
  z-index: 10;
  &:hover {
    background-color: ${accentColor};
    color: #fff;
  }
  &.sidebar-active {
    margin: 0.5rem 0 0 2rem;
  }
`;

export const OutletComponent = styled.div`
  width: 100%;
`;
export const Logo = styled.div`
  margin-top: 50px;
  img {
    width: 150px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-deirection: row;
`;
export const List = styled.ul`
  list-style-type: none;

  width: 90%;
`;
export const Item = styled.li`
  margin: 0.5rem 0;
`;
export const CityItem = styled(Item)`
  display: flex;
  padding: 0.5rem 0;
  font-size: 12px;
  width: 100%;
  transition: all 0.3s;
  span {
    margin-right: 0.5rem;
  }
  span:first-child,
  span:last-child {
    display: none;
  }
  span:nth-child(4) {
    margin-right: auto;
  }

  &:hover {
    border-radius: 2px;
    background-color: rgba(0, 0, 0, 0.07);
    padding: 0.5rem 0.5rem;
    transition: all 0.5s;
    span:first-child,
    span:last-child {
      display: inline;
      transition: all 1s;
      color: crimson;
      font-wight: bold;
      font-size: 14px;
    }
  }

  @media (max-width: 685px) {
    span:first-child,
    span:last-child {
      display: inline;
      color: crimson;
    }
  }
`;
export const DummyCity = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  width: 95%;
  height: 30px;
  padding: 0.5rem;
  border: none;
`;
export const Input = styled.input`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  width: 95%;
  padding: 0.5rem;
  border: none;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Header = styled.header`
  width: 100%;
  min-height: 150px;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid lightgrey;
  @media (max-width: 855px) {
    min-height: 100px;
  }
`;
export const Paragraph = styled.p`
  font-size: 14px;
  text-align: justify;
  font-weight: 450;
  color: ${accentColor};
`;
export const Hero = styled.div`
  color: ${accentColor};
  display: flex;

  div:first-child {
    width: 50%;

    padding: 2.5rem 2rem;
    h2 {
      font-weight: 600;

      width: 300px;
    }
  }

  div:last-child {
    width: 50%;
    padding: 2.5rem 2rem;

    box-sizing: border-box;
  }

  @media (max-width: 855px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0;
    div:first-child {
      width: 100%;
      display: flex;
      padding: 0 0;
      text-align: center;
      justify-content: center;
      h2 {
        font-weight: 600;
      }
    }

    div:last-child {
      width: 100%;
      display: flex;
      justify-content: center;
      padding: 0.5rem 0.5rem;
      p {
        font-size: 11px;
        text-align: center;
      }
    }
  }
`;
export const Container = styled.div`
  width: 50%;
`;

export const WeatherPanel = styled.div`
  display: flex;
  position: relative;
  ${Container}:first-child {
    padding: 2rem;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${Container} {
      width: 100%;
      box-sizing: border-box;
    }
    ${Container}:nth-child(2) {
      height: 100px;
      position: sticky;
      left: 0;
      bottom: 0;
      z-index: 2;
      background: #fff;
      padding: 0 2rem;
    }
  }
`;
export const Lable = styled.label`
  color: ${accentColor};
  font-weight: bold;
  font-size: 16px;
`;
const Card = styled.div.attrs((props) => ({
  image:
    props.image ||
    "https://i.ibb.co/sCyBVrp/Dream-Shaper-v7-weather-app-UI-beautifully-centred-for-desktop-3.jpg",
}))`
  color: #fff;
  display: flex;
  min-height: 100px;
  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.16),
    0 3px 6px rgba(0, 0, 0, 0.23);
`;
export const TranspareFilm = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 0.25rem;
`;

export const WeatherIcon = styled.div`
  position: absolute;
  z-index: 3;
  right: 0;
`;
export const BigCard = styled(Card)`
  margin: 1rem 0;

  background: url(${(props) => props.image}});
  background-size: cover;
  background-position: center;
  position: relative;
  div:nth-child(3) {
    font-size: 28px;
  }
`;

export const SmallCard = styled(Card)`
  margin-top: 1rem;
  width: 22.5%;
  background: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 1189px) {
    width: 47.5%;
    margin: 2.5% 0;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const WeatheCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const WeatheCondition = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid lightgrey;
  cursor: pointer;
  @media (max-width: 750px) {
    flex-direction: row;
  }
`;

export const WeatheConditionCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  min-height: 75px;
  border-bottom: 1px solid lightgrey;
  box-sizing: border-box;

  div {
    display: flex;
    justify-content: space-between;
  }

  ${Paragraph} {
    font-size: 12px;
    font-weight: 500;
  }

  &:hover {
    border-left: 2px solid ${accentColor};
  }

  @media (max-width: 750px) {
    border: 1px solid lightgrey;
    width: 25%;
    padding: 0.5rem;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    div {
      flex-direction: column;
    }
  }
`;
