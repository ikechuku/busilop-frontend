import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { BarLoader } from "react-spinners";
// import axios from "axios";

function App({ store }) {
  const ENDPOINT = "http://127.0.0.1:5000";
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("loadingService", (data) => {
      setResponse(data);
    });
  }, []);

  return (
    <h3 className="text-center">
      {response === "loading" ? <BarLoader width="800" height="30" /> : null}
      {response === "Running Blueprint Generator step:(2/3)" ? (
        <BarLoader width="800" height="30" />
      ) : null}
      {response === "building docker images" ? (
        <BarLoader width="800" height="30" />
      ) : null}
      {response === "Finished running backend services" ? (
        <>
          {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://localhost:9000"
          >
            <input
              type="button"
              className="btn btn-lg btn-primary"
              value="Go to App"
            />
          </a>
          <br />
          &nbsp; &nbsp;
          {/* <a href="http://localhost:5000/download">
            <input
              type="button"
              className="btn btn-lg btn-primary"
              value="Download JAR"
            />
          </a> */}
        </>
      ) : null}
      <br />
      {response}
    </h3>
  );
}

export default App;
