import React, { Suspense, lazy } from "react";
import Loading from "../../containers/Loading";
import { Route, Switch } from "react-router-dom";

const Home = lazy(() => import("../../containers/Home"));
const Register = lazy(() => import("../../containers/Register"));

const App = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </Suspense>
);

export default App;
