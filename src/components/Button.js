import React from "react";
import PropTypes from "prop-types";
import "../Button.css";
export default function Button(props) {
  let button = "button ";
  if (props.wide) {
    button += "wide ";
  }
  if (props.orange) {
    button += "orange ";
  } else {
    button += "grey ";
  }

  return <div class={button}>{props.buttonName}</div>;
}
Button.propTypes = {
  buttonName: PropTypes.string
};
