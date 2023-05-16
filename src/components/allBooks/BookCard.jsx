import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    _id,
    bookName,
    authorName,
    imageUrl,
    categoryName,
    metaTextDescription,
    bookPdfUrl,
  } = book;

  return (
    <div className="col">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{bookName}</h5>
          <p className="card-text">{metaTextDescription}</p>
        </div>
        <div className="card-footer">
          <Link to={`details/${_id}`} className="text-decoration-none">
            See details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
