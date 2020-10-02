import React, { Component } from 'react';

class ImageCard extends Component {

  constructor(props){
    super(props);
   
    this.state = { spans :0 };
    this.imageRef = React.createRef();

  }
  
  componentDidMount() {
    // waiting (Listing) for the img to load (download) on the DOM
    this.imageRef.current.addEventListener('load' , this.setSpans);
  }

  setSpans = () => {

    const height = this.imageRef.current.clientHeight ;
    const spans = Math.ceil(height / 10 +1 );

    this.setState({ spans });
  }

  render() {
   
    const { urls , desctiption } = this.props.image;

    return (
      <div style={{
        gridRowEnd : `span ${this.state.spans}`
      }}>
         <img 
         src={urls.regular} 
         alt={desctiption} 
         ref={this.imageRef}  
         />
      </div>
    );
  }
}

export default ImageCard; 