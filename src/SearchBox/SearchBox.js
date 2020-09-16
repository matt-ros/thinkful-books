import React from 'react';

class SearchBox extends React.Component {
  render() {
    return (
      <>
        <label htmlFor="search-box">Search: </label>
        <input
          type="text"
          id="search-box"
          onChange={e => this.props.changeQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </>
    )
  }
}

export default SearchBox;