import { useState } from "react";
import styled from "styled-components";
import Coins from "../../components/coin/Coins";

const Wrapper = styled.div`
  width: 650px;
  margin: 0 auto;
`;
function Coinlist() {
  return (
    <Wrapper>
      <h1>Today's Coins</h1>
      <hr></hr>
      <Coins />
    </Wrapper>
  );
}

export default Coinlist;
