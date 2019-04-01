import React from 'react';
import {Col } from 'reactstrap';
import Category from '../components/Category';
import DetailsView from '../components/jokes';

 class Main extends React.Component {
  render() {
    return (
      <div className="container" >
          <Col sm="12"><DetailsView details={this.props.category}/></Col>
          <Col sm="12"><Category/></Col>
      </div>
    );
  }
}

export default Main;