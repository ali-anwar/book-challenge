import React from "react";
import PropTypes from "prop-types";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

const titleFormatter = (cell, row) => {
  return `${cell}`;
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

        <TableHeaderColumn dataField="description" columnTitle>
          Description
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
