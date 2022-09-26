import React from "react";
import {
  MinteebleLogo,
  MinteebleLogoSize,
  MinteebleLogoTheme,
  MinteebleLogoType,
} from "../../common";
import { FooterProps } from "./Footer.types";

const Footer = (props: FooterProps) => {
  return (
    <>
      <div className="footer">
        <MinteebleLogo
          className="footer-item footer-logo"
          theme={MinteebleLogoTheme.Light}
          type={MinteebleLogoType.FullText}
          size={MinteebleLogoSize.Small}
        />
        <h3 className={`footer-item footer-copyright`}>
          ©2022 Minteeble.com All rights reserved
        </h3>
        <div className="footer-item footer-wrapper">
          <a href="#" className={`footer-wrapper-privacy`}>
            Privacy policy
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
