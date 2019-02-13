import React from "react";
import PropTypes from "prop-types";

const labelContent = (label, requiredField, name) => {
  if (requiredField) {
    return (
      <label className="col-form-label col-sm-1" htmlFor={name}>
        {label}
        <p className="required-asterisk">*</p>
      </label>
    );
  } else {
    return (
      <label className="col-form-label col-sm-1" htmlFor={name}>
        {label}
      </label>
    );
  }
};

const FieldInput = ({
  input,
  type,
  name,
  label,
  placeholder,
  requiredField,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="form-group row validate-input">
      {labelContent(label, requiredField, name)}

      <div className="col-sm-11">
        <input
          {...input}
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
        />

        {touched &&
          ((error && <div className="text-danger">{error}</div>) ||
            (warning && <div className="text-danger">{warning}</div>))}
      </div>
    </div>
  );
};

FieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  meta: PropTypes.object.isRequired
};

export default FieldInput;
