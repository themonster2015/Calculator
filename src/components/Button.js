import React from "react";
import PropTypes from "prop-types";
import "../Button.css";
export default function Button(props) {
  return <div>{props.buttonName}</div>;
}
Button.propTypes = {
  buttonName: PropTypes.string
};
