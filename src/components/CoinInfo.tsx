import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { aCoinState, coinsState, IACoin } from "../atoms";

const Wrapper = styled.div`
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

interface IDetailProps {
  id: string;
  name: string;
  symbol: string;
}

function CoinInfo() {
  const { state } = useLocation<IDetailProps>();
  const { coinId } = useParams<{ coinId: string }>();

  console.log("state", state);
  console.log("coinId", coinId);

  const [coinState, setACoinState] = useState<IACoin>();
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    try {
      const data = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();

      setACoinState(data);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <InnerWrapper>
        <InfoSpan>아이디: {coinState?.id}</InfoSpan>
        <InfoSpan>아이디: {coinState?.id}</InfoSpan>
      </InnerWrapper>
      <InnerWrapper>
        <p>
          {coinState?.name} :{coinState?.symbol}{" "}
        </p>
      </InnerWrapper>
      <Tabs>
        <Tab>
          <Link to={`/detail/${coinId}/chart`}>Chart</Link>
        </Tab>
        <Tab>
          <Link to={`/detail/${coinId}/price`}>Price</Link>
        </Tab>
      </Tabs>
    </Wrapper>
  );
}

export default CoinInfo;
