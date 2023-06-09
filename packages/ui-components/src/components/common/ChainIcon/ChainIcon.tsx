import React from "react";
import { Chain, ChainIconProps } from "./ChainIcon.types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin, faEthereum } from "@fortawesome/free-brands-svg-icons";

const ChainIcon = (props: ChainIconProps) => {
  return (
    <div className="chain-icon">
      <div className="icon">
        {props.chain === Chain.Ethereum && (
          <FontAwesomeIcon icon={faEthereum} />
        )}
        {props.chain === Chain.Bitcoin && <FontAwesomeIcon icon={faBitcoin} />}
      </div>
      {props.text && (
        <span className="text kanit">
          {props.chain === Chain.Ethereum && <>ethereum</>}
          {props.chain === Chain.Bitcoin && <>bitcoin</>}
        </span>
      )}
    </div>
  );
};

export default ChainIcon;
