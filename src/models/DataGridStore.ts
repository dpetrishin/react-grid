import { observable } from 'mobx'
import RowModel from './RowModel'

class DataGridStore {
  private headerRow: string[];
  private columnTypes: string[];
  @observable private dataRows: RowModel[];

  constructor(headerRow: string[], columnTypes: string[], dataRows?: string[][]) {
    console.log('data grid constructor is entered.');
    this.headerRow = headerRow;
    this.AddColumnTypes(columnTypes);
    if (dataRows) {
      this.AddRows(dataRows);
    }
  }

  public get Headers(): string[] {
    return this.headerRow;
  }

  public get ColumnTypes(): string[] {
    return this.columnTypes;
  }

  public get Rows(): RowModel[] {
    return this.dataRows;
  }

  public AddRow(newRow: string[]): void {
    let rowModel = new RowModel(this.ColumnTypes, newRow);
    this.dataRows.push(rowModel);
  }

  public AddRows(newRows: string[][]): void {
    newRows.forEach((newRow) => {
      this.CheckRowLength(newRow);
      this.AddRow(newRow);
    });
  }

  private AddColumnTypes(columnTypes: string[]): void {
    this.CheckRowLength(columnTypes);

    this.columnTypes = columnTypes;
  }

  private CheckRowLength(row: string[]): void {
    if (row.length != this.headerRow.length) {
      throw new Error("Number of column types is inconsistent to number of headers. Please provide array to the same amount of header.");
    }
  }
}

export default DataGridStore;


