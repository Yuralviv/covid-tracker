import React from "react";
import "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Cards />
        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
