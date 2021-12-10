import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { coinsState } from "../atoms";
import Coin from "./Coin";

const Status = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 3rem;
  place-self: center;
`;

function Coins() {
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useRecoilState(coinsState);

  const getData = async () => {
    try {
      const data = await (
        await fetch("https://api.coinpaprika.com/v1/coins")
      ).json();
      setCoins(data);
      setIsLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(coins);

  return (
    <div>
      <ul>
        {isLoading ? (
          <Status>Loading...</Status>
        ) : (
          coins.slice(0, 100).map((coin) => <Coin key={coin.id} coin={coin} />)
        )}
      </ul>
    </div>
  );
}
export default Coins;
