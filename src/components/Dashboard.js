import React, { Component } from 'react';
import axios from 'axios';
import RecordDetail from './RecordDetail';

class Dashboard extends Component {
  state = { recordings: [] };

  componentWillMount() {
    axios.get('https://i2x-challenge.herokuapp.com/ai/recording/list/')
      .then(response => this.setState({ recordings: response.data.results })
    );
  }

  renderRecords() {
    return this.state.recordings.map(record =>
      <RecordDetail key={record.duration} record={record} />
    );
  }

  render() {
    return (
      <div>
        <h1 className="tc f6 fw6 ttu tracked">Dashboard</h1>
        <div>
          {this.renderRecords()}
        </div>
      </div>
    );
  }
}

export default Dashboard;
