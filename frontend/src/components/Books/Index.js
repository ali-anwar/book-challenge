import React from "react";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const titleFormatter = (cell, row) => {
  return `${cell}`;
};

const buttonFormatter = (cell, row, props) => {
  return (
    <div>
      <button
        className="btn btn-light mr-2"
        onClick={() => props.handleShowButton(row.id)}
      >
        <i className="fa fa-eye" aria-hidden="true" /> Show
      </button>
      <button
        className="btn btn-warning mr-2"
        onClick={() => props.handleEditButton(row.id)}
      >
        <i className="fa fa-pencil" aria-hidden="true" /> Edit
      </button>
      <button
        className="btn btn-danger"
        onClick={() => props.handleDeleteButton(row.id)}
      >
        <i className="fa fa-trash" aria-hidden="true" /> Delete
      </button>
    </div>
  );
};

const BookIndex = (props) => {
  return (
    <BootstrapTable
      data={props.books}
      bordered={false}
      striped
      hover
      condensed
    >
      <TableHeaderColumn dataField="id" isKey hidden>
        Id
      </TableHeaderColumn>

      <TableHeaderColumn
        dataField="title"
        dataFormat={titleFormatter}
        columnTitle
      >
        Title
      </TableHeaderColumn>

      <TableHeaderColumn dataField="isbn">ISBN</TableHeaderColumn>

      <TableHeaderColumn dataField="notes" columnTitle>
        Notes
      </TableHeaderColumn>

      <TableHeaderColumn
        dataField="button"
        dataFormat={buttonFormatter}
        formatExtraData={props}
      >
        Actions
      </TableHeaderColumn>
    </BootstrapTable>
  );
};

BookIndex.propTypes = {
  books: PropTypes.array.isRequired,
  handleDeleteButton: PropTypes.func.isRequired,
  handleEditButton: PropTypes.func.isRequired
};

export default BookIndex;
