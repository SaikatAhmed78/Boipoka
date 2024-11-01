import { json } from "react-router-dom";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');

    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else{
        return [];
    }
};

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();

    if (storedList.includes(id)) {
        alert('Already Exists In The Read List')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
};

const getStoredWishList = () =>{
    const storedWishListStr = localStorage.getItem('wishlist');

    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
};

const addToStroredWishList = (id) =>{
   const storedWishList =  getStoredWishList();

   if(storedWishList.includes(id)){
    alert('Already Exists In The Wishlist');
   }
   else{
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem('wishlist', storedWishListStr);
   }
};

export {addToStoredReadList, addToStroredWishList}