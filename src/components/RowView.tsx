import * as React from 'react'
import RowTypeEnum from './RowTypeEnum'
import Cell from './Cell'

export interface Props {
  rowType: RowTypeEnum;
  cells: string[];
}

class Row extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const cells = this.props.cells;
    const rowType = this.props.rowType;
    return (
      <tr>
        {
          cells.map(cell => {
            return (<Cell cellType={rowType} value={cell} />)
          })
        }
      </tr>
    );
  }
}

export default Row;