export interface AvatarHashProps {
  /**
   * Wallet Address for avatar generation
   */
  address: string;

  /**
   * Avatar border radius in px - default 50
   */
  borderRadius?: number;

  /**
   * Avatar width in px - default 100
   */
  width?: number;
}
