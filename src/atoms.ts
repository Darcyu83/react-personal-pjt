import { atom } from "recoil";

export const darkModeState = atom({
  key: "darkMode",
  default: false,
});

export interface ICoins {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export interface IACoin {
  beta_value: number;
  circulating_supply: number;
  first_data_at: string;
  id: string;
  last_updated: string;
  max_supply: number;
  name: string;
  quotes: IQuotes;
  rank: string;
  symbol: string;
  total_supply: number;
}

export interface IQuotes {
  USD: {
    ath_date: string;
    ath_price: number;
    market_cap: number;
    market_cap_change_24h: number;
    percent_change_1h: number;
    percent_change_1y: number;
    percent_change_6h: number;
    percent_change_7d: number;
    percent_change_12h: number;
    percent_change_15m: number;
    percent_change_24h: number;
    percent_change_30d: number;
    percent_change_30m: number;
    percent_from_price_ath: number;
    price: number;
    volume_24h: number;
    volume_24h_change_24h: number;
  };
}

export const coinsState = atom<ICoins[]>({
  key: "coinsState",
  default: [],
});

export const aCoinState = atom<IACoin[]>({
  key: "aCoinState",
  default: [],
});

export const todoCateState = atom<string[]>({
  key: "category",
  default: [],
});

export interface IToDo {
  id: number;
  startDt?: string;
  endDt?: string;
  toDoCnts: string;
}

export interface IToDoData {
  [cate: string]: IToDo[];
}

export const todoData = atom<IToDoData>({
  key: "todoDAta",
  default: {},
});

export const todoLoaded = atom<boolean>({
  key: "todoLoaded",
  default: false,
});

// interface IPopularMovies {
//   page: number;
//   results: [];
//   total_pages: number;
//   total_results: number;
// }

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: { minimum: string; maximum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export const popularMovies = atom({
  key: "popularMovies",
  default: [],
});
