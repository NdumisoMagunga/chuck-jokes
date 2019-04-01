import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class DetailsView extends Component{
  render() {
    const { details } = this.props;
     return (
    <div style={{paddingTop: '20px'}}>
    <div>
      <Jumbotron>
        <h1 className="display-3"> About Chuck Norris !</h1>
        <hr className="my-2" />
        <p className="text">{details.value}</p>
      </Jumbotron>
    </div>
      
    </div>
  );
  } 
 
};

export default (DetailsView);