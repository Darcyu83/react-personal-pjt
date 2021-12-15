import { constSelector, useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { delLocalToDoData } from "../../api";
import { IToDo, IToDoData, todoData, todoLoaded } from "../../atoms";
import RegTodo from "./RegTodo";
import TodoItms from "./TodoItms";

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  background-color: rgba(200, 214, 229, 0.5);
  margin: 0 5px;
`;

const Title = styled.h1`
  width: 100%;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  text-decoration: underline;
`;

const Items = styled.ul`
  width: 100%;
  min-height: 300px;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const DelBtn = styled.svg`
  align-self: end;
  width: 15px;
  cursor: pointer;
`;
interface ICateBox {
  dataObj: IToDo[];
  cateName: string;
  key: number;
}

function CateBox({ dataObj, cateName }: ICateBox) {
  const [data, setToDoData] = useRecoilState(todoData);
  const isTodoLoaded = useRecoilValue(todoLoaded);
  const onClick = (cateName: string) => {
    const dataCopy = { ...data };
    delete dataCopy[cateName];
    setToDoData(dataCopy);
    delLocalToDoData(dataCopy, isTodoLoaded);
  };
  return (
    <Wrapper>
      <DelBtn
        onClick={() => onClick(cateName)}
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
        ></path>
      </DelBtn>
      <Title>{cateName.toUpperCase()}</Title>
      <RegTodo cateName={cateName} />
      <Items>
        {dataObj.map((todo, idx) => (
          <TodoItms
            key={idx}
            id={todo.id}
            startDt={todo.startDt}
            endDt={todo.endDt}
            cnts={todo.toDoCnts}
            cateName={cateName}
          />
        ))}
      </Items>
    </Wrapper>
  );
}

export default CateBox;
