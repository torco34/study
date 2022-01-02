import styled from "styled-components";
const color = {
  crimson: "#dc143c",
  cornflowerblue: "#6495ed",
  coral: "#ff7f50",
  burlywood: "#deb887",
  azure: "#f0ffff",
  aqua: "#00ffff",
};
const GrupoList = styled.div`
  background: coral;

  ul {
    display: flex;
    justify-content: center;
  }
  a {
    text-decoration: none;
    color: azure;
    margin: 10px;
  }
`;
export { GrupoList };
