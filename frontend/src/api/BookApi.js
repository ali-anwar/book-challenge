import delay from "./delay";

const books = [
  {
    id: "react-flux-building-applications",
    title: "Building Applications in React and Flux",
    isbn: "5:08",
    notes: "JavaScript"
  },
  {
    id: "clean-code",
    title: "Clean Code: Writing Code for Humans",
    isbn: "3:10",
    notes: "Software Practices"
  },
  {
    id: "architecture",
    title: "Architecting Applications for the Real World",
    isbn: "2:52",
    notes: "Software Architecture"
  },
  {
    id: "career-reboot-for-developer-mind",
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    isbn: "2:30",
    notes: "Career"
  },
  {
    id: "web-components-shadow-dom",
    title: "Web Component Fundamentals",
    isbn: "5:10",
    notes: "HTML5"
  }
];
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, "g"), replace);
}

const generateId = book => {
  return replaceAll(book.title, " ", "-");
};
class BookApi {
  static getAllBooks() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(Object.assign([], books));
      }, delay);
    });
  }

  static deleteBook(bookId) {
    return new Promise(resolve => {
      setTimeout(() => {
        const indexOfBookToDelete = books.findIndex(book => book.id === bookId);
        books.splice(indexOfBookToDelete, 1);
        resolve();
      }, delay);
    });
  }

  static saveBook(book) {
    book = Object.assign({}, book);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (book.id) {
          const existingBookIndex = books.findIndex(
            existingBook => existingBook.id === book.id
          );
          books.splice(existingBookIndex, 1, book);
        } else {
          book.id = generateId(book);
          books.push(book);
        }

        resolve(book);
      }, delay);
    });
  }
}

export default BookApi;
