import { observable } from 'mobx'

class CellModel {
  @observable private value: any;
  private type: string;

  constructor(type: string, value: any) {
    this.type = type;
    this.value = value;
  }

  public get Value(): any {
    return this.value;
  }

  public setValue(newValue: any) {
    if (typeof newValue === this.type) {
      this.value = newValue;
    }
    else {
      throw new Error("Provided Cell value is not consistent to cell type.");
    }
  }
}

export default CellModel;