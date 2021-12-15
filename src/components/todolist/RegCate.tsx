import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { setLocalToDoData } from "../../api";
import { todoData } from "../../atoms";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.5);
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 8 2 auto;
  flex-wrap: wrap;

  input {
    flex: 1 1 80%;
  }
  button {
    flex: 1 1 15%;
  }

  p {
    flex: 1 1 80%;
    color: red;
    font-size: 12px;
  }
`;
const Input = styled.input`
  width: 70%;
`;

const Btn = styled.button`
  margin: 0 10px;
`;

function RegCate() {
  const { register, handleSubmit, formState, setValue } =
    useForm<{ cate: string }>();
  const [data, setToDoData] = useRecoilState(todoData);
  const onValid = ({ cate }: { cate: string }) => {
    setToDoData((allBoardData) => {
      const newBoard = {
        [cate]: [],
      };
      return { ...allBoardData, ...newBoard };
    });
    setValue("cate", "");
  };

  setLocalToDoData(data);

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("cate", {
            required: "값을 입력하세요.",
          })}
          placeholder="Regist your Todo categories ..."
        />
        <Btn>Add</Btn>
        <p>{formState.errors.cate?.message}</p>
      </Form>
    </Wrapper>
  );
}

export default RegCate;
