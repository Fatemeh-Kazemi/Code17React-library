import { NavLink, Outlet } from "react-router-dom";
import { getBooks } from "./data/data";

const Books = () => {
  let books = getBooks();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {books.map((book) => (
        <NavLink
          to={book.id}
          key={book.id}
          style={({ isActive }) => {
            return { color: isActive ? "red" : "" };
          }}
        >
          {book.name}
        </NavLink>
      ))}

      <Outlet />
    </div>
  );
};

export default Books;
