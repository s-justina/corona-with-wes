import React from "react";
import Stats from "./components/Stats";
import CountriesSelector from "./components/CountriesSelector";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Stats url="https://covid19.mathdro.id/api" />
      <CountriesSelector />
    </div>
  );
}

export default App;
