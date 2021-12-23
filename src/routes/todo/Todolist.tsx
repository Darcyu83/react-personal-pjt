import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { getLocalToDoData, setLocalToDoData } from "../../api";
import { todoData, todoLoaded } from "../../atoms";
import CateBox from "../../components/todolist/CateBox";
import RegCate from "../../components/todolist/RegCate";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  padding-top: 90px;
  color: ${(props) => props.theme.textColor};
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 0.5),
    rgba(0, 255, 255, 0.5)
  );
`;

const Title = styled.h1`
  color: white;
  font-weight: 400;
  font-size: 3rem;
  margin-bottom: 20px;
`;

const CateList = styled.ul`
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function Todolist() {
  const [toDoData, setToDoData] = useRecoilState(todoData);
  const setIsTodoLoaded = useSetRecoilState(todoLoaded);
  setLocalToDoData(toDoData);

  useEffect(() => {
    const localData = getLocalToDoData();
    if (localData) {
      setToDoData(JSON.parse(localData));
      setIsTodoLoaded(true);
    }
  });

  return (
    <Wrapper>
      <Title>To Do List</Title>
      <RegCate />
      <CateList>
        {Object.keys(toDoData).map((cate, idx) => {
          return <CateBox key={idx} cateName={cate} dataObj={toDoData[cate]} />;
        })}
      </CateList>
    </Wrapper>
  );
}

export default Todolist;
