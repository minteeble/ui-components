import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTriangleExclamation,
  faWallet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { ErrorCardProps } from "./ErrorCard.types";
import PageCard from "../../page/PageCard";

const ErrorCard = (props: ErrorCardProps) => {
  //States
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  //Methods
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsActive(false);
      setIsClosing(false);
    }, 500);
  };

  //Effects
  useEffect(() => {
    if (props.active) {
      setIsActive(props.active);
    } else {
      handleClose();
    }
  }, [props.active]);

  return (
    <>
      {isActive && (
        <PageCard className={`error-card ${isClosing ? "close" : ""}`}>
          <>
            <div className="message">
              <div className="icon-wrapper">
                <FontAwesomeIcon
                  className="icon"
                  icon={faTriangleExclamation}
                />
              </div>
              <span className="text">{props.errorMessage}</span>
            </div>
            {props.canClose ? (
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

export default ErrorCard;
