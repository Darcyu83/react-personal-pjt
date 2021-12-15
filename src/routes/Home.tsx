import { Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Coindetail from "./coin/Coindetail";
import Coinlist from "./coin/Coinlist";
import Welcome from "./Welcome";

const Wrapper = styled.div``;
function Home() {
  return (
    <Wrapper>
      {/*  
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/coinlist">
          <Coinlist />
        </Route>
        <Route path="/detail/:coinId">
          <Coindetail />
        </Route>
      </Switch> */}
    </Wrapper>
  );
}

export default Home;
