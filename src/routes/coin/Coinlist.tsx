import styled from "styled-components";
import Coins from "../../components/coin/Coins";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    -90deg,
    rgba(255, 0, 0, 0.5),
    rgba(84, 160, 255, 1)
  );
`;
const InnerWrapper = styled.div`
  width: 650px;
  margin: 20px auto;
  margin-top: 100px;
`;
function Coinlist() {
  return (
    <Wrapper>
      <InnerWrapper>
        <h1>Today's Coins</h1>
        <hr></hr>
        <Coins />
      </InnerWrapper>
    </Wrapper>
  );
}

export default Coinlist;
