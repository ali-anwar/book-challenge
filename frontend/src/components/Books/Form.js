import React from "react";
import PropTypes from "prop-types";
import { Field, reduxForm } from "redux-form";
import FieldInput from "../Common/FieldInput";
import TextAreaInput from "../Common/TextAreaInput";
import * as Validations from "../../config/fieldLength";
import { EDIT_BOOK } from '../../config/formHeadings';
import { CREATE_BOOK, UPDATE_BOOK } from '../../config/formButtons';

const submitButtonText = heading => {
  if (heading === EDIT_BOOK) {
    return UPDATE_BOOK;
  } else {
    return CREATE_BOOK;
  }
}

export const BookForm = ({
  handleSubmit,
  pristine,
  reset,
  submitting,
  heading,
  handleSave,
  handleCancel
}) => {
  return (
    <div className="row h-100">
      <div className="col-sm-12 align-self-center">
        <div className="card">
          <div className="card-container">
            <form onSubmit={handleSubmit(handleSave)}>
              <h1>{heading}</h1>

              <Field
                type="text"
                name="title"
                label="Title"
                requiredField={true}
                component={FieldInput}
              />

              <Field
                type="text"
                name="isbn"
                label="ISBN"
                requiredField={true}
                component={FieldInput}
              />

              <Field
                name="notes"
                label="Notes"
                requiredField={false}
                component={TextAreaInput}
              />

              <div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                >
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />{" "}
                  {submitButtonText(heading)}
                </button>

                <button
                  type="button"
                  className="btn btn-light pull-right"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = "Title can not be blank";
  } else if (
    values.title &&
    values.title.length > Validations.TITLE_MAX_LENGTH
  ) {
    errors.title = `Title is too long, it should not be longer than ${Validations.TITLE_MAX_LENGTH} characters`;
  } else if (
    values.title &&
    values.title.length < Validations.TITLE_MIN_LENGTH
  ) {
    errors.title = `Title is too short, it should be at least ${Validations.TITLE_MIN_LENGTH} characters`;
  }

  if (!values.isbn) {
    errors.isbn = "ISBN can not be blank";
  } else if (values.isbn && values.isbn.length > Validations.ISBN_MAX_LENGTH) {
    errors.isbn = `ISBN is too long, it should not be longer than ${Validations.ISBN_MAX_LENGTH} characters`;
  } else if (values.isbn && values.isbn.length < Validations.ISBN_MIN_LENGTH) {
    errors.isbn = `ISBN is too short, it should be at least ${Validations.ISBN_MIN_LENGTH} characters`;
  }

  if (values.notes && values.notes.length > Validations.NOTES_MAX_LENGTH) {
    errors.notes = `Notes are too long, it should not be longer than ${Validations.NOTES_MAX_LENGTH} characters`;
  } else if (
    values.notes &&
    values.notes.length < Validations.NOTES_MIN_LENGTH
  ) {
    errors.notes = `Notes are too short, it should be at least ${Validations.NOTES_MIN_LENGTH} characters`;
  }

  return errors;
};

BookForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired
};

export default reduxForm({
  form: "BookForm",
  enableReinitialize: true,
  validate
})(BookForm);
