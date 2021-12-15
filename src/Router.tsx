import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

function Router() {
  return (
    <></>
    // <HashRouter basename={process.env.PUBLIC_URL}>
    //   <Switch>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </HashRouter>
  );
}

export default Router;
