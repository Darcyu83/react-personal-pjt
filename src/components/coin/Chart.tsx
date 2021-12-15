import ApexCharts from "react-apexcharts";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { darkModeState, IACoin } from "../../atoms";

const Wrapper = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.textColor};
  border-top: 0;
  font-size: 3rem;
`;

const Title = styled.span`
  font-size: 2rem;
  color: tomato;
`;

interface IHisData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const isDarkMode = useRecoilValue(darkModeState);
  const { coinId } = useParams<{ coinId: string }>();
  const { state } = useLocation<{ data: IACoin }>();

  const getData = () => {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate - 60 * 60 * 24 * 7;
    return fetch(
      `https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
    ).then((response) => response.json());
  };

  console.log(useQuery<IHisData[]>("callAPI", () => getData()));

  const { isLoading, data } = useQuery<IHisData[]>("callAPI", () => getData());

  console.log("coinId", coinId);
  console.log("state", state?.data);

  const sData = {
    series: [
      {
        name: "Changing Rate",
        data: Object.values(state?.data.quotes.USD),
      },
    ],
  };

  return (
    <Wrapper>
      <Title>Change Rates</Title>
      <ApexCharts
        options={{
          chart: {
            toolbar: {
              show: false,
            },
            background: "transparent",
            width: "100%",
          },
          xaxis: {
            categories: Object.keys(state?.data.quotes.USD),
            labels: { rotate: -90 },
          },
          yaxis: { show: false },
          theme: {
            mode: isDarkMode ? "dark" : "light",
            palette: "pallete1",
          },
          tooltip: {
            y: {
              formatter: (value) => value.toFixed(2),
            },
          },
        }}
        series={sData.series}
        type="line"
        width="500"
      />
    </Wrapper>
  );
}
export default Chart;
