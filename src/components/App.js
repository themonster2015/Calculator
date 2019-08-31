import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../App.css";
export default class App extends React.Component {
  render() {
    return (
      <div id="calculator">
        <Display result="0" />
        <ButtonPanel />
      </div>
    );
  }
}
