import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICoins } from "../../atoms";

const ACoin = styled.li`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  margin-bottom: 20px;
  box-shadow: 0px 5px 10px #49a9e0;
  transition: 0.5s;
  a {
    padding: 20px;
    display: flex;
    align-items: center;
  }
  &:hover {
    color: #f1c40f;
  }
`;

interface ICoin {
  coin: ICoins;
}

function Coin({ coin }: ICoin) {
  return (
    <>
      <ACoin key={coin.id}>
        <Link
          to={{
            pathname: `/coin/${coin.id}`,
            state: {
              id: coin.id,
              name: coin.name,
              symbol: coin.symbol,
            },
          }}
        >
          <img
            style={{ width: "1.5rem", height: "1.5rem" }}
            src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
            alt={coin.id}
          />
          &nbsp;&nbsp;&nbsp;
          {coin.name}
        </Link>
      </ACoin>
    </>
  );
}
export default Coin;
