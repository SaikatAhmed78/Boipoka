import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category } = book;

    return (

        <Link to={`books/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl mt-5 p-6 border-2 ">
                <figure className='bg-[#f3f3f3] py-8 rounded-2xl'>
                    <img
                        className='h-[166px]'
                        src={image} />
                </figure>
                <div className="card-body space-y-2">

                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, idx) => <button key={idx} className="btn btn-xs bg-green-200 text-green-600">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}

                    </h2>

                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">

                        <div className="badge badge-outline">{category}</div>

                        <div className="rating">
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-100" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;