/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { ClassExtensible, ParentComponent } from "../../../models";

/**
 * Model representing a single Item inside ItemsList widget
 */
export interface Item {
  displayText: string;
}

/**
 * Props for ItemsList widget
 */
export interface ItemsListProps extends ClassExtensible {
  /**
   * Specifies if the delete operation is enabled
   */
  deleteEnabled?: boolean;

  /**
   * Specifies if the add operation is enabled
   */
  addEnabled?: boolean;

  /**
   * Specifies if the edit operation is enabled
   */
  editEnabled?: boolean;

  /**
   * Callback for handling deletion requests
   */
  onDeleteRequest?: (item: Item, index: number) => void;

  /**
   * Callback for handling edit requests
   */
  onEditRequest?: (item: Item, index: number) => void;

  /**
   * Callback for handling add requests
   */
  onAddRequest?: () => void;

  /**
   * Callback for handling click event on items
   */
  onItemClick?: (item: Item, index: number) => void;

  /**
   * Items to be displayed
   */
  items: Array<Item>;
}
