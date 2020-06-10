import React, { Suspense, lazy } from "react";
import Loading from "../../containers/Loading";
import { Route, Switch } from "react-router-dom";

// const Home = lazy(() => import("../../containers/Home"));
const Wizard = lazy(() => import("../../containers/Wizard"));
const Socket = lazy(() => import("../../containers/Socket"));
const Builder = lazy(() => import("../../containers/DataBuilder"));
const Form = lazy(() => import("../../containers/Formio"));
const Summary = lazy(() => import("../../containers/Summary"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Wizard} />
      <Route exact path="/socket" component={Socket} />
      <Route exact path="/builder" component={Builder} />
      <Route exact path="/summary" component={Summary} />
      <Route exact path="/form" component={Form} />
    </Switch>
  </Suspense>
);

export default App;
