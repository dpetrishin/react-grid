import * as React from 'react'
import DataRowModel from './../models/RowModel'
import DataCell from './DataCell';
import { observer } from 'mobx-react';

interface Props {
  row: DataRowModel
}

@observer class DataRow extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return(
      <tr>
        {
          this.props.row.Cells.map((cell) => {
            return <DataCell key={cell.Id.toString()} cell={cell} />
          })
        }
      </tr>
    );
  }
}

export default DataRow;