import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="db fw6 lh-copy f6">{label}</label>
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        value={value}
        type={type}
        name={field}
        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
      />
      {error && <span className="help-block">{error}</span>}
    </div>  );
};

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checkUserExists: PropTypes.func
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;
