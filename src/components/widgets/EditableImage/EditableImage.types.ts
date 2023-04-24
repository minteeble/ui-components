export enum EditableImagesSize {
  Small = 1,
  Medium,
  Large,
}

export interface EditableImageProps {
  image: string;
  size?: EditableImagesSize;
}
