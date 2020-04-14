import React, { Fragment } from "react";
import { BigTitle, Container, SectionOne, BigSubTitle } from "../home/elements";

const App = () => {
  return (
    <Fragment>
      <Container style={{ height: "100%" }}>
        <SectionOne style={{ height: "100%" }}>
          <BigTitle style={{ marginTop: "10%" }}>
            Something went wrong{" "}
            <span role="img" aria-label="unfortunately">
              ☹️
            </span>
          </BigTitle>
          <BigSubTitle>
            Something has gone wrong with the application, please refresh your
            browser to continue
          </BigSubTitle>
        </SectionOne>
      </Container>
    </Fragment>
  );
};

export default App;
