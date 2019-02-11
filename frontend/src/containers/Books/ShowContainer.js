import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import toastr from "toastr";
import * as BookActions from "../../actions/BookActions";
import BookShow from "../../components/Books/Show"; // eslint-disable-line import/no-named-as-default

export class ShowContainer extends React.Component {
  handleBooksIndex = () => {
    this.props.action.resetBookAction();
    this.props.history.replace("/books");
  };

  handleDeleteBook = () => {
    this.props.action
      .deleteBookAction(this.props.book.id)
      .then(() => {
        this.props.action.resetBookAction();
        toastr.success("Book has been deleted successfully!");
        this.props.history.replace("/books");
      })
      .catch(error => {
        toastr.error(error);
      });
  };

  handleEditBook = () => {
    const bookId = this.props.book.id;
    this.props.action.getBookAction(bookId);
    this.props.history.push(`/books/${bookId}/edit`);
  };

  render() {
    return (
      <div className="container">
        <BookShow
          handleDeleteButton={this.handleDeleteBook}
          handleIndexButton={this.handleBooksIndex}
          handleEditButton={this.handleEditBook}
          book={this.props.book}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  book: state.booksReducer.book
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(BookActions, dispatch)
});

ShowContainer.propTypes = {
  action: PropTypes.object.isRequired,
  history: PropTypes.object,
  match: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowContainer);
