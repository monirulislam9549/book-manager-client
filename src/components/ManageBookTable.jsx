import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageBookTable = () => {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allBooks")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          alert("delete successfully");
          const remaining = allBooks.filter((book) => book._id !== id);
          setAllBooks(remaining);
        }
      });
  };

  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">SL</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Category</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {allBooks.map((book, i) => (
            <tr key={book.bookName + i}>
              <th scope="row">{i + 1}</th>
              <th>{book.bookName}</th>
              <td>{book.authorName}</td>
              <td>{book.categoryName}</td>
              <td>
                <button onClick={() => handleDelete(book._id)}>Delete</button>
                <Link to={`/admin/dashboard/edit-books/${book._id}`}>
                  <button>Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookTable;
