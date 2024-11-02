import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {

    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();

    useEffect(()=> {

        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id)); 

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)
    }, [])


    return (

        <div>
            <h3 className="text-3x my-4">Listed Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Listed List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I Read: {readList.length}</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;