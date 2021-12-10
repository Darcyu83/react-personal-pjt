import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.textColor};
  border-top: 0;
  font-size: 3rem;
`;

function Chart() {
  return <Wrapper>Chart</Wrapper>;
}
export default Chart;
