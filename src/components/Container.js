import styled from "styled-components";
import { mainstyle } from "../globalstyled";

const SContainer = styled.section`
  width: 100%;
  padding: ${mainstyle.padding};
`;

export const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
