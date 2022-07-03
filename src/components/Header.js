import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
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
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Menu = styled.li`
  margin-left: 100px;
  font-size: 18px;
  font-weight: 500;
`;
const MoMenu = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
const MoMenuIcon = styled.div`
  font-size: 25px;
`;
const MoMenuWrap = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  transition: 0.5s;
  left: ${(props) => props.po};
  top: 0;
  li {
    font-size: 20px;
    margin-bottom: 50px;
    &:nth-child(1) {
      font-size: 30px;
    }
  }
`;
const CloseBtn = styled.li`
  position: absolute;
  top: 27px;
  right: 20px;
  z-index: 9;
`;

export const Header = () => {
  const [bgColor, setBgColor] = useState("transperant");
  const [left, setLeft] = useState("100%");
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
    <>
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
        <MoMenu>
          <MoMenuIcon onClick={() => setLeft("0")}>
            <FontAwesomeIcon icon={faBars} />
          </MoMenuIcon>
          <MoMenuWrap po={left}>
            <CloseBtn onClick={() => setLeft("100%")}>
              <FontAwesomeIcon icon={faClose} />
            </CloseBtn>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </MoMenuWrap>
        </MoMenu>
      </SHeader>
    </>
  );
};
