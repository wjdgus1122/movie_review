import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { imgUrl } from "../../../constants/constant";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { mainstyle } from "../../../globalstyled";

const Container = styled.div`
  margin-top: 120px;
  padding: ${mainstyle.padding};
  @media screen and (max-width: 500px) {
    padding: ${mainstyle.mopadding};
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 30px;
`;
const MovieImg = styled.div`
  height: 300px;
`;
const MovieTitle = styled.div`
  font-size: 18px;
  color: #888;
  margin-top: 10px;
`;

export const Movies = ({ movieData, title }) => {
  const params = {
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },
    },
  };
  return (
    <Container>
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} navigation {...params}>
        {movieData.map((mvdt) => (
          <SwiperSlide key={mvdt.id}>
            <Link to={`/detail/${mvdt.id}`}>
              <MovieImg
                style={{
                  background: `url(${
                    mvdt.backdrop_path
                      ? `${imgUrl}${mvdt.backdrop_path}`
                      : `https://gotripslk.com/site/images/uploads/img.jpg`
                  }) no-repeat center/cover`,
                }}
              />
              <MovieTitle>{mvdt.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
