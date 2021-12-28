import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getMoviesListAPI, IMovieCategory, makeImgPath } from "../../../api";
import { IGetMoviesResult } from "../../../atoms";

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Title = styled.h1`
  display: block;
  color: white;
  width: 100%;
  background-color: black;
  font-weight: bold;
  padding: 10px 50px;
`;

const SliderWrapper = styled.div<{ xLength?: number }>`
  margin: 0px 50px;
  display: flex;
  justify-content: flex-start;
  width: ${(props) => props.xLength}px;
  min-width: ${(props) => props.xLength}px;
  position: relative;
  max-width: 95%;
`;

const SliderInnerWrapper = styled.div<{ xLength?: number }>`
  margin: 0px auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${(props) => props.xLength}px;
  position: relative;
  padding: 20px 0px;
  overflow: hidden;
`;

const CardWrapper = styled(motion.div)<{
  xLength?: number;
  isInitial?: boolean;
  margin?: number;
}>`
  display: flex;
  transition: transform ${(props) => (props.isInitial ? 0 : 0.5)}s;
  transform: translateX(${(props) => (props.xLength ? -props.xLength : 0)}px);

  div {
    margin-right: ${(props) => props.margin}px;
  }
  div:first-child {
    transform-origin: left;
  }
  div:last-child {
    transform-origin: right;
  }
`;

const Card = styled(motion.div)<{ width?: number; bgPhoto?: string }>`
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

const Pagination = styled(motion.div)`
  margin: 10px auto;
  width: fit-content;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1rem;

  div:first-child,
  div:last-child {
    background-color: transparent;
  }
`;
const PageBtn = styled(motion.div)`
  margin: 0 5px;
  min-width: 15px;
  min-height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  cursor: pointer;
`;

const pageSliderVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? window.innerWidth : -window.innerWidth,
      opacity: 0,
    };
  },
  center: (direction: number) => {
    return {
      x: 0,
      opacity: 1,
    };
  },
  exit: (direction: number) => {
    return {
      x: direction > 0 ? -window.innerWidth : window.innerWidth,
      opacity: 0,
    };
  },
};
function PageSlider({ cate }: IMovieCategory) {
  const CARD_WIDTH = 200;
  const CARD_MARGIN = 3;
  const CARD_OFFSET_WIDTH = CARD_WIDTH + CARD_MARGIN;
  const CARD_QNTY = 7; //  1 to 7
  const DATA_QNTY_SHOWED = 20;

  const [arrLength, setArrLength] = useState(DATA_QNTY_SHOWED);

  const { isLoading, data } = useQuery<IGetMoviesResult>(["movies", cate], () =>
    getMoviesListAPI(cate)
  );

  // page slider
  const [[currPageIdx, direction], setCurrPage] = useState([0, 0]);

  const onPaginate = (idx: number) => {
    // next page set with idx ;

    //apply animate
    setCurrPage(([curr, direction]) => {
      return [idx, idx > curr ? 1 : -1];
    });
  };

  const onNextPage = (increment: number) => {
    let newIdx = 0;
    setCurrPage(([curr, direction]) => {
      newIdx = curr + increment;
      let dataLength = 0;
      if (data) dataLength = Math.ceil(data.results.length / CARD_QNTY) - 1;
      newIdx = newIdx > dataLength || newIdx < 0 ? curr : newIdx;
      return [newIdx, increment];
    });
  };

  const onRenderBtn = () => {
    const result = [];
    if (data) {
      for (let i = 0; i < Math.ceil(data?.results.length / CARD_QNTY); i++) {
        result.push(
          <PageBtn
            key={i}
            animate={
              currPageIdx === i
                ? { width: "30px", backgroundColor: "rgba(255,255,255,0.9)" }
                : {}
            }
            transition={{
              type: "spring",
              damping: 20,
            }}
            onClick={() => onPaginate(i)}
          ></PageBtn>
        );
      }
    }
    return result;
  };

  return (
    <InnerWrapper>
      <Title> "{cate.toUpperCase()}" Slider /w Pagination</Title>
      <SliderWrapper>
        <SliderInnerWrapper
          xLength={(CARD_OFFSET_WIDTH + CARD_MARGIN) * CARD_QNTY}
        >
          <AnimatePresence initial={false} custom={direction}>
            <CardWrapper
              key={currPageIdx}
              custom={direction}
              margin={CARD_MARGIN}
              variants={pageSliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              {data?.results
                .slice(
                  currPageIdx * CARD_QNTY,
                  currPageIdx * CARD_QNTY + CARD_QNTY
                )
                .map((movie, idx) => (
                  <>
                    <Link
                      to={{
                        pathname: `/pop`,
                        state: {
                          movieId: movie.id,
                          cate: cate,
                        },
                      }}
                    >
                      <Card
                        key={idx}
                        width={200}
                        bgPhoto={makeImgPath("w500", movie.poster_path)}
                        whileHover={{
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <CardTitle>{movie.title}</CardTitle>
                      </Card>
                    </Link>
                  </>
                ))}
            </CardWrapper>
          </AnimatePresence>
        </SliderInnerWrapper>
      </SliderWrapper>
      <Pagination>
        <PageBtn onClick={() => onNextPage(-1)}>&lt;</PageBtn>
        {onRenderBtn()}
        <PageBtn onClick={() => onNextPage(1)}>&gt;</PageBtn>
      </Pagination>
    </InnerWrapper>
  );
}

export default PageSlider;
