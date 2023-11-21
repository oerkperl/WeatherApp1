import { Outlet, useNavigate, useParams } from "react-router-dom";
import { fetchCountryInfo } from "../../Utilities/Functions";
import axios from "axios";
import {
  Nav,
  List,
  CityItem,
  Sidebar,
  Wrapper,
  OutletComponent,
  Item,
  Input,
  Logo,
  GlobalStyle,
  StyledLink,
  Menu,
} from "../StyledComponents";
import { City } from "../CityComponent";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const navigate = useNavigate();
  const { city } = useParams();
  const [cities, setCities] = useState([]);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState("");
  const [flagUrl, setFlagUrl] = useState("");
  const [isSidebarActive, setISidebarActive] = useState(true);
  const [screenSize, setScreenSize] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value.trim().toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cities.some((city) => city.name.toLowerCase() === value && value)) {
      navigate(value);
      setValue("");
      handleDismis();
      return;
    }
    getWeather(value);
    setValue("");
  };

  const getWeather = async (city, id) => {
    const apiKey = process.env.REACT_APP_API_KEY_WEATHER;
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      //console.log(data);
      if (!id) {
        const updatedCities = [...cities, data];
        localStorage.setItem("citiesArray", JSON.stringify(updatedCities));
        setCities(updatedCities);
        navigate(city);
      } else {
        updateCityRecord(data, id);
      }
      handleDismis();
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  const updateCityRecord = (passedDate, passedId) => {
    const updatedCities = cities.map((city) => {
      if (city.id === passedId) {
        city = passedDate;
      }
      return city;
    });
    localStorage.setItem("citiesArray", JSON.stringify(updatedCities));
    setCities(updatedCities);
  };

  const handleUpdate = (id, name) => {
    getWeather(name, id);
    handleDismis();
  };

  useEffect(() => {
    fetchCountryInfo(setCountry, setFlagUrl);
    const citiesString = localStorage.getItem("citiesArray");
    if (citiesString) {
      const citiesArray = JSON.parse(citiesString);
      setCities(citiesArray);
    }
  }, []);

  const handleDelete = (id, cityName) => {
    const updatedCities = cities.filter((city) => city.id !== id);
    localStorage.setItem("citiesArray", JSON.stringify(updatedCities));
    setCities(updatedCities);

    if (city === cityName.toLowerCase()) {
      navigate("/");
    }
  };

  const getScreenSize = () => {
    const currentWidth = window.innerWidth;
    const currentSize = `Width: ${currentWidth}`;
    setScreenSize(currentSize);
    if (currentWidth <= 1000) {
      setISidebarActive(false);
    } else {
      setISidebarActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenSize);
    getScreenSize();
    return () => {
      window.removeEventListener("resize", getScreenSize);
    };
  }, []);

  const handleDismis = () => {
    const currentWidth = window.innerWidth;
    if (currentWidth <= 1000) {
      setISidebarActive(false);
    }
  };

  const activateSidebar = () => {
    setISidebarActive((prev) => !prev);
  };

  return (
    <>
      <GlobalStyle />
      <Menu
        onClick={activateSidebar}
        className={isSidebarActive ? "" : "sidebar-active"}
      >
        {isSidebarActive ? (
          <i className="fa-solid fa-chevron-left"></i>
        ) : (
          <i className="fa-solid fa-chevron-right"></i>
        )}
      </Menu>
      <Wrapper className={isSidebarActive ? "sidebar-active" : ""}>
        {isSidebarActive && (
          <Sidebar className={isSidebarActive ? "sidebar-active" : ""}>
            <Logo>
              <img
                src="https://i.ibb.co/W6PF3FX/Group-9530.png"
                alt="Logo image"
              />
            </Logo>
            <Nav>
              <List>
                <Item onClick={handleDismis}>
                  <StyledLink to="/">
                    <div>Current Location</div>
                    <div>
                      {country && (
                        <span>
                          <img
                            src={flagUrl}
                            alt={`Flag of ${country.country}`}
                            width={15}
                            height={10}
                          />
                          {` ${country.city} ${country.country}`}
                        </span>
                      )}
                    </div>
                  </StyledLink>
                </Item>
                <Item>{error && <div>{error}</div>}</Item>
                <Item>
                  <form onSubmit={handleSubmit}>
                    <Input
                      value={value}
                      onChange={handleChange}
                      placeholder="Search"
                    />
                  </form>
                </Item>
                {cities.map((city) => (
                  <CityItem key={city.id}>
                    <City
                      city={city}
                      handleDelete={handleDelete}
                      handleUpdate={handleUpdate}
                    />
                  </CityItem>
                ))}
              </List>
            </Nav>
          </Sidebar>
        )}
        <OutletComponent>
          <div onClick={handleDismis}>
            <Outlet />
          </div>
        </OutletComponent>
      </Wrapper>
    </>
  );
};

export default Navigation;
