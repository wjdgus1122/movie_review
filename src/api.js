import { axios } from "axios";

const api = axios.create({
  baseUrl: "https://api.themoviedb.org/3/",
  params: {
    api_key: "18546a472387723b0b6570e2ccb0741e",
    language: "ko-kr",
  },
});

const Movieapi = {
  nowPlaying: () => api.get("movie/now_playing"),
  latest: () => api.get("movie/latest"),
  topRated: () => api.get("movie/top_rated"),
};
