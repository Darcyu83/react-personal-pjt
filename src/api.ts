import { IToDoData } from "./atoms";

const API_KEY = `72caad34e2c43d870d78d98ae9a0980b`;

export function getLocalToDoData() {
  return window.localStorage.getItem("todo");
}

export const setLocalToDoData = (data: IToDoData) => {
  if (Object.keys(data).length !== 0) {
    window.localStorage.setItem("todo", JSON.stringify(data));
  }
};

export const delLocalToDoData = (
  data: IToDoData,
  isLoaded?: boolean | undefined
) => {
  if (isLoaded) {
    window.localStorage.setItem("todo", JSON.stringify(data));
  }
};

export interface IMovieCategory {
  cate: "now_playing" | "popular" | "top_rated";
}

export function getMoviesListAPI(
  cate: "now_playing" | "popular" | "top_rated"
) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${cate}?api_key=${API_KEY}&language=en-US&page=1`
  ).then((res) => res.json());
}

export function makeImgPath(size: string, imgPath: string) {
  return `https://image.tmdb.org/t/p/${size}/${imgPath}`;
}

export function getMovieDetail(movieId: string) {
  return fetch(`
  https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(
    (response) => response.json()
  );
}
