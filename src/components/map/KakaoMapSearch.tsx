import { useState } from "react";
import styled from "styled-components";

interface IProps {
  keyword: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = styled.form`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
function KakaoMapSearch({ keyword, handleSubmit, onChange }: IProps) {
  //지도 위치 검색 키워드

  return (
    <Form onSubmit={handleSubmit}>
      <input name="keyword" value={keyword} onChange={onChange} />
      <button type="submit">위치 검색</button>
    </Form>
  );
}

export default KakaoMapSearch;
