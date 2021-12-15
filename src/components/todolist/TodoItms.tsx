import { useRecoilState } from "recoil";
import styled from "styled-components";
import { delLocalToDoData } from "../../api";
import { IToDo, todoData, todoLoaded } from "../../atoms";
import RegTodo from "./RegTodo";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px;
  margin-bottom: 5px;
`;

const Info = styled.div`
  display: flex;
  width: 100%;

  span {
    flex: 1;
    min-width: 50px;
  }
  p {
    flex: 3;
    font-weight: bold;
    min-width: 100px;
  }
`;
const DelBtn = styled.svg`
  align-self: end;
  width: 15px;
  cursor: pointer;
`;

function TodoItms({
  id,
  startDt,
  endDt,
  cnts,
  cateName,
}: {
  id: number;
  startDt?: string;
  endDt?: string;
  cnts: string;
  cateName: string;
}) {
  const [data, setTodoData] = useRecoilState(todoData);
  const onClick = (cateName: string, id: number) => {
    setTodoData((allBoards) => {
      const idx = allBoards[cateName].findIndex((board) => board.id === id);

      return {
        ...allBoards,
        [cateName]: [
          ...allBoards[cateName].slice(0, idx),
          ...allBoards[cateName].slice(idx + 1),
        ],
      };
    });
  };
  return (
    <Wrapper>
      <DelBtn
        onClick={() => onClick(cateName, id)}
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
        ></path>
      </DelBtn>
      <Info>
        <span>할일:</span>
        <p>{cnts}</p>
      </Info>
      <Info>
        <span>기간:</span>
        <p>
          {startDt} ~ {endDt}
        </p>
      </Info>
    </Wrapper>
  );
}

export default TodoItms;
