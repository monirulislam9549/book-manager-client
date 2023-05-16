import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [detailsBook, setDetailsBook] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDetailsBook(data);
      });
  }, []);
  return (
    <div>
      <div className="card">
        <div className="card-header">{detailsBook.bookName}</div>
        <div className="card-body">
          <h5 className="card-title">{detailsBook.authorName}</h5>
          <p className="card-text">{detailsBook.metaTextDescription}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <iframe
        title="pdf file viewer"
        width="100%"
        height="600px"
        src={detailsBook.bookPdfUrl}
      ></iframe>
    </div>
  );
};

export default BookDetails;
