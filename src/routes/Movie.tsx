import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { constSelector } from "recoil";
import styled from "styled-components";
import { makeImgPath, getMoviesListAPI } from "../api";
import { IGetMoviesResult, IMovie } from "../atoms";
import PageSlider from "../components/motion/slider/PageSlider";

const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 1));
`;

const Banner = styled.div<{ bgPath: string | undefined }>`
  background-image: url(${(props) => props.bgPath});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 70vh;

  display: flex;
  align-items: flex-end;
`;

const BannerInfo = styled.div`
  padding: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
`;

const BannerDesc = styled.p``;

const Overlay = styled.div`
  position: fixed;
  display: block;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 101;
`;

const OutterBox = styled.div`
  width: 60%;

  min-height: 550px;
  height: 80%;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  margin: 0 auto;
  top: 100px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  z-index: 102;
  left: 50%;
  transform: translate(-50%, 0);
`;
const InfoPoster = styled.img`
  width: 40%;
  margin-right: 10px;
`;
const InnerBox = styled.div`
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  a {
    padding: 20px;
    width: fit-content;
    color: ${(props) => props.theme.accentColor};
    align-self: flex-end;
  }
`;
const InfoTitle = styled.h1`
  font-size: 2.5rem;
`;
const InfoDesc = styled.p`
  font-size: 1rem;
`;

function Movie() {
  const nowPlaying = useQuery<IGetMoviesResult>(["movies", "now_playing"], () =>
    getMoviesListAPI("now_playing")
  );
  const popular = useQuery<IGetMoviesResult>(["movies", "popular"], () =>
    getMoviesListAPI("popular")
  );
  const topRated = useQuery<IGetMoviesResult>(["movies", "top_rated"], () =>
    getMoviesListAPI("top_rated")
  );

  const history = useHistory();

  const nowPlayingData = nowPlaying.data?.results;
  const [detailInfo, setDetailInfo] = useState<IMovie>();
  const popMatch = useRouteMatch<{ movieId: string; cate: string }>("/pop");
  const { state } = useLocation<{ movieId: string; cate: string }>();
  console.log("popMath", popMatch);

  const getMatchedData = () => {
    if (popMatch) {
      console.log(" state.cate", state.movieId, state.cate);

      if (nowPlaying && popular && topRated) {
        if (state.cate === "now_playing") {
          return nowPlaying;
        } else if (state.cate === "popular") {
          return popular;
        } else if (state.cate === "top_rated") {
          return topRated;
        }
      }
    }
  };

  useEffect(() => {
    const matchedData = getMatchedData();

    console.log("useEffect Data", matchedData?.data?.results);
    setDetailInfo(
      matchedData?.data?.results.find(
        (movie) => movie.id === Number(state.movieId)
      )
    );
  }, [popMatch]);

  const onClearOverlay = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      {!nowPlaying.isLoading ? (
        <>
          <Banner
            bgPath={
              nowPlayingData
                ? makeImgPath("original", nowPlayingData[0]?.backdrop_path)
                : ""
            }
          >
            <BannerInfo>
              <BannerTitle>
                <Link
                  to={{
                    pathname: `/pop`,
                    state: {
                      movieId: nowPlayingData && nowPlayingData[0].id,
                      cate: "now_playing",
                    },
                  }}
                >
                  {nowPlayingData
                    ? nowPlayingData[0]?.title.toUpperCase()
                    : null}
                </Link>
              </BannerTitle>
              <BannerDesc>
                {nowPlayingData ? nowPlayingData[0]?.overview : null}
              </BannerDesc>
            </BannerInfo>
          </Banner>
          <PageSlider cate="now_playing" />
          <PageSlider cate="popular" />
          <PageSlider cate="top_rated" />
        </>
      ) : null}
      <AnimatePresence>
        {popMatch && (
          <>
            <Overlay onClick={onClearOverlay}></Overlay>
            <OutterBox>
              {detailInfo ? (
                <>
                  <InfoPoster
                    src={makeImgPath("w500", detailInfo.poster_path)}
                  />
                  <InnerBox>
                    <InfoTitle>{detailInfo.title}</InfoTitle>
                    <InfoDesc>{detailInfo.overview}</InfoDesc>
                    <Link
                      to={{
                        pathname: `/detail${detailInfo.id}`,
                        state: {
                          movieId: detailInfo.id,
                        },
                      }}
                    >
                      Go Detail &gt;&gt;
                    </Link>
                  </InnerBox>
                </>
              ) : null}
            </OutterBox>
          </>
        )}
      </AnimatePresence>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </Wrapper>
  );
}

export default Movie;
