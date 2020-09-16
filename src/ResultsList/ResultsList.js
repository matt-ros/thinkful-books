import React from 'react';
import Result from '../Result/Result';

class ResultsList extends React.Component {
  static defaultProps = {
    items: []
  }

  render() {
    const results = this.props.items.map((item, index) => (
      <Result key={index} item={item} />
    ));

    return (
      <ul>
        {results}
      </ul>
    )
  }
}

export default ResultsList;