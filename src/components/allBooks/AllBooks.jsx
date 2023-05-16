import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/allBooks")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  // search api

  const handleSearch = async () => {
    const url = `http://localhost:5000/allBooks?authorName=${searchQuery}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        // console.log(data);
        setAllBooks(result);
      });
  };

  return (
    <div className="container mt-5">
      <div className="m-auto" style={{ width: "max-content" }}>
        <div className="input-group mb-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
            placeholder="Insert a search text"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            onClick={handleSearch}
            className="btn btn-outline-info"
            type="button"
            id="button-addon2"
          >
            Search
          </button>
        </div>
        <div className="input-group mb-3">
          <select className="form-select" id="inputGroupSelect02">
            <option>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <label className="input-group-text" htmlFor="inputGroupSelect02">
            Options
          </label>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {allBooks.map((book, i) => (
          <BookCard book={book} key={i}></BookCard>
        ))}
      </div>
      <nav aria-label="Page navigation example m-auto text-center">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AllBooks;
