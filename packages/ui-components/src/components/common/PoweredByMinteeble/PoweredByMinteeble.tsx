/**
 * Copyright Minteeble 2023. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import React from "react";
import MinteebleLogo, { MinteebleLogoType } from "../MinteebleLogo";
import { PoweredByMinteebleProps } from "./PoweredByMinteeble.types";

const PoweredByMinteeble = (props: PoweredByMinteebleProps) => {
  let url = props.customUrl || "https://minteeble.com";
  let link = props.link || false;

  let content = (
    <div className="content">
      <span>Powered by</span>
      <MinteebleLogo type={MinteebleLogoType.Minimal} />
    </div>
  );

  return (
    <div className="powered-by-minteeble">
      {link ? (
        <a href={url} target="_blank">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default PoweredByMinteeble;
