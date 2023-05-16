import React, { useEffect, useState } from "react";

const ManageBookTable = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allBooks")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book) => (
            <tr>
              <th scope="row">{book.bookName}</th>
              <td>{book.authorName}</td>
              <td>{book.categoryName}</td>
              <td>
                <button>Delete</button>
                <button>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;
