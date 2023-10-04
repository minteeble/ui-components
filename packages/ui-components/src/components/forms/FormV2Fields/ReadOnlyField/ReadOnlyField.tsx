import React, { useState } from "react";
import { ReadOnlyFieldProps } from "./ReadOnlyField.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCheck,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

const ReadOnlyField = (props: ReadOnlyFieldProps) => {
  const [copyVal, setCopyVal] = useState<string>("");

  return (
    <>
      <div className="read-only-field">
        <label className="field-label">{props.label}</label>
        {Array.isArray(props.value) ? (
          <div className="values-wrapper">
            {props.value.length > 0 ? (
              props.value.map((val, i) => {
                return (
                  <div className="value-wrapper">
                    {props.link && val.length > 0 && (
                      <FontAwesomeIcon
                        onClick={() => {
                          window.open(props.link, "_blank");
                        }}
                        icon={faArrowUpRightFromSquare}
                      />
                    )}
                    {props.copyable && val.length > 0 && (
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
                    <p className="value montserrat" key={i}>
                      {val.length > 0 ? val : "Unset"}
                    </p>
                  </div>
                );
              })
            ) : (
              <>
                <div className="value-wrapper">
                  <p className="value montserrat">Unset</p>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="value-wrapper">
            {props.link && props.value.length > 0 && (
              <FontAwesomeIcon
                onClick={() => {
                  window.open(props.link, "_blank");
                }}
                icon={faArrowUpRightFromSquare}
              />
            )}
            {props.copyable && props.value.length > 0 && (
              <FontAwesomeIcon
                onClick={() => {
                  // @ts-ignore
                  setCopyVal(props.value);
                  // @ts-ignore
                  window.navigator.clipboard.writeText(props.value);
                  setTimeout(() => {
                    setCopyVal("");
                  }, 3000);
                }}
                icon={copyVal === props.value ? faCheck : faCopy}
              />
            )}
            <p className="value montserrat">
              {props.value.length > 0 ? props.value : "Unset"}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default ReadOnlyField;
