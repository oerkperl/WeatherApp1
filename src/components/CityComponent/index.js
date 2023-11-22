import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFlag } from "../../utilities/Functions";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const City = ({ city, handleDelete, handleUpdate }) => {
  const [flagUrl, setFlagUrl] = useState("");
  const { sys, main, name, id } = city;

  useEffect(() => {
    fetchFlag(sys.country, setFlagUrl);
  }, [sys.country]);

  return (
    <>
      <span onClick={() => handleDelete(id, name)}>
        <i className="fa-solid fa-trash-can"></i>
      </span>
      {flagUrl && (
        <span>
          <img
            src={flagUrl}
            alt={`Flag of ${sys.country}`}
            style={{ maxWidth: "200px" }}
            height={10}
            width={15}
          />
        </span>
      )}
      <span>{`${sys.country}`.toUpperCase() || "Cntr"}</span>
      <span>{`${name}`.toUpperCase()}</span>
      <span>{Math.round(main?.temp)}°C</span>
      <span onClick={() => handleUpdate(id, name.toLowerCase())}>
        <StyledLink to={`/${name.toLowerCase()}`}>
          <i className="fa-solid fa-arrow-right"></i>
        </StyledLink>
      </span>
    </>
  );
};
