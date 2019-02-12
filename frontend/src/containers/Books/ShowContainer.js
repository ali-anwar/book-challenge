import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import toastr from "toastr";
import * as BookActions from "../../actions/BookActions";
import BookShow from "../../components/Books/Show"; // eslint-disable-line import/no-named-as-default

export class ShowContainer extends React.Component {
  componentDidMount() {
    this.props.action.getBookAction(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.book.id) {
      this.props.action.resetBookAction();
      this.props.history.replace("/books");
      toastr.error("Book does not exist");
    }
  }

  handleBooksIndex = () => {
    this.props.action.resetBookAction();
    this.props.history.replace("/books");
  };

  handleDeleteBook = () => {
    this.props.action
      .deleteBookAction(this.props.book.id)
      .then(() => {
        toastr.success("Book has been deleted successfully!");
        this.props.history.replace("/books");
        this.props.action.resetBookAction();
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
      <div class="jumbotron vertical-center custom-container">
        <div class="container">
          <BookShow
            handleDeleteButton={this.handleDeleteBook}
            handleIndexButton={this.handleBooksIndex}
            handleEditButton={this.handleEditBook}
            book={this.props.book}
          />
        </div>
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
