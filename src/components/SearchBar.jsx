import React, { Component } from 'react';

class SearchBar extends Component {
   
   state = {term: ''};

  //  Callback Hundlers : 

  onFormSubmit = e => {
     e.preventDefault();
    
      //  from SearchBar Component to => App.js :
      this.props.onSubmit(this.state.term);
  };

 
  render() {
    return (
      <div className="ui segment">
        <form 
           className="ui form" 
           onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label htmlFor="">Image Search</label>
              <input  
              type="text" 
              value={this.state.term}
              onChange={ e => this.setState({ term: e.target.value }) }
              />
          </div>
        </form>
      </div>
    );
  }

}

export default SearchBar;