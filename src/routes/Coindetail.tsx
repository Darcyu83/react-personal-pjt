import { stringify } from "querystring";
import { useEffect, useState } from "react";
import { Route, Switch, useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { aCoinState } from "../atoms";
import Chart from "../components/Chart";
import CoinInfo from "../components/CoinInfo";
import Price from "../components/Price";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

function Coindetail() {
  return (
    <Wrapper>
      <CoinInfo />
      <Switch>
        <Route path={`/detail/:coinId/chart`}>
          <Chart />
        </Route>
        <Route path={`/detail/:coinId/price`}>
          <Price />
        </Route>
      </Switch>
    </Wrapper>
  );
}
export default Coindetail;
