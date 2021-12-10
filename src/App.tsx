import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkModeState } from "./atoms";
import Router from "./Router";
import { darkTheme, lightTheme } from "./theme";

function App() {
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
