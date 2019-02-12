import React from "react";
import PropTypes from "prop-types";

const actionButtons = props => {
  return (
    <div className="row">
      <div className="col-sm-4 col-md-4 col-lg-4 col-xs-4 pull-left">
        <button
          className="btn btn-warning mr-2"
          onClick={() => props.handleEditButton()}
        >
          <i className="fa fa-pencil" aria-hidden="true" /> Edit
        </button>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-4 col-xs-4 text-center">
        <button
          className="btn btn-danger mr-2"
          onClick={() => props.handleDeleteButton()}
        >
          <i className="fa fa-trash" aria-hidden="true" /> Delete
        </button>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-4 col-xs-4">
        <button
          className="btn btn-light pull-right"
          onClick={() => props.handleIndexButton()}
        >
          <i className="fa fa-list" aria-hidden="true" /> Books
        </button>
      </div>
    </div>
  );
};

const BookShow = props => {
  return (
    <div className="row h-100">
      <div className="col-sm-12 align-self-center">
        <div className="card">
          <div className="card-container">
            <h1>
              <b>{props.book.title}</b>
            </h1>
            <div className="show-container">
              <div className="row">
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1">
                  <b>ISBN:</b>
                </div>
                <div className="col-md-11 col-sm-11 col-lg-11 col-xs-11">
                  {props.book.isbn}
                </div>
              </div>

              <div className="row">
                <div className="col-md-1 col-sm-1 col-lg-1 col-xs-1">
                  <b>Notes:</b>
                </div>
                <div className="col-md-11 col-sm-11 col-lg-11 col-xs-11">
                  {props.book.notes}
                </div>
              </div>
            </div>
            {actionButtons(props)}
          </div>
        </div>
      </div>
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
