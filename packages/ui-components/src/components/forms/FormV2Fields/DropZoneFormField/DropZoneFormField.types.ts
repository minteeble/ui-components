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

export enum DropZoneSizeUnit {
  B = 1,
  KB = 1024,
  MB = 1048576,
  GB = 1073741824,
}

export interface DropZoneSize {
  value: number;
  unit: DropZoneSizeUnit;
}

export enum DropZoneAlignment {
  Left = 1,
  Center,
  Stretch,
}

export interface DropZoneFormFieldProps extends FieldComponentProps {
  attributes: {
    layout?: DropZoneLayout;
    mode?: DropZoneMode;
    title?: string;
    text?: string;
    allowedExtensions?: string[];
    uploadStrategy?: DropZoneUploadStrategy;
    maxSize?: DropZoneSize;
    alignment?: DropZoneAlignment;
    onDrop?: (file: any) => void;
  };
}
