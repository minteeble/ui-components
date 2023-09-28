import {
  faTriangleExclamation,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { PageCard } from "../../page";
import LoadingSpinner, { LoadingSpinnerSize } from "../LoadingSpinner";
import { InfoCardProps, InfoCardSize, InfoCardType } from "./InfoCard.types";

export const InfoCard = (props: InfoCardProps) => {
  //States
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const type = props.type ?? InfoCardType.Info;
  const size = props.size ?? InfoCardSize.Normal;
  const closable = props.closable ?? false;

  //Methods
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsActive(false);
      setIsClosing(false);
    }, 500);
  };

  const checkActiveState = () => {
    console.log("Active:", props.active, typeof props.active);
    if (props.active) {
      setIsActive(props.active);
    } else if (typeof props.active === "undefined") {
      setIsActive(true);
    } else {
      handleClose();
    }
  };

  //Effects
  useEffect(() => {
    checkActiveState();
  }, [props.active]);

  useEffect(() => {
    checkActiveState();
  }, []);

  return (
    <>
      {isActive && (
        <PageCard
          className={`info-card type-${type} size-${size} ${
            isClosing ? "close" : ""
          } ${props.className || ""}`}
          style={props.style}
        >
          <>
            <div className="message-box">
              <div className="icon-wrapper">
                {type === InfoCardType.Loading ? (
                  <>
                    <LoadingSpinner Size={LoadingSpinnerSize.Medium} />
                  </>
                ) : (
                  <FontAwesomeIcon
                    className="icon"
                    icon={faTriangleExclamation}
                  />
                )}
              </div>
              <span className="message-content">
                {props.message || "Message"}
              </span>
            </div>
            {closable ? (
              <>
                <span
                  className="close"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </span>
              </>
            ) : (
              <i></i>
            )}
          </>
        </PageCard>
      )}
    </>
  );
};
