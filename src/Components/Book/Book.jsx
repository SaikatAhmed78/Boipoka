import React from 'react';

const Book = ({ book }) => {

    const { image, bookName, author } = book;

    return (
        <div className="card bg-base-100 w-96 shadow-xl mt-5 p-6 border-2">
            <figure className='bg-[#f3f3f3] py-8 rounded-2xl'>
                <img
                    className='h-[166px]'
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {bookName}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>By: {author}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default Book;