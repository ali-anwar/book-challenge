import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as BookActions from "../../actions/BookActions";
import BookForm from "../../components/Books/Form"; // eslint-disable-line import/no-named-as-default
import { EDIT_BOOK, ADD_BOOK } from "../../config/formHeadings";
import { renderErrors, renderSuccess } from "../../lib/renderNotifications";
import Spinner from "../../components/Common/Spinner";

export class FormContainer extends React.Component {
  componentDidMount() {
    let bookId = Number(this.props.match.params.id);

    if (bookId) {
      this.props.action.fetchBookAction(bookId).catch(error => {
        this.props.action.resetBookAction();
        this.props.history.replace("/books");
        renderErrors(error.errors.messages);
      });
    }
  }

  handleSave = values => {
    const book = {
      id: values.id,
      title: values.title,
      notes: values.notes,
      isbn: values.isbn
    };

    if (book.id) {
      const bookBeingUpdated = this.props.books.find(
        book => book.id === values.id
      );

      if (values === bookBeingUpdated) {
        renderSuccess("Book has been updated successfully!");
        this.props.history.push("/books");
        return;
      }

      this.props.action
        .updateBookAction(book)
        .then(() => {
          renderSuccess("Book has been updated successfully!");
          this.props.history.push("/books");
        })
        .catch(error => {
          renderErrors(error.errors.messages);
        });
    } else {
      this.props.action
        .createBookAction(book)
        .then(() => {
          renderSuccess("Book has been created successfully!");
          this.props.history.push("/books");
        })
        .catch(error => {
          renderErrors(error.errors.messages);
        });
    }
  };

  handleCancel = event => {
    event.preventDefault();
    this.props.action.resetBookAction();
    this.props.history.replace("/books");
  };

  renderContent = () => {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      const { initialValues } = this.props;
      const heading = initialValues && initialValues.id ? EDIT_BOOK : ADD_BOOK;

      return (
        <BookForm
          heading={heading}
          handleSave={this.handleSave}
          handleCancel={this.handleCancel}
          initialValues={initialValues}
          currentBooks={this.props.books}
        />
      );
    }
  };

  render() {
    return (
      <div className="jumbotron vertical-center custom-container">
        <div className="container">{this.renderContent()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  initialValues: state.booksReducer.book,
  loading: state.booksReducer.loading
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(BookActions, dispatch)
});

FormContainer.propTypes = {
  action: PropTypes.object.isRequired,
  history: PropTypes.object,
  initialValues: PropTypes.object,
  match: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
