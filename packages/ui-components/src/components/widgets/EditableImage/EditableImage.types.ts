export enum EditableImagesSize {
  Small = 1,
  Medium,
  Large,
}

export interface EditableImageProps {
  image: string | null;
  size?: EditableImagesSize;
  iconString?: string;
  onSubmit?: (image: string) => void;
  onError?: () => void;
}
