import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ActionPopupProps, ActionPopupTemplate } from "./ActionPopup.types";
import Button from "../../forms/Button/Button";

const ActionPopup = (props: ActionPopupProps) => {
  return (
    <>
      <div className={`action-popup ${props.open ? "" : "closed"}`}>
        <div className="action-popup-toolbar">
          <span className="title">{props.title ? props.title : " "}</span>
          <FontAwesomeIcon
            className="close"
            icon={faXmark}
            onClick={() => {
              props.onClose();
            }}
          />
        </div>
        <div className="action-popup-message">{props.message}</div>
        <div className="action-popup-buttons">
          {props.template && (
            <>
              <Button
                onClick={() => {
                  props.onClose();
                }}
                text={"Cancel"}
              />
            </>
          )}
          {props.items && props.items.length > 0 ? (
            <>
              {props.items.map((btn, i) => {
                return (
                  <Button
                    key={i}
                    text={btn.text}
                    onClick={() => {
                      btn.onClick();
                    }}
                  />
                );
              })}
            </>
          ) : (
            <>
              {!props.template && (
                <Button
                  text={"Ok"}
                  onClick={() => {
                    props.onClose();
                  }}
                />
              )}
            </>
          )}
          {props.template && props.template === ActionPopupTemplate.Confirm && (
            <>
              <Button
                onClick={() => {
                  if (props.onTemplateButtonClick) {
                    props.onTemplateButtonClick();
                  }
                }}
                text={"Confirm"}
              />
            </>
          )}

          {props.template && props.template === ActionPopupTemplate.Save && (
            <>
              <Button
                onClick={() => {
                  if (props.onTemplateButtonClick) {
                    props.onTemplateButtonClick();
                  }
                }}
                text={"Save"}
              />
            </>
          )}
          {props.template && props.template === ActionPopupTemplate.Delete && (
            <>
              <Button
                onClick={() => {
                  if (props.onTemplateButtonClick) {
                    props.onTemplateButtonClick();
                  }
                }}
                text={"Delete"}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ActionPopup;
