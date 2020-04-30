import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
import { Container } from "./elements";
import Grid from "./gridLayout"

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Busilop Code Generator app</title>

        <meta name="description" content="" />
        <meta name="author" content="Joel" />
        <meta name="robots" content="all" />
        <meta name="googlebot" content="all" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="" />
        <meta property="og:image" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
      </Helmet>
      <Container>
        <div className="card">

          <div className="nav">
            <h1>Create a new Scaffolding</h1>
          </div>
          <Grid />
        </div>
      </Container>
    </Fragment>
  );
};

export default Home;




