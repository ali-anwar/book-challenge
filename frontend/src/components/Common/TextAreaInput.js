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

const TextAreaInput = ({
  input,
  name,
  label,
  requiredField,
  meta: { touched, error, warning }
}) => {
  return (
    <div className="form-group row validate-input">
      {labelContent(label, requiredField, name)}

      <div className="col-sm-11">
        <textarea {...input} name={name} className="form-control" />

        {touched &&
          ((error && <div className="text-danger">{error}</div>) ||
            (warning && <div className="text-danger">{warning}</div>))}
      </div>
    </div>
  );
};

TextAreaInput.propTypes = {
  input: PropTypes.object.isRequired,
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired
};

export default TextAreaInput;
