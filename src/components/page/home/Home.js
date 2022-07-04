import styled from "styled-components";
import { movieNum } from "../../../constants/constant";
import { MainBanner } from "./MainBanner";
import { useEffect, useState } from "react";
import { Loading } from "../../Loading";
import { movieApi } from "../../../api";
import { Movies } from "./Movies";
import { PageTitle } from "../../PageTitle";

export const Home = () => {
  const [playing, setPlaying] = useState();
  const [rated, setRated] = useState();
  const [upcome, setUpcome] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const movieData = async () => {
      try {
        const {
          data: { results: playingData },
        } = await movieApi.nowPlaying();
        setPlaying(playingData);
        const {
          data: { results: ratedData },
        } = await movieApi.topRated();
        // =>비구조화 할당 이용시  변수명 변경할때는
        // 변수명:변경할이름
        setRated(ratedData);

        const {
          data: { results: upcomeData },
        } = await movieApi.upComing();
        setUpcome(upcomeData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);
  return (
    <>
      <PageTitle title="Home" />
      {loading ? (
        <Loading />
      ) : (
        <>
          {playing && (
            <>
              <MainBanner playData={playing[movieNum]} />
              <Movies movieData={playing} title="현재 상영 영화" />
              <Movies movieData={rated} title="인기 영화" />
              <Movies movieData={upcome} title="상영 예정 영화" />
            </>
          )}
        </>
      )}
    </>
  );
};
