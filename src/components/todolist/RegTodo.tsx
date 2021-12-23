import styled from "styled-components";
import { useForm } from "react-hook-form";
import { IToDo, todoData } from "../../atoms";
import { useRecoilState } from "recoil";
import { setLocalToDoData } from "../../api";

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div``;
const Input = styled.input``;
const Btn = styled.button``;
const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
  p {
    font-size: 12px;
    color: red;
  }
`;

function RegTodo({ cateName }: { cateName: string }) {
  const { register, handleSubmit, setValue, formState } = useForm<IToDo>();
  const [data, setToDoData] = useRecoilState(todoData);

  const onValid = ({ toDoCnts, startDt, endDt }: IToDo) => {
    const newToDo = {
      id: Date.now(),
      toDoCnts,
      startDt,
      endDt,
    };
    setToDoData((allBoardData) => {
      return {
        ...allBoardData,
        [cateName]: [...allBoardData[cateName], newToDo],
      };
    });

    setValue("toDoCnts", "");
    setValue("startDt", "");
    setValue("endDt", "");
  };

  setLocalToDoData(data);

  return (
    <Wrapper>
      <InnerWrapper>
        <Form onSubmit={handleSubmit(onValid)}>
          <Input
            {...register("toDoCnts", {
              required: "할일은 필수 입력값입니다. ",
              minLength: { value: 2, message: "2자이상 입력하세요." },
            })}
            placeholder="Regist your Todo..."
          />
          <p>{formState.errors.toDoCnts?.message}</p>
          <Input
            {...register("startDt", { required: "시작일을 입력하세요." })}
            placeholder="Write start date..."
          />
          <p>{formState.errors.startDt?.message}</p>
          <Input
            {...register("endDt", { required: "목표일을 입력하세요." })}
            placeholder="Write end date..."
          />
          <p>{formState.errors.endDt?.message}</p>
          <Btn>Add</Btn>
        </Form>
      </InnerWrapper>
    </Wrapper>
  );
}

export default RegTodo;
