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

export enum LoadingSpinnerSize {
  Small = "1.2rem",
  Medium = "2rem",
  Large = "3rem",
}

export enum LoadingSpinnerColor {
  Primary = 1,
  White,
}

export interface LoadingSpinnerProps extends ClassExtensible {
  Size?: LoadingSpinnerSize;
  color?: LoadingSpinnerColor;
}
