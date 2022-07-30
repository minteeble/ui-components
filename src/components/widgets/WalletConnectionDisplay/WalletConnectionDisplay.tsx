/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React from "react";
import Button from "../../forms/Button/Button";
import { WalletConnectionDisplayProps } from "./WalletConnectionDisplay.types";

const WalletConnectionDisplay = (props: WalletConnectionDisplayProps) => {
  const evalWalletAbbreviation = (address: string): string => {
    if (address.length != 42) return address;

    return address.substring(0, 6) + "..." + address.substring(38, 42);
  };

  return (
    <div className="wallet-connection-display-wrapper">
      {props.address !== "" ? (
        <>
          <div className="wallet-avatar-box">
            {props.avatarImageUrl && (
              <img
                src={props.avatarImageUrl}
                alt=""
                className="wallet-avatar"
              />
            )}
          </div>
          <div className="wallet-address-box">
            <span className="wallet-address">
              {evalWalletAbbreviation(props.address)}
            </span>
          </div>
        </>
      ) : (
        <Button text="SIGN IN" />
      )}
    </div>
  );
};

export default WalletConnectionDisplay;
