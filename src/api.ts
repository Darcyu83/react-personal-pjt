import { IToDoData } from "./atoms";

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
