export interface PopupLogic {
  isPopupOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
  togglePopup: () => void;
}

export interface UsePopupProps {}

export interface PopupProps {
  popupLogic: PopupLogic;
  children: any;
}
