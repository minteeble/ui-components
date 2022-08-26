/**
 * Copyright Minteeble 2022. All Rights Reserved.
 * Node module: @minteeble/ui-components
 * This file is licensed under the MIT License.
 * License text available at https://opensource.org/licenses/MIT
 *
 * email:     minteeble@gmail.com
 * website:   https://minteeble.com
 */

import { ParentComponent } from "../../../models";

export interface SidebarItem {
  text: string;
  icon?: string;
  onClick?: any;
  url: string;
}

export interface SidebarSection {
  title?: string;
  icon?: string;
  items: Array<SidebarItem>;
}

export interface SidebarProps extends ParentComponent {
  frontItem: any;
  sections: Array<SidebarSection>;
  open: boolean;
  onSidebarClose?: () => void;
}
