import React from 'react';

class FilterOptions extends React.Component {
  
  render() {
    return (
      <>
        <label htmlFor="print-type">Print Type: </label>
        <select
          id="print-type"
          name="print-type"
          onChange={e => this.props.changePrintType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>

        <label htmlFor="book-type">Book Type: </label>
        <select
          id="book-type"
          name="book-type"
          onChange={e => this.props.changeBookType(e.target.value)}
        >
          <option value="">All</option>
          <option value="partial">Partially Previewable</option>
          <option value="full">All Text Viewable</option>
          <option value="free-ebooks">Free eBooks</option>
          <option value="paid-ebooks">Paid eBooks</option>
        </select>
      </>
    )
  }
}

export default FilterOptions;