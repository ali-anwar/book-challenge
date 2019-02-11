import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import toastr from "toastr";
import * as BookActions from "../../actions/BookActions";
import BookIndex from "../../components/Books/Index";

export class IndexContainer extends React.Component {
  componentDidMount() {
    this.props.action.getBooksAction().catch(error => {
      toastr.error(error);
    });
  }
  handleAddBook = () => {
    this.props.action.resetBookAction();
    this.props.history.push("/books/new");
  };

  handleEditBook = bookId => {
    if (bookId) {
      this.props.action.getBookAction(bookId);
      this.props.history.push(`/books/${bookId}/edit`);
    }
  };

  handleDeleteBook = bookId => {
    if (bookId) {
      this.props.action
        .deleteBookAction(bookId)
        .then(() => {
          toastr.success("Book has been deleted successfully!");
        })
        .catch(error => {
          toastr.error(error);
        });
    }
  };

  handleShowBook = bookId => {
    if (bookId) {
      this.props.action.getBookAction(bookId);
      this.props.history.push(`/books/${bookId}`);
    }
  }

  render() {
    const { books } = this.props;

    if (!books) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col">
            <h1>Books</h1>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
                onClick={this.handleAddBook}
              >
                <i className="fa fa-plus" aria-hidden="true" /> New
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <BookIndex
              books={books}
              handleDeleteButton={this.handleDeleteBook}
              handleEditButton={this.handleEditBook}
              handleShowButton={this.handleShowBook}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(BookActions, dispatch)
});

IndexContainer.propTypes = {
  books: PropTypes.array,
  action: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);
