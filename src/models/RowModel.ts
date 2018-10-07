import CellModel  from './CellModel'

class RowModel {
  private dataCells: CellModel[];
  private cellTypes: any[];

  constructor(cellTypes:any[], cells: any[]) {
    this.cellTypes = cellTypes;
    this.dataCells = [];
    this.AddCells(cells);
  }

  public get Cells(): CellModel[] {
    return this.dataCells;
  }

  private AddCells(cells: string[]) {
    cells.forEach((cell, index) => {
      let expectedCellType: string = this.cellTypes[index];

      let dataCell: CellModel = new CellModel(expectedCellType, cell);
      
      this.dataCells.push(dataCell);
    });
  }
}

export default RowModel;