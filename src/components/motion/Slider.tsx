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

const SliderInnerWrapper = styled.div<{ xLength: number }>`
  margin: 0px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.xLength}px;
  padding: 100px 0px;
  overflow: hidden;
`;

const CardWrapper = styled(motion.div)<{
  xLength: number;
  isInitial: boolean;
  margin: number;
}>`
  display: float;
  transition: transform ${(props) => (props.isInitial ? 0 : 0.5)}s;
  transform: translateX(${(props) => -props.xLength}px);
  div {
    margin-right: ${(props) => props.margin}px;
    transform-origin: bottom;
  }
`;

const Card = styled(motion.div)<{ width: number; bgPhoto?: string }>`
  width: ${(props) => props.width}px;
  height: 300px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  display: flex;
  align-items: flex-end;
  z-index: 9999;
`;

const CardTitle = styled.p`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 5px 3px;
  min-height: 50px;
  width: 100%;
`;
const Btn = styled.button`
  position: absolute;
  top: 200px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

function Slider() {
  const CARD_WIDTH = 200;
  const CARD_MARGIN = 3;
  const CARD_OFFSET_WIDTH = CARD_WIDTH + CARD_MARGIN;
  const CARD_QNTY = 7; //  1 to 7
  const DATA_QNTY_SHOWED = 20;
  const [currIdx, setCurrIdx] = useState(0);
  const [arrLength, setArrLength] = useState(DATA_QNTY_SHOWED);
  const [xLength, setXLength] = useState(
    arrLength * CARD_OFFSET_WIDTH - CARD_MARGIN
  );
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
        }, 700);
      }
      return curr + increment;
    });
  };

  return (
    <Wrapper>
      <Title>Slider</Title>
      <SliderWrapper xLength={CARD_OFFSET_WIDTH * CARD_QNTY - CARD_MARGIN}>
        <SliderInnerWrapper
          xLength={CARD_OFFSET_WIDTH * CARD_QNTY - CARD_MARGIN}
        >
          <CardWrapper
            isInitial={isInitial}
            xLength={xLength}
            margin={CARD_MARGIN}
          >
            {data?.results.slice(0, DATA_QNTY_SHOWED).map((item, idx) => (
              <Card
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                key={idx}
                width={CARD_WIDTH}
                bgPhoto={makeImgPath("w500", item.poster_path)}
              >
                <CardTitle>{item.title}</CardTitle>
              </Card>
            ))}
            {data?.results.slice(0, DATA_QNTY_SHOWED).map((item, idx) => (
              <Card
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                key={idx}
                width={CARD_WIDTH}
                bgPhoto={makeImgPath("w500", item.poster_path)}
              >
                <CardTitle>{item.title}</CardTitle>
              </Card>
            ))}
            {data?.results.slice(0, DATA_QNTY_SHOWED).map((item, idx) => (
              <Card
                whileHover={{ scale: 1.2, transition: { duration: 0.5 } }}
                key={idx}
                width={CARD_WIDTH}
                bgPhoto={makeImgPath("w500", item.poster_path)}
              >
                <CardTitle>{item.title}</CardTitle>
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
