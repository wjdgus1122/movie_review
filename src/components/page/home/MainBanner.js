import styled from "styled-components";
import { imgUrl } from "../../../constants/constant";
import { mainstyle } from "../../../globalstyled";

const Banner = styled.div`
  width: 100%;
  height: 80vh;
  padding: ${mainstyle.padding};
  padding-top: 250px;
  position: relative;
  @media screen and (max-width: 500px) {
    height: 100vh;
    padding: ${mainstyle.mopadding};
  }
`;
const Title = styled.div`
  max-width: 650px;
  width: 100%;
  font-size: 80px;
  font-weight: 700;
  line-height: 6rem;
  position: relative;
  @media screen and (max-width: 500px) {
    max-width: 400px;
    font-size: 40px;
    line-height: 3rem;
    position: absolute;
    bottom: 20%;
  }
`;
const Desc = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 18px;
  font-weight: 200;
  margin-top: 20px;
  line-height: 2rem;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
const Box = styled.div`
  width: 100%;
  height: 60%;
  background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 9;
  opacity: 0.4;
`;

export const MainBanner = ({ playData }) => {
  return (
    <Banner
      style={{
        background: `url(${imgUrl}${playData.backdrop_path}) no-repeat center/cover`,
      }}
    >
      <Title>{playData.title}</Title>
      <Desc>{playData.overview.slice(0, 150) + "..."}</Desc>
      <Box />
    </Banner>
  );
};
