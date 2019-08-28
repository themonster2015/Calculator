import React from "react";
export default class Button extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <div>{this.props.buttonName}</div>;
  }
}
