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
import LoadableComponent from "../../common/LoadableComponent/LoadableComponent";
import Button from "../../forms/Button/Button";
import { WalletConnectionDisplayProps } from "./WalletConnectionDisplay.types";
import { AvatarHash } from "../../common";

const WalletConnectionDisplay = (props: WalletConnectionDisplayProps) => {
  const evalWalletAbbreviation = (address: string): string => {
    if (address.length != 42) return address;

    return address.substring(0, 6) + "..." + address.substring(38, 42);
  };

  return (
    <div className="wallet-connection-display-wrapper">
      <LoadableComponent showCondition={() => !props.isLoading}>
        {props.address !== "" ? (
          <>
            <div className="wallet-connection-wrapper">
              <div className="wallet-avatar-box">
                {props.avatarImage && (
                  <AvatarHash width={40} address={props.address} />
                )}
              </div>
              <div className="wallet-address-box">
                <span className="wallet-address">
                  {evalWalletAbbreviation(props.address)}
                </span>
              </div>
              <div className="disconnect-popup">
                <Button
                  onClick={() => {
                    props.onSignOutClick ? props.onSignOutClick() : () => {};
                  }}
                  text={props.buttonText || "Disconnect"}
                />
              </div>
            </div>
          </>
        ) : (
          <Button text="SIGN IN" onClick={props.onSignInClick} />
        )}
      </LoadableComponent>
    </div>
  );
};

export default WalletConnectionDisplay;
