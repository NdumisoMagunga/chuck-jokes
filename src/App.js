import React, { Component } from 'react';
import './app-styles/app.css';

import * as actions from './redux/actions';
import { connect } from 'react-redux';

import AppNavbar from './components/AppNavbar';
import Main from './screens/main'

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchCategory();
  }

  render() {
    const { categories, category } = this.props;
    console.log(this.props)
    return (
      <div>
        <div className="App">
        {categories.length > 0?
        (<div>
          <AppNavbar />
          <Main category={category} />
        </div>)
          :<div className="centered"></div>
        }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ categories , category }){
  return {
    categories,
    category
  }
}

export default connect(mapStateToProps, actions)(App);
