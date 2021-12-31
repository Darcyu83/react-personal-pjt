import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getMoviesListAPI, makeImgPath } from "../../api";
import { IGetMoviesResult } from "../../atoms";
import {
  FullWidthSection,
  GridBox,
  GridItem,
  GridWrapper,
  MaxWidthSection,
} from "../responsive/GridFlexCss";
import Select from "../common/Select";

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding: 20px 10px;
`;

const MovieCard = styled(GridItem)`
  width: 100%;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  position: relative;
  min-height: 300px;
  border-radius: 15px;
  transform-origin: center bottom;
  box-shadow: 0px 2px 3px white, 0px 3px 5px white;
`;

const ListIndicator = styled(GridItem)`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  background-color: rgba(24, 20, 20, 0.6);
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.r720} {
    grid-row: span 2;
    grid-column: auto;
  }
`;

const MovieCardTitle = styled.h2`
  position: absolute;
  bottom: 0;
  color: white;
  width: 100%;
  font-size: 1rem;
  height: 2.5rem;
  background-color: rgba(0, 0, 0, 0.8);
`;

const movieCardProps = {
  hover: {
    scale: 1.05,
    zIndex: 10,
    boxShadow: "0px 10px 10px rgb(255 255 255), red 0px 20px 30px",
  },
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    };
  },
};

const selectProps = [
  { key: 0, value: 0, text: "표시 개수" },
  { key: 1, value: 10, text: "10개씩 표시" },
  { key: 2, value: 20, text: "20개식 표시" },
];

function GridCss() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNowComplete, setIsNowComplete] = useState(true);
  const [isTopComplete, setIsTopComplete] = useState(false);
  const [pageNowPlay, setPpageNowPlay] = useState(0);
  const [pageTopRated, setPageTopRated] = useState(0);
  const [qntyNowShowed, setQntyNowShowed] = useState(10);
  const [qntyTopShowed, setQntyTopShowed] = useState(10);

  const onToggleOpen = () => {
    // setIsOpen((curr) => !curr);
    // setAnimeKey((curr) => curr + 1);
  };

  const { isLoading: isLoadingNowPlaying, data: nowPlayingData } =
    useQuery<IGetMoviesResult>(["movies", "now_playing"], () =>
      getMoviesListAPI("now_playing")
    );

  const { isLoading: isLoadingTopRatedData, data: topRatedData } =
    useQuery<IGetMoviesResult>(["movies", "top_rated"], () =>
      getMoviesListAPI("top_rated")
    );

  const onNextNowPlay = (direction: number) => {
    if (!nowPlayingData) return;
    const maxPage = Math.ceil(nowPlayingData.results.length / qntyNowShowed);
    if (maxPage === 1) {
      alert("다음페이지가 없습니다. 카테고리별 최대 20개의 영화목록 표시됨.");
      return;
    }
    setIsNowComplete((curr) => !curr);
    setPpageNowPlay((curr) => {
      return curr + direction >= maxPage ? 0 : curr + direction;
    });
  };

  const onNextTopRated = (direction: number) => {
    if (!topRatedData) return;
    const maxPage = Math.ceil(topRatedData.results.length / qntyTopShowed);
    if (maxPage === 1)
      if (maxPage === 1) {
        alert("다음페이지가 없습니다. 카테고리별 최대 20개의 영화목록 표시됨.");
        return;
      }
    setIsTopComplete((curr) => !curr);
    setPageTopRated((curr) => {
      return curr + direction >= maxPage ? 0 : curr + direction;
    });
  };

  const onIsNowComplete = () => setIsNowComplete((curr) => !curr);
  const onIsTopComplete = () => setIsTopComplete((curr) => !curr);

  const onNowListChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setPpageNowPlay(0);
    setQntyNowShowed(Number(value) <= 0 ? 10 : Number(value));
  };
  const onTopListChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setPageTopRated(0);
    setQntyTopShowed(Number(value) <= 0 ? 10 : Number(value));
  };
  return (
    <GridWrapper>
      <MaxWidthSection>
        <AnimatePresence initial={false} onExitComplete={onIsNowComplete}>
          {isNowComplete && (
            <GridBox
              key={pageNowPlay}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              columns={6}
              rows={2}
              itemMinHeight={300}
              style={{ position: "relative" }}
            >
              <ListIndicator onClick={() => onNextNowPlay(1)}>
                Now Playing &rarr;
              </ListIndicator>
              <Select
                onChange={onNowListChange}
                selectProps={selectProps}
                qntyShowed={qntyNowShowed}
              ></Select>
              {nowPlayingData?.results
                .slice(
                  pageNowPlay * qntyNowShowed,
                  pageNowPlay * qntyNowShowed + qntyNowShowed
                )
                .map((movie) => {
                  return (
                    <MovieCard
                      variants={movieCardProps}
                      whileHover="hover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      bgPhoto={makeImgPath("w200", movie.poster_path)}
                    >
                      <MovieCardTitle>{movie.title}</MovieCardTitle>
                    </MovieCard>
                  );
                })}
            </GridBox>
          )}
        </AnimatePresence>

        <GridBox
          key={pageTopRated}
          columns={6}
          rows={2}
          itemMinHeight={300}
          style={{ position: "relative" }}
        >
          <Select
            onChange={onTopListChange}
            selectProps={selectProps}
            qntyShowed={qntyTopShowed}
          ></Select>
          <ListIndicator onClick={() => onNextTopRated(1)}>
            Top Rated &rarr;
          </ListIndicator>
          {topRatedData?.results
            .slice(
              pageTopRated * qntyTopShowed,
              pageTopRated * qntyTopShowed + qntyTopShowed
            )
            .map((movie, idx) => {
              return (
                <MovieCard
                  variants={movieCardProps}
                  whileHover="hover"
                  initial={{ opacity: 0 }}
                  animate={{ scale: [0.9, 1.1, 1], opacity: 1 }}
                  transition={{ type: "tween", delay: idx / 10 }}
                  bgPhoto={makeImgPath("w200", movie.poster_path)}
                >
                  <MovieCardTitle>{movie.title}</MovieCardTitle>
                </MovieCard>
              );
            })}
        </GridBox>
      </MaxWidthSection>
    </GridWrapper>
  );
}

export default GridCss;
