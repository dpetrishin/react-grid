import CellModel  from './CellModel'
import Cell from '../components/DataCell';

class RowModel {
  private dataCells: CellModel[];
  private cellTypes: string[];

  constructor(cellTypes:string[], cells: string[]) {
    this.cellTypes = cellTypes;
    this.AddCells(cells);
  }

  public Cells(): CellModel[] {
    return this.dataCells;
  }

  private AddCells(cells: string[]) {
    cells.forEach((cell, index) => {
      let expectedCellType: string = this.cellTypes[index];
      if (this.IsCellHasRightType(cell, expectedCellType)) {
        let dataCell: CellModel = new CellModel(cell, expectedCellType);

        this.dataCells.push(dataCell);
      }
    });
  }

  private IsCellHasRightType(value: string, type: string): boolean {
    if (typeof value === type) {
      return true;
    }
    else {
      throw new Error("Value is not consistent to provided cell type.");
    }
  }
}

export default RowModel;