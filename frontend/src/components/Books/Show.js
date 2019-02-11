import React from "react";
import PropTypes from "prop-types";

const actionButtons = props => {
  return (
    <div className="float-left">
      <button
        className="btn btn-warning mr-2"
        onClick={() => props.handleEditButton()}
      >
        <i className="fa fa-pencil" aria-hidden="true" /> Edit
      </button>
      <button
        className="btn btn-danger mr-2"
        onClick={() => props.handleDeleteButton()}
      >
        <i className="fa fa-trash" aria-hidden="true" /> Delete
      </button>
      <button
        className="btn btn-light"
        onClick={() => props.handleIndexButton()}
      >
        <i className="fa fa-list" aria-hidden="true" /> Books
      </button>
    </div>
  );
};

const BookShow = props => {
  return (
    <div>
      <h1>Book Details</h1>

      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6">Title</div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6">
          {props.book.title}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6">ISBN</div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6">
          {props.book.isbn}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6">Notes</div>
        <div className="col-md-6 col-sm-6 col-lg-6 col-xs-6">
          {props.book.notes}
        </div>
      </div>

      {actionButtons(props)}
    </div>
  );
};

BookShow.propTypes = {
  book: PropTypes.object.isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
  handleIndexButton: PropTypes.func.isRequired,
  handleEditButton: PropTypes.func.isRequired
};

export default BookShow;
