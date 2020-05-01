import React, { Suspense, lazy } from "react";
import Loading from "../../containers/Loading";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../../containers/Home"));
const Blocks = lazy(() => import("../../containers/Blocks"));
const Builder = lazy(() => import("../../containers/DataBuilder"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blocks" component={Blocks} />
      <Route exact path="/builder" component={Builder} />
    </Switch>
  </Suspense>
);

export default App;
