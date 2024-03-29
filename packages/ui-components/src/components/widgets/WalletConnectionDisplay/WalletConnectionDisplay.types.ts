/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

/**
 * WalletConnectionDisplay props
 */
export interface WalletConnectionDisplayProps {
  /**
   * Address of the connected wallet. Empty string if not connected.
   */
  address: string;

  avatarImage: boolean;

  isLoading: boolean;
  buttonText?: string;

  onSignInClick?: () => void;
  onSignOutClick?: () => void;
}
