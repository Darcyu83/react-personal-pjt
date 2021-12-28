import { useRecoilValue } from "recoil";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkModeState } from "./atoms";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import { darkTheme, lightTheme } from "./theme";
import UpperMenu from "./components/UpperMenu";
import Coinlist from "./routes/coin/Coinlist";
import CoinInfo from "./components/coin/CoinInfo";
import Todolist from "./routes/todo/Todolist";
import Motion from "./components/motion/Motion";

import AniPresence from "./components/motion/AniPresence";
import Slider from "./routes/slider/Slider";
import MovieDetail from "./components/movie/MovieDetail";
import { QueryClient, QueryClientProvider } from "react-query";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
  background-color: ${(props) => props.theme.bgColor}
}
a {
  text-decoration:none;
  color:inherit;
}
`;

function App() {
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />

        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <UpperMenu />
          <Switch>
            <Route path="/coinlist">
              <Coinlist />
            </Route>
            <Route path="/coin/:coinId">
              <CoinInfo />
            </Route>
            <Route path="/todolist">
              <Todolist />
            </Route>
            <Route path="/motion">
              <Motion />
            </Route>
            <Route path="/animate">
              <AniPresence />
            </Route>
            <Route path="/slider">
              <Slider />
            </Route>
            <Route path="/movies">
              <Home />
            </Route>
            <Route path="/detail:movieId">
              <MovieDetail />
            </Route>
            <Route path="/tv">
              <Motion />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
