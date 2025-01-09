import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Books from "./Books.jsx";
import Book from "./Book.jsx";
import NotFound from "./NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />}>
            <Route path=":bookId" element={<Book />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
