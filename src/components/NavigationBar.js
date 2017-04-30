import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class NavigationBar extends React.Component {
  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <div className="link dim dark-gray f6 f5-l dib mr3 mr4-l">
        <Link onClick={this.logout.bind(this)}>Logout</Link>
      </div>
    );

    const guestLinks = (
      <div>
        <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/home">Home</Link>
        <Link className="link dim dark-gray f6 f5-l dib mr3 mr4-l" to="/login">Login</Link>
      </div>
    );

    return (
      <nav className="db dt-l w-100 border-box pa3 ph5-l">
        <Link to="/" className="link dim black b f6 f5-ns dib mr3">i2x challenge: Alexander Grischuk</Link>
          <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
      </nav>
    );
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { logout })(NavigationBar);
