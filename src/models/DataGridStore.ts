import { observable } from 'mobx'
import RowModel from './RowModel'

class DataGridStore {
  private headerRow: string[];
  private columnTypes: any[];
  @observable private dataRows: RowModel[];

  constructor(headerRow: string[], columnTypes: any[], dataRows?: any[][]) {
    this.headerRow = headerRow;
    this.AddColumnTypes(columnTypes);
    this.dataRows = [];
    if (dataRows) {
      console.log(dataRows);
      this.AddRows(dataRows);
    }
  }

  public get ColumnTypes(): string[] {
    return this.columnTypes;
  }

  public get Headers(): string[] {
    return this.headerRow;
  }

  public get Rows(): RowModel[] {
    return this.dataRows;
  }

  public AddRow(newRow: any[]): void {
    let rowModel = new RowModel(this.ColumnTypes, newRow);
    this.dataRows.push(rowModel);
  }

  public AddRows(newRows: any[][]): void {
    newRows.forEach((newRow) => {
      this.CheckRowLength(newRow);
      this.AddRow(newRow);
    });
  }

  private AddColumnTypes(columnTypes: any[]): void {
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