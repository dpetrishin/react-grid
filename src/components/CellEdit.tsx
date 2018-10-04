import * as React from 'react'

export interface Props {
  value: string;
}

export interface State {
  isEditing: boolean
}

class CellEdit extends React.Component<Props, State> { 
  constructor(props: Props) { 
    super(props);
  }

  render() {
    return (
      <td>
        <div className="input-group">
          <input type="text" className="form-control" placeholder="0.00" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4"/>
          <div className="input-group-append" id="button-addon4">
            <button className="btn btn-outline-secondary" type="button">S</button>
            <button className="btn btn-outline-secondary" type="button">C</button>
          </div>
        </div>
      </td>
        
      
      
    );
  }
}

export default CellEdit;