import { ClassExtensible, StylableComponent } from "../../../models";

/**
 * Type of the Info card. Based on it, the style of the card will be adapted (colors, icons, etc.)
 */
export enum InfoCardType {
  Info = "info",
  Success = "success",
  Warning = "warning",
  Error = "error",
  Loading = "loading",
}

/**
 * Size of the info card
 */
export enum InfoCardSize {
  /**
   * Info card will be rendererd by removign all the unnecessary paddings and spaces
   */
  Small = "small",

  /**
   * Info card will be rendered inside a `PageCard` without much padding and spaces, in order to fit into smaller layouts
   */
  Normal = "normal",

  /**
   * Info card will be rendered inside a normal `PageCard` component.
   */
  Large = "large",
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
   * Card layout size
   */
  size?: InfoCardSize;

  /**
   * Card message. It can be either a raw type (like a string or number), or a custom JSX component
   */
  message?: JSX.Element | string | number;

  /**
   * Specifies if card is active or not
   */
  active?: boolean;

  /**
   * Enables the close button in the top-right corner of the card
   */
  closable?: boolean;
}
