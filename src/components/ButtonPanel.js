import React from "react";
import Button from "./Button";
import "../ButtonPanel.css";
export default function ButtonPanel() {
  const btnGroup1 = ["AC", "+/-", "%", "÷"];
  const btnGroup2 = ["7", "8", "9", "X"];
  const btnGroup3 = ["4", "5", "6", "-"];
  const btnGroup4 = ["1", "2", "3", "+"];
  const btnGroup5 = ["0", ".", "="];
  return (
    <div>
      <div class="buttons">
        {btnGroup1.map(button => (
          <Button buttonName={button} />
        ))}
      </div>
      <div class="buttons">
        {btnGroup2.map(button => (
          <Button buttonName={button} />
        ))}
      </div>
      <div class="buttons">
        {btnGroup3.map(button => (
          <Button buttonName={button} />
        ))}
      </div>
      <div class="buttons">
        {btnGroup4.map(button => (
          <Button buttonName={button} />
        ))}
      </div>
      <div class="buttons">
        {btnGroup5.map(button => (
          <Button buttonName={button} />
        ))}
      </div>
    </div>
  );
}
