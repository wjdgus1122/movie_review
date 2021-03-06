import styled from "styled-components";

const SFooter = styled.footer`
  padding: 75px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #555;
`;

export const Footer = () => {
  return <SFooter> &copy; FruitLike {new Date().getFullYear()}</SFooter>;
};
