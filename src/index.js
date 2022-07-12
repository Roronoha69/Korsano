import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from "auth0Provider";


// Modal.setAppElement("#root");


ReactDOM.render(
  <Router>
  <Auth0ProviderWithHistory>
    <App />
  </Auth0ProviderWithHistory>
</Router>,

  document.getElementById("root")
);
