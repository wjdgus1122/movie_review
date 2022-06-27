import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainstyle = {
  mainColor: "crimson",
  color: "white",
  bgColor: "#1d1d1d",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: ${mainstyle.color};
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${mainstyle.bgColor};
    }
    li{
        list-style: none;
    }
`;
