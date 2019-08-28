import React from "react";
export default class Display extends React.Component {
  constructor(props) {
    super();
    this.state = {
      result: "0"
    };
  }
  render() {
    return <div>Display: {this.state.result}</div>;
  }
}
