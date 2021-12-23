import { Route, Switch, useLocation, useParams } from "react-router-dom";

import styled from "styled-components";

import Chart from "../../components/coin/Chart";
import CoinInfo from "../../components/coin/CoinInfo";
import Price from "../../components/coin/Price";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 100px;
`;

function Coindetail() {
  return (
    <Wrapper>
      <CoinInfo />
      <Switch>
        <Route path={`/coin/:coinId/chart`}>
          <Chart />
        </Route>
        <Route path={`/coin/:coinId/price`}>
          <Price />
        </Route>
      </Switch>
    </Wrapper>
  );
}
export default Coindetail;
