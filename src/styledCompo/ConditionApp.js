import styled from "styled-components";
const color = {
  crimson: "#dc143c",
  cornflowerblue: "#6495ed",
  coral: "#ff7f50",
  burlywood: "#deb887",
  azure: "#00ffff",
  aqua: "#f0ffff",
};
const BodyPege = styled.div`
  background: ${color.cornflowerblue};
  color: ${color.aqua};
  max-width: 100%;
  height: 150vh;
  position: relative;
  top: -16px;
  padding: 10px;
  font-family: Tahoma, Verdana, sans-serif;
`;
export { BodyPege };
