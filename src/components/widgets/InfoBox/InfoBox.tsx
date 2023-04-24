import React from "react";
import { InfoBoxProps } from "./InfoBox.types";
import { Button } from "../../forms";

const InfoBox = (props: InfoBoxProps) => {
  return (
    <>
      <div className="info-box">
        <div className="title kanit">{props.title}</div>
        <div className="value">{props.value}</div>
        <div className="sub-title kanit">{props.subTitle}</div>
        <div className="button-section">
          {props.buttonText && props.buttonText.length > 0 && (
            <Button
              text={props.buttonText}
              onClick={
                typeof props.onButtonClick !== "undefined"
                  ? props.onButtonClick
                  : () => {}
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default InfoBox;
