import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 p-6 rounded-lg shadow-lg">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img 
      className='rounded-lg shadow-md'
      src={bannerImg}/>

    <div className='ml-4'>
      <h1 className="text-3xl font-bold">Books to freshen up your bookshelf</h1>
      <p className="py-4">Discover a selection of books that will enrich your reading collection.</p>
      <button className="bg-[#23be0a] hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;