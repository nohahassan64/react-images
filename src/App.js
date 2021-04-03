import React, { Component } from 'react'
import unsplash from './api/unsplash';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar'

class App extends Component {
  state = { images: [] };
  OnSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos' , {
        params: { query: term}
    });
    this.setState({ images : response.data.results});
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop : '20px'}} >
        <SearchBar OnSubmit={this.OnSearchSubmit}/>
        <ImageList images={this.state.images} />
      </div>
    )
  }
}
export default App
