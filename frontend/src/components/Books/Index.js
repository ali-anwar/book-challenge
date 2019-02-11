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
        className="btn btn-danger"
        onClick={() => props.handleDeleteButton(row.id)}
      >
        <i className="fa fa-trash" aria-hidden="true" /> Delete
      </button>
    </div>
  );
};

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BootstrapTable
        data={this.props.books}
        selectRow={this.selectRowProp}
        options={this.options}
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
          formatExtraData={this.props}
        >
          Actions
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  handleDeleteButton: PropTypes.func.isRequired
};

export default BookList;
