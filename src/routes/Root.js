import React from 'react'
import App from "./main";
// import StoreProvider from "../stores/nodeStore";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ErrorBoundary from "../containers/ErrorBoundary";
// import stores from "../stores";
// import { Provider } from 'mobx-react'

const Root = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        {/* <Provider data={stores.jStore}> */}
          <App />
        {/* </Provider> */}
      </BrowserRouter>
    </HelmetProvider>
  </ErrorBoundary>
);

export default Root;
