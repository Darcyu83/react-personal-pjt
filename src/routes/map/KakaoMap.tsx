import { useState } from "react";
import styled from "styled-components";
import KakaoMapContainer from "../../components/map/KakaoMapContainer";
import KakaoMapSearch from "../../components/map/KakaoMapSearch";

const Wrapper = styled.div`
  padding: 20px;
  padding-top: 100px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
function KakaoMap() {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    if (inputText.length < 2) {
      alert("검색어는 2자이상 입력하여야 합니다. ]");
    } else {
      alert(`검색어 : ${inputText}`);
    }
    setPlace(inputText);
    setInputText("");
  };

  return (
    <Wrapper>
      <KakaoMapSearch
        handleSubmit={handleSubmit}
        onChange={onChange}
        keyword={inputText}
      />
      <KakaoMapContainer id="searchMap" keyword={place} />
      <h1>목적지</h1>
      <KakaoMapContainer id="destination" keyword={"하이원 팰리스호텔"} />
    </Wrapper>
  );
}
export default KakaoMap;
