import CellModel  from './CellModel'
import { observable } from 'mobx';
import { Guid } from "guid-typescript";

class RowModel {
  @observable private dataCells: CellModel[];
  private cellTypes: any[];
  private id: Guid;

  constructor(cellTypes:any[], cells: any[]) {
    this.cellTypes = cellTypes;
    this.dataCells = [];
    this.AddCells(cells);

    this.id = Guid.create();
  }

  public get Cells(): CellModel[] {
    return this.dataCells;
  }

  public get Id(): Guid {
    return this.id;
  }

  public GetCell(id: Guid): CellModel | undefined {
    return this.Cells.find(value => value.Id == id);
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