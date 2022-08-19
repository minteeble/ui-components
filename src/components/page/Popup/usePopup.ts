import { useState } from "react";
import { PopupLogic, UsePopupProps } from "./Popup.types";

export const usePopup = (): PopupLogic => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);
  const togglePopup = () => setShowPopup((s) => !s);

  return { isPopupOpen: showPopup, openPopup, closePopup, togglePopup };
};
