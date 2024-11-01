import React from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {

    const {bookId} = useParams();
    console.log(bookId)

    return (
        <div>
           <h1>Book Detalis: {bookId}</h1> 
        </div>
    );
};

export default BookDetail;