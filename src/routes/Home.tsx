import { AnimatePresence, motion } from "framer-motion";
import { convertTransitionToAnimationOptions } from "framer-motion/types/animation/utils/transitions";
import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { makeImgPath, getPopularMoviesAPI } from "../api";
import { IGetMoviesResult } from "../atoms";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 1));
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div<{ bgPath: string | undefined }>`
  margin: 0px auto;
  width: 100%;
  min-height: 80vh;
  background-image: url(${(props) => props.bgPath});
  background-size: cover;
  background-position: center center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 500px 150px 10px 150px;
`;

const Slider = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px auto;
  padding: 5px;
  min-width: 1050px;
  width: 100%;
  height: 400px;
  border-top: 1px white solid;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  div:first-child {
    left: -20px;
  }
  div:last-child {
    right: -20px;
  }
`;

const Row = styled(motion.div)`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;
  border: 1px solid red;
  position: absoulte;
`;

const MovieCard = styled.div<{ bgPath: string }>`
  padding: 10px;
  flex: 1 1 15%;
  min-width: 200px;
  color: white;
  border: solid 1px rgba(255, 255, 255, 0.3);
  margin: 5px;
  background-image: url(${(props) => props.bgPath});
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
`;

const Describe = styled.p`
  display: block;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
`;

const Btn = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  border: solid rgba(255, 255, 255, 0.3) 1px;
  cursor: pointer;
`;

const SectionTitle = styled.h1`
  color: white;
  font-weight: bold;
`;

const rowVariants = {
  enter: { x: 1050 },
  center: { x: 0 },
  exit: { x: -1050 },
};
function Home() {
  const OFF_SET = 5;
  const { isLoading, data } = useQuery<IGetMoviesResult>(
    ["movies", "popularMovies"],
    getPopularMoviesAPI
  );

  const [moviePage, setMoviePage] = useState(0);
  const [tvPage, setTvPage] = useState(0);

  const maxIdx = data ? Math.ceil((data.results.length - 1) / OFF_SET) - 1 : 0;
  console.log(maxIdx);

  const onLeft = (sliderId: string) => {
    if (sliderId === "movie") {
      setMoviePage((curr) => (curr <= 0 ? maxIdx : curr - 1));
    } else if (sliderId === "tv") {
      setTvPage((curr) => (curr <= 0 ? maxIdx : curr - 1));
    }
  };

  const onRight = (sliderId: string) => {
    if (sliderId === "movie") {
      setMoviePage((curr) => (curr >= maxIdx ? 0 : curr + 1));
    } else if (sliderId === "tv") {
      setTvPage((curr) => (curr >= maxIdx ? 0 : curr + 1));
    }
  };

  return (
    <Wrapper>
      {!isLoading ? (
        <>
          <InnerWrapper
            bgPath={
              data
                ? makeImgPath("original", data.results[0]?.backdrop_path)
                : ""
            }
          >
            <SectionTitle>Movie : Popular</SectionTitle>
            <Slider>
              <AnimatePresence>
                <Row
                  key={moviePage}
                  variants={rowVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 4, type: "tween" }}
                >
                  {data ? (
                    data.results
                      .slice(moviePage * OFF_SET, moviePage * OFF_SET + OFF_SET)
                      .map((movie) => (
                        <MovieCard
                          key={movie.id}
                          bgPath={makeImgPath("w200", movie.poster_path)}
                        >
                          <Describe>{movie.title}</Describe>
                        </MovieCard>
                      ))
                  ) : (
                    <Loader>Loading...</Loader>
                  )}
                </Row>
              </AnimatePresence>
              <Btn onClick={(e) => onLeft("movie")}>&lt;</Btn>
              <Btn onClick={() => onRight("movie")}>&gt;</Btn>
            </Slider>
          </InnerWrapper>
          <InnerWrapper
            bgPath={
              data ? makeImgPath("original", data.results[0].backdrop_path) : ""
            }
          >
            <SectionTitle>Tv : Popular</SectionTitle>
            <Slider></Slider>
          </InnerWrapper>
        </>
      ) : null}
    </Wrapper>
  );
}

export default Home;
