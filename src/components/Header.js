import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainstyle } from "../globalstyled";

const SHeader = styled.div`
  max-width: 100%;
  width: 100%;
  height: 80px;
  padding: ${mainstyle.padding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  transition: 0.5s;
  background-color: ${(props) => props.bgcolor};
  @media screen and (max-width: 500px) {
    padding: ${mainstyle.mopadding};
  }
`;
const Logo = styled.h3`
  font-size: 28px;
  font-weight: 800;
  a {
    color: ${mainstyle.mainColor};
  }
`;
const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Menu = styled.li`
  margin-left: 100px;
  font-size: 18px;
  font-weight: 500;
`;

export const Header = () => {
  const [bgColor, setBgColor] = useState("transperant");
  const Sclhandle = () => {
    const wid = window.innerWidth;
    const sct = window.pageYOffset;
    if (wid > 1000) {
      if (sct > 400) {
        setBgColor("#1d1d1d");
      } else {
        setBgColor("transperant");
      }
    } else {
      if (sct > 200) {
        setBgColor("#1d1d1d");
      } else {
        setBgColor("transperant");
      }
    }
  };
  window.addEventListener("scroll", Sclhandle);
  return (
    <SHeader bgcolor={bgColor}>
      <Logo>
        <Link to="/">Movie</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to="/">Home</Link>
        </Menu>
        <Menu>
          <Link to="/search">Search</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
