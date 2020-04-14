import React from "react";
import { Container, Loader } from "./elements";

export const Spinner = () => (
  <Loader>
    <div className="xyz-out" />
    <div className="xyz-in" />
  </Loader>
);

const App = ({ styles }) => (
  <Container style={{ ...styles }}>
    <Spinner />
  </Container>
);

export default App;
