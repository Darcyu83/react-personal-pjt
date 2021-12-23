import { useEffect, useState } from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";
import styled from "styled-components";
import { IACoin } from "../../atoms";
import Chart from "./Chart";
import Price from "./Price";

const Wrapper = styled.div`
  width: 650px;
  margin: 20px auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  p {
    margin: 20px auto;
  }
`;

const InfoSpan = styled.span`
  border-radius: 5px;
  width: 45%;
  padding: 10px;
  background-color: rgba(52, 73, 94, 0.5);
`;

const Tabs = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  background-color: rgba(186, 235, 198, 0.4);
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.textColor};
  padding: 10px;
`;

const Tab = styled.div`
  color: ${(props) => props.theme.textColor};
  text-align: center;
  border-radius: 5px;
  width: 45%;
  background-color: rgba(52, 73, 94, 0.5);
  padding: 10px;
  a {
    display: block;
  }
`;

function CoinInfo() {
  const { coinId } = useParams<{ coinId: string }>();

  const [coinState, setACoinState] = useState<IACoin>();

  const getData = async () => {
    try {
      const data = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setACoinState(data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  });

  return (
    <Wrapper>
      <InnerWrapper>
        <InfoSpan>ID: {coinState?.id}</InfoSpan>
        <InfoSpan>Name: {coinState?.name}</InfoSpan>
      </InnerWrapper>
      <InnerWrapper>
        <p>
          {coinState?.name} :{coinState?.symbol}
        </p>
      </InnerWrapper>
      <Tabs>
        <Tab>
          <Link
            to={{
              pathname: `/coin/${coinId}/chart`,
              state: { data: coinState },
            }}
          >
            Chart
          </Link>
        </Tab>
        <Tab>
          <Link to={`/coin/${coinId}/price`}>Price</Link>
        </Tab>
      </Tabs>

      <Switch>
        <Route path="/coin/:coinId/chart">
          <Chart />
        </Route>
        <Route path="/coin/:coinId/price">
          <Price />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default CoinInfo;
