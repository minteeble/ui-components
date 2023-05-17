import React, { useState } from "react";
import { ReadOnlyFieldProps } from "./ReadOnlyField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

const ReadOnlyField = (props: ReadOnlyFieldProps) => {
  const [copyVal, setCopyVal] = useState<string>("");

  return (
    <>
      <div className="read-only-field">
        <label className="field-label">{props.label}</label>
        {Array.isArray(props.value) ? (
          props.value.map((val, i) => {
            return (
              <div className="value-wrapper">
                <p className="value montserrat" key={i}>
                  {val}
                </p>
                {props.copyable && (
                  <FontAwesomeIcon
                    onClick={() => {
                      setCopyVal(val);
                      window.navigator.clipboard.writeText(val);
                      setTimeout(() => {
                        setCopyVal("");
                      }, 3000);
                    }}
                    icon={copyVal === val ? faCheck : faCopy}
                  />
                )}
              </div>
            );
          })
        ) : (
          <div className="value-wrapper">
            <p className="value montserrat">{props.value}</p>
            {props.copyable && (
              <FontAwesomeIcon
                onClick={() => {
                  setCopyVal(props.value);
                  window.navigator.clipboard.writeText(props.value);
                  setTimeout(() => {
                    setCopyVal("");
                  }, 3000);
                }}
                icon={copyVal === props.value ? faCheck : faCopy}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ReadOnlyField;
