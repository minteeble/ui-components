import React, { useState } from "react";
import { KeyValueBoxProps, KeyValueBoxType } from "./KeyValueBox.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

const KeyValueBox = (props: KeyValueBoxProps) => {
  const type = props.type || KeyValueBoxType.Horizontal;

  const [isCopied, setIsCopied] = useState<string>("");

  return (
    <>
      <div
        className={`key-value-box ${
          type === KeyValueBoxType.Horizontal ? "horizontal" : "vertical"
        }`}
      >
        {type === KeyValueBoxType.Horizontal ? (
          <>
            <ul className="keys">
              {props.items.map((item, i) => {
                return (
                  <li key={i} className="key">
                    {item.key}
                  </li>
                );
              })}
            </ul>
            <ul className="values">
              {props.items.map((item, i) => {
                return (
                  <li key={i} className="value">
                    <span>{item.value}</span>
                    {item.copyable && (
                      <div
                        className="copy"
                        onClick={() => {
                          navigator.clipboard.writeText(item.value);
                          setIsCopied(item.value);
                          setTimeout(() => {
                            setIsCopied("");
                          }, 3000);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={isCopied === item.value ? faCheck : faCopy}
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <>
            {props.items.map((item, i) => {
              return (
                <div key={i} className="key-value-row">
                  <div className="key">{item.key}</div>
                  <div className="value">
                    <span>{item.value}</span>
                    {item.copyable && (
                      <div
                        className="copy"
                        onClick={() => {
                          navigator.clipboard.writeText(item.value);
                          setIsCopied(item.value);
                          setTimeout(() => {
                            setIsCopied("");
                          }, 3000);
                        }}
                      >
                        <FontAwesomeIcon
                          icon={isCopied === item.value ? faCheck : faCopy}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default KeyValueBox;
