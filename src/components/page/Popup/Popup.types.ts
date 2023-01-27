/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { ClassExtensible, StylableComponent } from "../../../models";

/**
 * PopupLogic interface
 */
export interface PopupLogic {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  togglePopup: () => void;
}

export interface UsePopupProps {}

/**
 * Props model for Popup component
 */
export interface PopupProps extends StylableComponent, ClassExtensible {
  popupLogic: PopupLogic;
  children: any;

  closeButtonEnabled?: boolean;
  closeCrossEnabled?: boolean;
  closeButtonText?: string;
}
