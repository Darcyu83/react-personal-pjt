import { useState } from "react";
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
} from "./GridFlexCss";

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
`;

const ListIndicator = styled(GridItem)`
  grid-column: span 2;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2.5rem;
  background-color: rgba(0, 0, 0, 0.6);
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
function GridCss() {
  const [isOpen, setIsOpen] = useState(false);
  const [animeKey, setAnimeKey] = useState(0);
  const onToggleOpen = () => {
    setIsOpen((curr) => !curr);
    setAnimeKey((curr) => curr + 1);
  };

  const { isLoading: isLoadingNowPlaying, data: nowPlayingData } =
    useQuery<IGetMoviesResult>(["movies", "now_playing"], () =>
      getMoviesListAPI("now_playing")
    );

  const { isLoading: isLoadingTopRatedData, data: topRatedData } =
    useQuery<IGetMoviesResult>(["movies", "top_rated"], () =>
      getMoviesListAPI("top_rated")
    );
  return (
    <GridWrapper>
      <MaxWidthSection>
        <GridBox columns={6} rows={4} itemMinHeight={300}>
          <ListIndicator>Now Playing &rarr;</ListIndicator>
          {nowPlayingData?.results.slice(0, 10).map((movie) => {
            return (
              <MovieCard bgPhoto={makeImgPath("w200", movie.poster_path)}>
                <MovieCardTitle>{movie.title}</MovieCardTitle>
              </MovieCard>
            );
          })}

          <ListIndicator>Top Rated &rarr;</ListIndicator>
          {topRatedData?.results.slice(0, 10).map((movie) => {
            return (
              <MovieCard bgPhoto={makeImgPath("w200", movie.poster_path)}>
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
