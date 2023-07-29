export enum TableToolbarItemsPosition {
  Left,
  Center,
  Right,
}

export interface TableToolbarItems {
  content: any;
  position: TableToolbarItemsPosition;
}

export interface TableToolbarProps {
  items: TableToolbarItems[];
}
