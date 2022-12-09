import { DisableableComponent, StylableComponent } from "../../../../models";

export interface SelectProps extends StylableComponent, DisableableComponent {
  options: Array<string>;
  value: number;
  placeHolder?: string;
  errorMessage?: string;
  label?: string;
  onValueChange: (newValue: string) => void;
  readonlyField?: boolean;
}
