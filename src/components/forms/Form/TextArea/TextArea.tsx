import React, { useState } from "react";
import { TextAreaProps } from "./TextArea.types";

const TextArea = (props: TextAreaProps) => {
  return (
    <>
      <div className="textarea-wrapper">
        <div className="textarea-header">
          {props.label && (
            <label className="textarea-label">{props.label}</label>
          )}
          {props.errorMessage && !props.readonlyField && (
            <span className="error">{props.errorMessage}</span>
          )}
        </div>
        <textarea
          style={{
            resize: props.readonlyField
              ? "none"
              : props.resizable
              ? "both"
              : "none",
          }}
          cols={props.cols ? props.cols : 30}
          rows={props.rows ? props.rows : 10}
          placeholder={props.placeHolder ? props.placeHolder : ""}
          className={`textarea ${props.readonlyField ? "disabled" : ""}`}
          readOnly={props.readonlyField ? true : false}
          value={props.value}
          onChange={(e) => {
            // @ts-ignore
            props.onValueChange(e.target.value);
          }}
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
