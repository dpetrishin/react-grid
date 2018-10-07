import * as React from 'react'

import "./grid.css"
import DataGridStore from './../models/DataGridStore'

interface Props {
  props: DataGridStore;
}

class DataGrid extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(){
    return(<div></div>);
  }
}

export default DataGrid;