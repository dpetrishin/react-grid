import * as React from 'react'
import HeaderCell from './HeaderCell';

interface Props {
  row: string[]
}

class HeaderRow extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render(){
    return (
      <tr>
        {
          this.props.row.map((value) => {
            return (<HeaderCell value={value} />)
          })
        }
      </tr>
    );
  }
}

export default HeaderRow;