import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <NavigationBar />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
