export interface ActionPopupButton {
  text: string;
  onClick: () => void;
}

export enum ActionPopupTemplate {
  Save = 1,
  Confirm,
  Delete,
}

export interface ActionPopupProps {
  message: string;
  open: boolean;
  items?: ActionPopupButton[];
  template?: ActionPopupTemplate;
  title?: string;
  onTemplateButtonClick?: () => void;
  onClose: () => void;
}
