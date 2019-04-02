import React from 'react';
import Category from '../components/Category';
import DetailsView from '../components/jokes';

 class Main extends React.Component {
  render() {
    return (
      <div className="container" >
          <DetailsView details={this.props.category}/>
          <Category/>
      </div>
    );
  }
}

export default Main;