import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { PageScroll } from "../../PageScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { PageTitle } from "../../PageTitle";

const DetailWrap = styled.section`
  display: flex;
  padding-top: 150px;
  @media screen and (max-width: 500px) {
    display: block;
    padding-top: 80px;
  }
`;
const MovieImg = styled.div`
  width: 45%;
  height: 80vh;
  background-color: lightgray;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const TextWrap = styled.div`
  width: 50%;
  margin-left: 40px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin: 20px 0;
  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
const Date = styled.div`
  font-size: 20px;
`;
const Runtime = styled.div`
  font-size: 20px;
  margin: 20px 0;
`;
const Genres = styled.div`
  font-size: 20px;
  display: flex;
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 200;
  color: #777;
  margin-top: 50px;
  line-height: 25px;
  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;
const Btn = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
  border: 1px solid lightgray;
  margin-top: 20px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 15px;
    width: 100px;
    height: 40px;
    position: absolute;
    top: 102%;
    right: 20px;
  }
`;
const IFrame = styled.iframe`
  width: 100%;
  height: 80vh;
  margin: 100px 0;
`;

export const Detail = () => {
  const [detail, setDetail] = useState();
  const [video, setVideo] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const DetailData = async () => {
      try {
        const { data } = await movieApi.movieDetail(id);
        setDetail(data);

        const {
          data: { results },
        } = await movieApi.movieVideo(id);
        setVideo(results.length == 0 ? null : results[0].key);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    DetailData();
  }, []);

  const ScrollHandle = () => {
    const wid = window.innerWidth;
    if (wid > 1000) {
      window.scrollTo({
        top: 850,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 1200,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {detail && <PageTitle title={detail.title} />}
      <PageScroll />
      {loading ? (
        <Loading />
      ) : (
        <>
          {detail && (
            <Container>
              <DetailWrap>
                <MovieImg
                  style={{
                    background: `url(${
                      detail.backdrop_path
                        ? `${imgUrl}${detail.backdrop_path}`
                        : "https://gotripslk.com/site/images/uploads/img.jpg"
                    }) no-repeat center/cover`,
                  }}
                />
                <TextWrap>
                  <Title>{detail.title}</Title>
                  <Date>{detail.release_date}</Date>
                  <Runtime>{detail.runtime}분</Runtime>
                  <Genres>
                    {detail.genres.map((gene) => (
                      <li>{gene.name}/</li>
                    ))}
                  </Genres>
                  <Text>{detail.overview}</Text>
                  {video && (
                    <Btn onClick={ScrollHandle}>
                      예고편보기 <FontAwesomeIcon icon={faAngleRight} />
                    </Btn>
                  )}
                </TextWrap>
              </DetailWrap>
              {video && (
                <IFrame src={`https://www.youtube.com/embed/${video}`} />
              )}
            </Container>
          )}
        </>
      )}
    </>
  );
};
