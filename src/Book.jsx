import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "./data/data";
import React from "react";

const Book = () => {
  const params = useParams();
  const book = getBook(params.bookId);
  let location= useLocation()
  let navigate= useNavigate()

  if (book) {
    return (
      <React.Fragment>
        <img src={book.img} alt="" width={"200px"} />
        <ul>
          <li>{book.name}</li>
          <li>{book.price}</li>
          <li>{book.author}</li>
          <li>{book.description}</li>
        </ul>
          <button
            onClick={() => {
              deleteBook(book.id);
              navigate("/books" + location.search)
            }}
          >
            حذف کردن کتاب
          </button>
      </React.Fragment>
    );
  } else {
    return <div>گشتم نبود, نگرد نیست</div>;
  }
};

export default Book;
