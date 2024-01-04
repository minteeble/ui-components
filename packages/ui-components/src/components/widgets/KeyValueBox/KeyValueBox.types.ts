export interface KeyValueRow {
  key: string;
  value: string;
  copyable?: boolean;
}

export enum KeyValueBoxType {
  Horizontal = 1,
  Vertical,
}

export interface KeyValueBoxProps {
  items: KeyValueRow[];
  type?: KeyValueBoxType;
}
