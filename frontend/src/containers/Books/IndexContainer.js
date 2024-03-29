import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as BookActions from "../../actions/BookActions";
import BookIndex from "../../components/Books/Index";
import { renderErrors, renderSuccess } from "../../lib/renderNotifications";

export class IndexContainer extends React.Component {
  componentDidMount() {
    this.props.action.getBooksAction().catch(error => {
      renderErrors(error.errors.messages);
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
          renderSuccess("Book has been deleted successfully!");
        })
        .catch(error => {
          renderErrors(error.errors.messages);
        });
    }
  };

  handleShowBook = bookId => {
    if (bookId) {
      this.props.history.push(`/books/${bookId}`);
    }
  };

  render() {
    const { books } = this.props;

    if (!books) {
      return <div>Loading...</div>;
    }

    return (
      <div className="jumbotron vertical-center custom-container">
        <div className="container">
          <div className="row h-100">
            <div className="col-sm-12 align-self-center">
              <div className="card">
                <div className="card-container">
                  <div className="row mt-3">
                    <div className="col-sm-10">
                      <h1>Books</h1>
                    </div>
                    <div className="col-sm-2">
                      <button
                        type="button"
                        className="btn btn-primary pull-right m-t-5"
                        onClick={this.handleAddBook}
                      >
                        <i className="fa fa-plus" aria-hidden="true" /> New
                      </button>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <div className="scroll-container">
                        <BookIndex
                          books={books}
                          handleDeleteButton={this.handleDeleteBook}
                          handleEditButton={this.handleEditBook}
                          handleShowButton={this.handleShowBook}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
