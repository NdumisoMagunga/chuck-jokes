import React from 'react';
import {Col } from 'reactstrap';
import Category from '../components/Category';
import Joke from '../components/jokes';

 class Homepage extends React.Component {
  render() {
    return (
      <div className="container" >
          <Col sm="12"><Joke joke={this.props.category}/></Col>
          <Col sm="12"><Category/></Col>
      </div>
    );
  }
}

export default Homepage;