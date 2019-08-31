import React from "react";
import PropTypes from "prop-types";
import "../Display.css";
export default function Display(props) {
  return (
    <div class="display">
      <p>{props.result}</p>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string
};
