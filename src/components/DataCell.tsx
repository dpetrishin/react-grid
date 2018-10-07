import * as React from 'react'
import { observer } from 'mobx-react'
import RowTypeEnum from './RowTypeEnum'

export interface Props {
  cellType: RowTypeEnum;
  value: string
}

@observer class DataCell extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
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
    return (<td>{value}</td>);
  }
}

export default DataCell;