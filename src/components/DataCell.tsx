import * as React from 'react'
import { observer } from 'mobx-react'
import CellModel from '../models/CellModel';

export interface Props {
  cell: CellModel
}

@observer class DataCell extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (<td>{this.props.cell.Value}</td>);
  }
}

export default DataCell;