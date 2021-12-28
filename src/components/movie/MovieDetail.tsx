import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieDetail, makeImgPath } from "../../api";

import { IGetMoviesResult, IMovie } from "../../atoms";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  padding-top: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  /* display: grid;
  grid-template-columns: 4fr 6fr;
  gap: 10px; */
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 1.2rem;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 450px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 20px;
  opacity: 0.8;
`;

const ImgWrapper = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  margin-right: 10px;
  border-radius: 10px;
  align-self: right;
`;

const Title = styled.h1`
  font-size: 3rem;
`;
const SubTitle = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: rgb(220, 20, 60, 0.6);

  &:before {
    width: 10px;
    height: 10px;
    background-color: red;
  }
`;

const Genres = styled.ul`
  padding: 10px;
`;

const Genre = styled.li``;
const Overview = styled.p`
  padding: 10px;
`;
const VoteAvg = styled.div`
  padding: 10px;
`;
const ReleasedDate = styled.p`
  padding: 10px;
`;

function MovieDetail() {
  const { movieId } = useParams<{ movieId: string }>();
  console.log("movieId", movieId);

  const { isLoading, data } = useQuery<IMovie>(["detail", movieId], () =>
    getMovieDetail(movieId)
  );

  console.log(data);
  return (
    <Wrapper>
      {data ? (
        <>
          <ImgWrapper>
            <Image src={makeImgPath("w500", data.poster_path)} />
          </ImgWrapper>
          <InfoWrapper>
            <Title>{data.title}</Title>
            <SubTitle>Genre</SubTitle>
            <Genres>
              {data.genres.map((genre) => (
                <Genre>◎&nbsp;{genre.name}</Genre>
              ))}
            </Genres>
            <SubTitle>Grade</SubTitle>
            <VoteAvg>{data.vote_average}</VoteAvg>
            <SubTitle>Overview</SubTitle>
            <Overview>{data.overview}</Overview>
            <SubTitle>Release Date</SubTitle>
            <ReleasedDate>{data.release_date}</ReleasedDate>
          </InfoWrapper>
        </>
      ) : null}
    </Wrapper>
  );
}

export default MovieDetail;
