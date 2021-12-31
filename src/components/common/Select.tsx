import { useState } from "react";
import styled from "styled-components";
import ReactSelect from "./ReactSelect";

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  z-index: 200;
  width: auto;
  height: auto;
  max-width: fit-content !important;
  max-height: fit-content !important;
  min-width: fit-content !important;
  min-height: fit-content !important;
`;
const SelectTag = styled.select`
  height: 30px;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  text-shadow: 0 1px 0 rgba(255, 251, 251, 0.4);
  text-align: center;

  &:focus {
    border-color: red;
  }
  option {
    background: rgba(206, 152, 152, 0.8);
  }
  option[selected="true"] {
    font-weight: bold;
    color: blue;
  }
`;

interface ISelectProps {
  key: number;
  value: number;
  text: string;
}

function Select({
  selectProps,
  onChange,
  qntyShowed,
}: {
  selectProps: ISelectProps[];
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  qntyShowed: number;
}) {
  return (
    <Wrapper>
      <SelectTag onChange={onChange}>
        {selectProps.map((opt: ISelectProps, idx) => (
          <option
            key={idx}
            value={opt.value}
            selected={opt.value === qntyShowed}
          >
            {opt.text}
          </option>
        ))}
      </SelectTag>
    </Wrapper>
  );
}

export default Select;
