import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
export const City = ({ city, handleDelete, handleDismis }) => {
  const { sys, name, id } = city;

  const flagUrl = `https://flagcdn.com/${`${sys?.country}`.toLowerCase()}.svg`;
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
      <span onClick={() => handleDismis()}>
        <StyledLink to={`/${name}`.toLowerCase()}>
          <i className="fa-solid fa-arrow-right"></i>
        </StyledLink>
      </span>
    </>
  );
};
