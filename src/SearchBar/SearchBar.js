import React from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import SearchBox from '../SearchBox/SearchBox';

class SearchBar extends React.Component {
  state = {
    q: "",
    "print-type": "all",
    filter: ""
  }

  changePrintType(type) {
    this.setState({ "print-type": type });
  }

  changeBookType(type) {
    this.setState({ filter: type });
  }

  changeQuery(query) {
    this.setState({ q: query });
  }

  handleSubmit(e) {
    e.preventDefault();
    let params = {};
    for (const entry in this.state) {
      if (this.state[entry]) {
        params[entry] = this.state[entry];
      }
    }
    this.props.submitQuery(params);
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <SearchBox
          changeQuery={query => this.changeQuery(query)}
        />
        <FilterOptions
          changeBookType={type => this.changeBookType(type)}
          changePrintType={type => this.changePrintType(type)}
        />
      </form>
    )
  }
}

export default SearchBar;