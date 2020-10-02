import React , {Component} from 'react';
import unsplash from '../api/unsplash';
//  components : 
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends Component  {
  
  state = { images : [] };

   onSearchSubmit = async term => {

    // Api Request using Axios :
    const respense = await unsplash.get('/search/photos' , {
      params: { query: term } 
    }); 
    
    this.setState({ images: respense.data.results });

  }
     
   render() {
      return (
          <div 
            className="ui container" 
            style={ {
                marginTop:'10px' 
            } }>
              <SearchBar onSubmit={this.onSearchSubmit} />
              <ImageList images={this.state.images} />
          </div>
      );
   }

};


export default App ;