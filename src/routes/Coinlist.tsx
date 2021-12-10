import { useState } from "react";
import styled from "styled-components";
import Coins from "../components/Coins";

const Wrapper = styled.div`
  width: 650px;
  margin: 0 auto;
`;
function Coinlist() {
  return (
    <Wrapper>
      <Coins />
    </Wrapper>
  );
}

export default Coinlist;
