import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../../api";
import { imgUrl } from "../../../constants/constant";
import { Container } from "../../Container";
import { Loading } from "../../Loading";
import { PageScroll } from "../../PageScroll";

const DetailWrap = styled.section`
  display: flex;
  padding-top: 150px;
`;
const MovieImg = styled.div`
  width: 45%;
  height: 80vh;
  background-color: lightgray;
`;
const TextWrap = styled.div`
  width: 50%;
  margin-left: 40px;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
  margin: 20px 0;
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

  return (
    <>
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
                  <Runtime>{detail.runtime}</Runtime>
                  <Genres>
                    {detail.genres.map((gene) => (
                      <li>{gene.name}/</li>
                    ))}
                  </Genres>
                  <Text>{detail.overview}</Text>
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
