import React from "react";
import {
  MinteebleLogo,
  MinteebleLogoSize,
  MinteebleLogoTheme,
  MinteebleLogoType,
} from "../../common";
import { FooterProps } from "./Footer.types";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <MinteebleLogo
          className="footer-item footer-logo"
          theme={MinteebleLogoTheme.Light}
          type={MinteebleLogoType.FullText}
          size={MinteebleLogoSize.Medium}
        />
        <h3 className={`footer-item footer-copyright`}>
          ©2022 Minteeble.com All rights reserved
        </h3>
        <div className="footer-item footer-wrapper">
          <a href="#" className={`footer-wrapper-privacy`}>
            Privacy policy
          </a>
          {/* <span className="footer-wrapper-line"></span> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
