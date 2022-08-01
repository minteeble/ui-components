import { ClassExtensible } from "../../../models";

export enum LoadingSpinnerSize {
  Small = "1.2rem",
  Medium = "2rem",
  Large = "3rem",
}

export interface LoadingSpinnerProps extends ClassExtensible {
  Size?: LoadingSpinnerSize;
}
