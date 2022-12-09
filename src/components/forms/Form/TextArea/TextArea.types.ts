import { DisableableComponent, StylableComponent } from "../../../../models";
export interface TextAreaProps {
  value: string;
  placeHolder?: string;
  errorMessage?: string;
  label?: string;
  cols?: number;
  rows?: number;
  resizable: boolean;
  readonlyField?: boolean;

  onValueChange: (newValue: string) => void;
}
