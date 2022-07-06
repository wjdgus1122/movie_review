import { useState } from "react";
import { Container } from "../../Container";
import { PageTitle } from "../../PageTitle";
import { movieApi } from "../../../api";
import { getValue } from "@testing-library/user-event/dist/utils";
import { useForm } from "react-hook-form";
import { imgUrl } from "../../../constants/constant";
import styled from "styled-components";
import { Loading } from "../../Loading";
import { Link } from "react-router-dom";

const SearchWrap = styled.div`
  padding-top: 100px;
  padding-bottom: 30px;
`;
const Input = styled.input`
  all: unset;
  width: 100%;
  height: 80px;
  border: 1px solid #333;
  padding: 20px;
  box-sizing: border-box;
`;
const ConWrap = styled.div`
  width: 100%;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 30px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    row-gap: 10px;
  }
`;
const Con = styled.div``;
const MovieImg = styled.div`
  height: 200px;
  @media screen and (max-width: 500px) {
    height: 100px;
  }
`;
const MovieTitle = styled.div`
  margin-top: 10px;
`;

export const Search = () => {
  const [sh, setSh] = useState();
  const [loading, setLoading] = useState();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm({
    mode: "onChange",
  });
  const searchMovie = async () => {
    const { search: term } = await getValues();
    setLoading(true);
    try {
      const {
        data: { results },
      } = await movieApi.search(term);

      if (results.length <= 0) {
        setError("result", {
          message: "찾으시는 영화가 없습니다",
        });
      } else {
        setSh(results);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <PageTitle title="Search" />
      <Container>
        <SearchWrap>
          <form onSubmit={handleSubmit(searchMovie)}>
            <Input
              {...register("search", {
                required: "내용은 필수입니다.",
                onChange() {
                  clearErrors("result");
                },
              })}
              type="text"
              placeholder="영화검색..."
            />
          </form>
          {errors?.search?.message}
          {errors?.result?.message}
        </SearchWrap>
        {loading ? (
          <Loading />
        ) : (
          <>
            {sh && (
              <ConWrap>
                {sh.map((sch) => (
                  <Link to={`/detail/${sch.id}`}>
                    <Con key={sch.id}>
                      <MovieImg
                        style={{
                          background: `url(${
                            sch.backdrop_path
                              ? `${imgUrl}${sch.backdrop_path}`
                              : "https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200?k=20&m=924949200&s=170667a&w=0&h=-g01ME1udkojlHCZeoa1UnMkWZZppdIFHEKk6wMvxrs="
                          }) no-repeat center/cover`,
                        }}
                      />
                      <MovieTitle>{sch.title}</MovieTitle>
                    </Con>
                  </Link>
                ))}
              </ConWrap>
            )}
          </>
        )}
      </Container>
    </>
  );
};
