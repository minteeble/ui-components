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
 * Clickable component
 */
export interface ClickableComponent {
  /**
   *  OnClick callback
   */
  onClick?: () => void;
}

/**
 * Components in which className can be extended
 */
export interface ClassExtensible {
  /**
   * ClassName string
   */
  className?: string;
}

/**
 * Component that can have children items
 */
export interface ParentComponent {
  children: any;
}
