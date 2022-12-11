import React from "react";
import { KeyValueBoxProps } from "./KeyValueBox.types";

const KeyValueBox = (props: KeyValueBoxProps) => {
  return (
    <>
      <div className="key-value-box">
        <ul className="keys">
          {props.items.map((item) => {
            return <li className="key">{item.key}</li>;
          })}
        </ul>
        <ul className="values">
          {props.items.map((item) => {
            return <li className="value">{item.value}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default KeyValueBox;
