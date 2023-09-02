import { StrictMode } from "react";
import ReactDOM from "react-dom"; //Import the ReactDOM module 
import "./App.css"; // import the CSS file 
import App from "./App"; //import the aapp

import { BrowserRouter as Router } from "react-router-dom"; //import the BrowserRouter component as Router 

// enable the router features
ReactDOM.render(
  <StrictMode>  
    <Router>  {/*wrapping the App component with the Router*/}
      <App />  
    </Router>
  </StrictMode>,
  document.getElementById("root") 
)