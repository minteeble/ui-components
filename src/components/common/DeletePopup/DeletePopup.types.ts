export interface DeletePopupProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  text: string;
  title: string;
  onConfirm: () => void;
}
