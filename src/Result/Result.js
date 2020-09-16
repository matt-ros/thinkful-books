import React from 'react';

class Result extends React.Component {
  render() {
    const price = this.props.item.saleInfo.saleability === "NOT_FOR_SALE"
      ? "Not for sale"
      : `Price: $${this.props.item.saleInfo.listPrice.amount}`

    return (
      <li>
        <h2>{this.props.item.volumeInfo.title}</h2>
        <img src={this.props.item.volumeInfo.imageLinks.thumbnail} alt={`cover of ${this.props.item.volumeInfo.title}`} />
        <h3>Author: {this.props.item.volumeInfo.authors[0]}</h3>
        <h3>{price}</h3>
        <p>{this.props.item.volumeInfo.description}</p>
      </li>
    )
  }
}

export default Result;