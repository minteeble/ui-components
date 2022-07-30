

export interface SidebarItem {
  text: string;
  icon?: string;
  onClick?: any;
}

export interface SidebarSection {
  title?: string;
  icon?: string;
  items: Array<SidebarItem>;
}

export interface SidebarProps {
  frontItem: any;
  sections: Array<SidebarSection>;
  open: boolean;
}