import { ClassExtensible, StylableComponent } from "../../../models";

/**
 * Type of the Info card. Based on it, the style of the card will be adapted (colors, icons, etc.)
 */
export enum InfoCardType {
  Info,
  Success,
  Warning,
  Error,
  Loading,
}

/**
 * Info Card interface props model
 */
export interface InfoCardProps extends ClassExtensible, StylableComponent {
  /**
   * Message type. `InfoCardType.Info` by default.
   */
  type?: InfoCardType;

  /**
   * Card message. It can be either a raw type (like a string or number), or a custom JSX component
   */
  message?: JSX.Element | string | number;
}
