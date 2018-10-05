import * as React from 'react'
import './grid.css'

import RowTypeEnum from './RowTypeEnum'
import RowView from './Row'

export interface Props {
    headers: string[];
    rows: string[][];
}

class Grid extends React.Component<Props, object> {
  constructor(props: Props) {
      super(props);
  }

  render() {
    let headers = this.props.headers;
    var rows = this.props.rows.map(function (cells) {
      return (
          <RowView rowType={RowTypeEnum.Row} cells={cells} />
       );
    });
    return (
      <div>
        <table className="table table-striped table-bordered">
            <thead className="table-header-blue">
                <RowView cells={headers} rowType={RowTypeEnum.Header} />
            </thead>
            <tbody>
                { rows }
            </tbody>
          </table>
      </div>
    )
  }
}

export default Grid;
