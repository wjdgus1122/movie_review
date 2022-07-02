import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainstyle = {
  mainColor: "crimson",
  color: "white",
  bgColor: "#1d1d1d",
  padding: "0 80px",
  mopadding: "0 20px",
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
        color: ${mainstyle.color};
        word-break: keep-all;
    }
    li{
        list-style: none;
    }
`;
