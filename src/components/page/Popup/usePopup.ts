/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { useState } from "react";
import { PopupLogic, UsePopupProps } from "./Popup.types";

export const usePopup = (): PopupLogic => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
  const togglePopup = () => setShowPopup((s) => !s);

  return { isPopupOpen: showPopup, openPopup, closePopup, togglePopup };
};
