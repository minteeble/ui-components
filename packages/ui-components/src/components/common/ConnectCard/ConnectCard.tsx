import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../../forms/Button";
import { ConnectCardProps } from "./ConnectCard.types";
import { PageCard } from "../../page/PageCard";

const ConnectCard = (props: ConnectCardProps) => {
  return (
    <>
      <PageCard className={`connect-card`}>
        <>
          <div className="message">
            <div className="icon-wrapper">
              <FontAwesomeIcon className="icon" icon={faWallet} />
            </div>
            <span className="text">
              Connect your wallet to interact with the page
            </span>
          </div>
          <Button text={"Connect"} onClick={() => props.onConnect()} />
        </>
      </PageCard>
    </>
  );
};

export default ConnectCard;
