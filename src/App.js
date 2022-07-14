import React from "react"
import GlobalStyle from "./Global";
import HomePage from "./pages/Home/HomePage/HomePage";
import Router from "./Router/Routes";


const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
