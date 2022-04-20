import React from 'react'
import { Link } from 'react-router-dom'
import './bookList.scss'

const BookList = ({ listBook }) => {
  const defaultBookImage = 'https://firebasestorage.googleapis.com/v0/b/congthanh-s-bookstore.appspot.com/o/Database%2FApp%20Image%2FDefault%20Image%2FDefault%20Book.png?alt=media&token=97effb99-873c-4858-99bc-4b46d1307d33';

  const handleAddtoCart = () => {

  }

  return (
    <div className='bookList'>
      {listBook.map((item, id) => (
        <div key={id} className='bookItem'>
          <img src={item.image || defaultBookImage} alt='Book' className='bookItem__image' />
          <h4 className='bookItem__bookname'>
            <Link to={{ pathname: '/book', search: `?id=${item.id}` }} target={'_blank'}>{item.book_name}</Link>
          </h4>
          <h5>${item.price}</h5>
          <button className='bookItem__addToCart' onClick={() => handleAddtoCart}>
            <i className="fa-solid fa-cart-shopping"></i>
            &nbsp;Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList