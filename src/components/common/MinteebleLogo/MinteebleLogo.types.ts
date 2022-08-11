import { ClassExtensible } from "../../../models";

export enum MinteebleLogoTheme {
  Light,
  Dark,
}

export enum MinteebleLogoType {
  Standard,
  FullText,
  Minimal,
  Small,
}

export enum MinteebleLogoSize {
  Small,
  Medium,
  Large,
}

export interface MinteebleLogoProps extends ClassExtensible {
  theme?: MinteebleLogoTheme;
  type?: MinteebleLogoType;
  size?: MinteebleLogoSize;
}
