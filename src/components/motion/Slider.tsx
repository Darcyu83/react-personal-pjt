import { motion } from "framer-motion";
import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getPopularMoviesAPI, makeImgPath } from "../../api";
import { IGetMoviesResult } from "../../atoms";

const Wrapper = styled.div`
  padding: 20px;
  padding-top: 100px;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5));
  width: 100vw;
  height: 100vh;
`;
const Title = styled.h1``;

const SliderWrapper = styled.div<{ xLength: number }>`
  margin: 0px auto;
  display: flex;
  justify-content: flex-start;
  width: ${(props) => props.xLength}px;
  position: relative;
  max-width: 95%;
`;

const SliderInnerWrapper = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: flex-start;

  overflow: hidden;
`;

const CardWrapper = styled(motion.div)<{
  xLength: number;
  isInitial: boolean;
  margin: number;
}>`
  display: float;
  transition: transform ${(props) => (props.isInitial ? 0 : 1)}s;
  transform: translateX(${(props) => -props.xLength}px);
  div {
    margin-right: ${(props) => props.margin}px;
  }
  div:first-child {
    margin-left: ${(props) => props.margin}px;
  }
`;

const Card = styled.div<{ width: number; bgPhoto?: string }>`
  width: ${(props) => props.width}px;
  height: 300px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
`;

const Btn = styled.button`
  position: absolute;
  top: 100px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

function Slider() {
  const CARD_WIDTH = 200;
  const CARD_MARGIN = 3;
  const CARD_OFFSET_WIDTH = CARD_WIDTH + CARD_MARGIN;
  const CARD_QNTY = 8;
  const DATA_QNTY_SHOWED = 20;
  const [currIdx, setCurrIdx] = useState(0);
  const [arrLength, setArrLength] = useState(DATA_QNTY_SHOWED);
  const [xLength, setXLength] = useState(arrLength * CARD_OFFSET_WIDTH);
  const [isInitial, setIsInitial] = useState(true);

  const { isLoading, data } = useQuery<IGetMoviesResult>(
    ["movies", "slide"],
    getPopularMoviesAPI
  );

  console.log(data?.results);

  const onClick = (
    increment: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    setIsInitial(false);
    const newlength = increment * CARD_OFFSET_WIDTH;

    setXLength((curr) => {
      return curr + newlength > arrLength * CARD_OFFSET_WIDTH * 2 ||
        curr + newlength < 0
        ? curr
        : curr + newlength;
      // return curr + newlength >= arrLength * CARD_OFFSET_WIDTH ? 0 : 0;
    });

    setCurrIdx((curr) => {
      console.log("abs", Math.abs(curr));
      if (Math.abs(curr) >= arrLength - 1) {
        setTimeout(() => {
          setIsInitial(true);
          setCurrIdx(0);
          setXLength(arrLength * CARD_OFFSET_WIDTH);
        }, 1000);
      }
      return curr + increment;
    });
  };

  return (
    <Wrapper>
      <Title>Slider</Title>
      <SliderWrapper xLength={CARD_OFFSET_WIDTH * CARD_QNTY}>
        <SliderInnerWrapper>
          <CardWrapper
            isInitial={isInitial}
            xLength={xLength}
            margin={CARD_MARGIN}
          >
            {data?.results.slice(0, DATA_QNTY_SHOWED).map((item, idx) => (
              <Card
                key={idx}
                width={CARD_WIDTH}
                bgPhoto={makeImgPath("w500", item.poster_path)}
              >
                {item.title}
                {item.backdrop_path}
              </Card>
            ))}
            {data?.results.slice(0, DATA_QNTY_SHOWED).map((item, idx) => (
              <Card
                key={idx}
                width={CARD_WIDTH}
                bgPhoto={makeImgPath("w500", item.poster_path)}
              >
                {item.title}
                {item.backdrop_path}
              </Card>
            ))}
            {data?.results.slice(0, DATA_QNTY_SHOWED).map((item, idx) => (
              <Card
                key={idx}
                width={CARD_WIDTH}
                bgPhoto={makeImgPath("w500", item.poster_path)}
              >
                {item.title}
                {item.backdrop_path}
              </Card>
            ))}
          </CardWrapper>
        </SliderInnerWrapper>
        <Btn onClick={(e) => onClick(-1, e)} style={{ left: "-20px" }}>
          Prev
        </Btn>
        <Btn onClick={(e) => onClick(1, e)} style={{ right: "-20px" }}>
          Next
        </Btn>
      </SliderWrapper>
    </Wrapper>
  );
}

export default Slider;
