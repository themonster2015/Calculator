import React from "react";
import PropTypes from "prop-types";
export default class Button extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <div>{this.props.buttonName}</div>;
  }
}
Button.propTypes = {
  buttonName: PropTypes.string
};
