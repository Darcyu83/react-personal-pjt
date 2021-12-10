import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

const Title = styled.div`
  color: ${(props) => props.theme.accentColor};
`;

function Welcome() {
  return (
    <Wrapper>
      <Title>Welcome</Title>
    </Wrapper>
  );
}

export default Welcome;
