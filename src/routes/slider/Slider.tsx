import styled from "styled-components";
import CardSlider from "../../components/motion/slider/CardSlider";
import PageSlider from "../../components/motion/slider/PageSlider";

const Wrapper = styled.div`
  padding: 20px;
  padding-top: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
  width: 100%;
  min-width: fit-content;
  height: 100%;
`;

const Divider = styled.hr`
  color: rgba(255, 255, 255, 0.5);
  margin: 20px;
`;

function Slider() {
  return (
    <Wrapper>
      <PageSlider cate="top_rated" />
      <Divider />
      <CardSlider cate="now_playing" />
    </Wrapper>
  );
}

export default Slider;
