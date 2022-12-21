export interface ActionPopupButton {
  text: string;
  onClick: () => void;
}

export enum ActionPopupTemplate {
  Save = 1,
  Confirm,
}

export interface ActionPopupProps {
  message: string;
  open: boolean;
  items?: ActionPopupButton[];
  template?: ActionPopupTemplate;
  onTemplateButtonClick?: () => void;
  onClose: () => void;
}
