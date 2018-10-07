import * as React from 'react'


//import DataCell from './DataCell'
import DataRowModel from './../models/RowModel'
import DataCell from './DataCell';


interface Props {
  row: DataRowModel
}

class DataRow extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return(
      <tr>
        {
          this.props.row.Cells.map((cell) => {
            return <DataCell cell={cell} />
          })
        }
      </tr>
    );
  }
}

export default DataRow;