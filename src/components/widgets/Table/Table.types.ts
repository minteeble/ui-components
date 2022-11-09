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
   * Activate the table pagination
   */
  paginationEnabled?: boolean;

  /**
   * Table header.
   */
  header: Array<HeaderItem>;
}
