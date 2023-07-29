import {
  DisableableComponent,
  LoadableComponentProps,
  StylableComponent,
} from "../../../../models";
import { FormFieldAlignment } from "../Form.types";

export interface DropZonePreviewProps
  extends StylableComponent,
    DisableableComponent,
    LoadableComponentProps {
  value?: string;
  label?: string;
  alignment?: FormFieldAlignment;
  onValueChange?: (newValue: string) => void;
}
