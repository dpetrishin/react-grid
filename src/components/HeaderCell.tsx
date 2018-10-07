import * as React from 'react'

interface Props {
  value: string
}

class HeaderCell extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render () {
    return (<th>{this.props.value}</th>)
  }
}

export default HeaderCell;