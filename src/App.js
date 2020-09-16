import React from 'react';
import Header from './Header/Header';
import ResultsList from './ResultsList/ResultsList';
import SearchBar from './SearchBar/SearchBar';

class App extends React.Component {
  state = {
    results: {}
  }

  formatQueryParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
    return queryItems.join('&');
}

  submitQuery(params) {
    params = { ...params, key: 'AIzaSyAflVMPCo5h3L7-vHVq2RYceXU3GvFO6Ig' };
    const queryString = this.formatQueryParams(params);
    const url = 'https://www.googleapis.com/books/v1/volumes?' + queryString;

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(resJson => {
        this.setState({
          results: resJson,
          error: null
        });
      })
      .catch(err => {
        this.setState({ error: err.message });
      })
  }

  render() {
    const error = this.state.error
    ? <h3>Something went wrong, please try again.</h3>
    : <ResultsList items={this.state.results.items} />
    
    return (
      <main className='App'>
        <Header />
        <SearchBar submitQuery={params => this.submitQuery(params)} />
        {error}
      </main>
    );
  }
}

export default App;