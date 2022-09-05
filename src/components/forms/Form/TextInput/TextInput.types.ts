import { StylableComponent } from "../../../../models";

export enum TextInputType {
  Text,
  Password,
}

export interface TextInputProps extends StylableComponent {
  type?: TextInputType;
  validator?: (text: string) => boolean;
  value: string;
  placeHolder?: string;
  errorMessage?: string;
  label?: string;
  onValueChange: (newValue: string) => void;
}
