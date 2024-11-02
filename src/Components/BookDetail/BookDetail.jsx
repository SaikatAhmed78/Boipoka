import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList, addToStroredWishList } from '../../Utility/addToDb';

const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);
    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, } = book;

    const handleMarkAsRead = (id) =>{
        addToStoredReadList(id);
    };
    const handleAddToWishList = (id) =>{
        addToStroredWishList(id);
    }
    return (

        <div className="hero bg-base-200 w-full h-36 shadow-xl mt-5 p-6 border-2 min-h-screen">
                <h2>Book Details: {bookId}</h2>
            <div className="hero-content flex-col lg:flex-row">
                <img
                    className='rounded-lg shadow-xl w-32 h-32'
                    src={image} />

                <div className='ml-5'>
                    <h1 className="text-3xl font-bold text-black">{bookName}</h1>
                    <h3>By: {author}</h3>

                    <hr className='my-2' />

                    <h4 className='text-lg'>{category}</h4>
                    <hr />
                    <p className="py-4 text-justify">
                        <span className='text-black font-bold'>Review:</span> {review}
                    </p>

                    <div className='flex gap-4'>
                        {
                            tags.map((tag, idx) => <p key={idx} className=" text-green-600 mb-4 "> #{tag}</p>)
                        }
                    </div>
                    <hr />
                        <ul className='text-gray-700 space-y-1'>
                            <li><strong>Number of Pages:</strong> {totalPages}</li>
                            <li><strong>Publisher:</strong> {publisher}</li>
                            <li><strong>Year of Publishing:</strong> {yearOfPublishing}</li>
                            <li><strong>Rating:</strong></li>
                        </ul>

                    <div className='flex space-x-4 mt-4'>

                        <button 
                        className="btn btn-outline btn-primary"
                        onClick={() => handleMarkAsRead(bookId)}
                        >Read
                        </button>

                        <button 
                        className="btn bg-[#50b1c9] btn-primary"
                        onClick={() =>handleAddToWishList(id)}
                        >Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;