/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

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
