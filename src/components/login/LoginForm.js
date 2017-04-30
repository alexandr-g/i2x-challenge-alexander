import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextFieldGroup from './TextFieldGroup';
import { login } from '../../actions/authActions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
      },
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  validate({email, password}) {
    const errors = {};

    if (!email) errors.email = 'Email is required.';
    if (!password) errors.password = 'Password is required.';

    this.setState({errors});

    const formIsValid = Object.getOwnPropertyNames(errors).length === 0;
    return formIsValid;
  }

  onSubmit(e) {
    e.preventDefault();
    const { user } = this.state;
    const formIsValid = this.validate(user);
    if (formIsValid) {
      this.props.login(user).then(
        () => this.context.router.push('/dashboard'),
        (err) => this.setState({errors: err.data.errors, isLoading: false})
      );
    }
  }

  onChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value;
    this.setState({user});
  };

  render() {
    const { errors, isLoading } = this.state;
    const { email, password } = this.state.user;

    return (
      <main className="pa4 black-80">
        <form className="measure center" onSubmit={this.onSubmit}>
          <fieldset id="login" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Login</legend>

            { errors.form && <div className="alert alert-danger">{errors.form}</div> }

            <div className="mv3">
              <TextFieldGroup
                field="email"
                label="E-mail"
                value={email}
                error={errors.email}
                onChange={this.onChange}
              />
            </div>

            <div className="mv3">
              <TextFieldGroup
                field="password"
                label="Password"
                value={password}
                error={errors.password}
                onChange={this.onChange}
                type="password"
              />
            </div>

            <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
          </fieldset>

            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              disabled={isLoading}
              type="submit"
              value="Login"
           />
        </form>
      </main>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
};

export default connect(null, { login })(LoginForm);
