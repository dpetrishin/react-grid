import * as React from 'react'

import "./grid.css"

import DataGridStore from './../models/DataGridStore'

import HeaderRow from './HeaderRow'
import DataRow from './DataRow';

interface Props {
  store: DataGridStore;
}

class DataGrid extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(){
    return(
      <table className="table table-striped table-bordered">
        <thead className="table-header-blue">
          <HeaderRow row={this.props.store.Headers}/>
        </thead>
        <tbody>
          {
            this.props.store.Rows.map((row) => {
              return (<DataRow row={row} />)
            })
          }
        </tbody>
      </table>
    );
  }
}

export default DataGrid;