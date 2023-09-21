import {
  TableToolbarItems,
  TableToolbarProps,
} from "./components/TableToolbar";

/**
 * Header Item Model
 */
export interface HeaderItem {
  /**
   * Coloumn name.
   * Should match the items field names.
   */
  fieldName: string;

  /**
   * Specifies if column values are copyable
   */
  copyable?: boolean;

  /**
   * Column max width (optional).
   */
  maxWidth?: string;
}

/**
 * Record Item Model
 */
export interface RecordItem {
  /**
   * Itema data value.
   */
  value: any;

  /**
   * Item field name.
   * Should match the header field names.
   */
  fieldName: string;
}

/**
 * Table Record model
 */
export interface TableRecord {
  /**
   * Record data.
   */
  items: Array<RecordItem>;
  /**
   * Record link
   */
  link?: string;
}

/**
 * Table props
 */
export interface TableProps {
  /**
   * All the records of the table.
   */
  records: Array<TableRecord>;

  /**
   * Allow to click on a row to receive data
   */
  rowsClickable?: boolean;

  /**
   * On row click callback
   */

  onRowClick?: (recordData: TableRecord) => void;

  /**
   * Set the default max rows number for page
   */
  maxRowsForPage?: number;

  /**
   * Activate the table pagination
   */
  paginationEnabled?: boolean;

  /**
   * Enable the table toolbar
   */
  toolbarEnabled?: boolean;

  /**
   * Props of Toolbar
   */
  toolbarProps?: TableToolbarItems[];

  /**
   * Show the loading spinner
   */
  isLoading?: boolean;

  /**
   * Enable the add button on toolbar
   */
  onAdd?: () => void;

  /**
   * Table header.
   */
  header: Array<HeaderItem>;

  /**
   * Specifies custom text for the add button
   */
  addButtonText?: string;
}
