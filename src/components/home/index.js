import React, { lazy, Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Container } from "./elements";

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
        <div>
          <Link to="/lotr">View LOTR</Link>
        </div>
      </Container>
    </Fragment>
  );
};

export default Home;
