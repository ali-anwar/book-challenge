import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import toastr from "toastr";
import * as BookActions from "../../actions/BookActions";
import BookForm from "../../components/Books/Form"; // eslint-disable-line import/no-named-as-default
export class FormContainer extends React.Component {
  componentDidMount() {
    let bookId = Number(this.props.match.params.id);

    if(bookId) {
      let book = this.props.books.find(bookBeingUpdated => bookBeingUpdated.id === bookId)
      if (book) {
        this.props.action.getBookAction(book);
      } else {
        this.props.action.resetBookAction();
        this.props.history.replace('/books');
        toastr.error('Book does not exist');
      }
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
        toastr.success("Book has been updated successfully!");
        this.props.history.push("/books");
        return;
      }

      this.props.action
        .updateBookAction(book)
        .then(() => {
          toastr.success("Book has been updated successfully!");
          this.props.history.push("/books");
        })
        .catch(error => {
          toastr.error(error);
        });
    } else {
      this.props.action
        .createBookAction(book)
        .then(() => {
          toastr.success("Book has been created successfully!");
          this.props.history.push("/books");
        })
        .catch(error => {
          toastr.error(error);
        });
    }
  };

  handleCancel = event => {
    event.preventDefault();
    this.props.action.resetBookAction();
    this.props.history.replace("/books");
  };

  render() {
    const { initialValues } = this.props;
    const heading =
      initialValues && initialValues.id ? "Edit Book" : "Add new Book";

    return (
      <div className="jumbotron vertical-center custom-container">
        <div className="container">
          <BookForm
            heading={heading}
            handleSave={this.handleSave}
            handleCancel={this.handleCancel}
            initialValues={initialValues}
            currentBooks={this.props.books}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.booksReducer.books,
  initialValues: state.booksReducer.book
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
