import React, { Suspense, lazy } from "react";
import Loading from "../../containers/Loading";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../../containers/Home"));
const Wizard = lazy(() => import("../../containers/Wizard"));
const Blocks = lazy(() => import("../../containers/Blocks"));
const Builder = lazy(() => import("../../containers/DataBuilder"));
const Formio = lazy(() => import("../../containers/Formio"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Wizard} />
      <Route exact path="/blocks" component={Blocks} />
      <Route exact path="/builder" component={Builder} />
      <Route exact path="/form" component={Formio} />

    </Switch>
  </Suspense>
);

export default App;
