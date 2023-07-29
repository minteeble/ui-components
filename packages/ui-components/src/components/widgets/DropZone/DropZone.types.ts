export interface DropZoneProps {
  title?: string;
  text?: string;
  allowedFiles?: string[];
  onDrop?: (file: any) => void;
}
