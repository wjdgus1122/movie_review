import styled from "styled-components";
import { mainstyle } from "../globalstyled";

const SContainer = styled.section`
  width: 100%;
  padding: ${mainstyle.padding};
  @media screen and (max-width: 500px) {
    padding: ${mainstyle.mopadding};
  }
`;

export const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
