import { FieldComponentProps } from "../../FormV2/FormV2.types";

export enum DropZoneLayout {
  Horizontal = 1,
  Vertical,
}
export enum DropZoneMode {
  Image = 1,
  File,
}

export enum DropZoneUploadStrategy {
  Monofile = 1,
  Multifile,
}

export interface DropZoneFormFieldProps extends FieldComponentProps {
  attributes: {
    layout?: DropZoneLayout;
    mode?: DropZoneMode;
    title?: string;
    text?: string;
    allowedExtensions?: string[];
    uploadStrategy?: DropZoneUploadStrategy;
    onDrop?: (file: any) => void;
  };
}
