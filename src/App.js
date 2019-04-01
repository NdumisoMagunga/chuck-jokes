import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import './app-styles/app.css';

import * as actions from './redux/actions';
import { connect } from 'react-redux';

import AppNavbar from './components/AppNavbar';
import Main from './screens/main';


class App extends Component {
  componentDidMount(){
    this.props.fetchCategories();
    
  }

  render() {
    const { categories, category } = this.props;
    
    return (
      <div>
        <div className="App">
        {categories.length > 0?
        (<div>
          <AppNavbar />
          <Main category={category} />
        </div>)
          :<div className="centered"><Loader type="Puff" color="red" height="200" width="200"/></div>
        }
        </div>
      </div>
    );
  }
}
// mapping states to props
function mapStateToProps({ categories , category }){
  return {
    categories,
    category
  }
}

export default connect(mapStateToProps, actions)(App);
