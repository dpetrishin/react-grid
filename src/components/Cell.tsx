import * as React from 'react'
import { observer } from 'mobx-react'
import RowTypeEnum from './RowTypeEnum'

import CellEdit from './CellEdit'

export interface Props {
  cellType: RowTypeEnum;
  value: string
}

export interface State {
  isEditing: boolean
}

@observer class Cell extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isEditing: false };
    console.log(this.state);
  }

  render() {
    return this.state.isEditing 
      ? this.renderCellEdit() 
      : this.renderCellView();
  }

  private renderCellEdit(): JSX.Element {
    return (<CellEdit value={this.props.value} />);
  }

  private renderCellView(): JSX.Element {
    let cellType = this.props.cellType;
    const value = this.props.value;
    switch(cellType) {
      case RowTypeEnum.Header: return this.returnTableHeader(value);
      case RowTypeEnum.Row: return this.returnTableData(value);
      default: throw new Error("There's not such cell type. Please provide right cell type.");
    }
  }

  private returnTableHeader(value: any): JSX.Element {
    return (<th>{value}</th>);
  }

  private returnTableData(value: any): JSX.Element {
    return (<td onDoubleClick={this.onDoubleClick}>{value}</td>);
  }

  onDoubleClick = () => {
    let isEditing = true;
    this.setState({ isEditing });
  };
}

export default Cell;