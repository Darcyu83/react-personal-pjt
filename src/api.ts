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

export function getMovieDetail(movieId: string) {
  return fetch(`
  https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(
    (response) => response.json()
  );
}

export function makeImgPath(size: string, imgPath?: string) {
  if (!imgPath) return;
  return `https://image.tmdb.org/t/p/${size}/${imgPath}`;
}

export function getLocationOnLatLng(lat: number, lng: number) {
  let tempLat = 37.402056;
  let tempLng = 127.108212;
  let tempLcName = `우리집`;

  return fetch(
    `https://map.kakao.com/link/map/${tempLcName},${tempLat},${tempLng}`
  );
}

export function getLocatioOnId(id: number) {
  return fetch(`https://map.kakao.com/link/map/${id}`);
}
