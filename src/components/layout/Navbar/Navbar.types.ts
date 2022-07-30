/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

export enum NavbarItemPosition {
  Left,
  Center,
  Right,
}

export interface NavbarPropsItem {
  content: any;
  position: NavbarItemPosition;
}

export interface NavbarProps {
  items: Array<NavbarPropsItem>;
  children?: any;
}
