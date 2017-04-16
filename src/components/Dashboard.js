import React, { Component } from 'react';
import axios from 'axios';

class Dashboard extends Component {
  state = { results: [] };

  componentWillMount() {
    axios.get('https://i2x-challenge.herokuapp.com/ai/recording/list/')
      .then(response => this.setState({ results: response.data.results })
    );
  }

  render() {
    return (
      <div>
        <h1 className="tc f6 fw6 ttu tracked">Dashboard</h1>
      </div>
    );
  }
}

export default Dashboard;
