import React from 'react'
import { Link } from 'react-router-dom'
import './bookList.scss'
import BookDetail from '../bookDetail/BookDetail'

const BookList = ({ listBook }) => {
  const defaultBookImage = 'https://firebasestorage.googleapis.com/v0/b/congthanh-s-bookstore.appspot.com/o/Database%2FApp%20Image%2FDefault%20Image%2FDefault%20Book.png?alt=media&token=97effb99-873c-4858-99bc-4b46d1307d33';

const handleAddtoCart = () => {

}

const handleViewDetail = (id) => {
<BookDetail id={id}/>
}

  return (
    <div className='bookList'>
      {listBook.map((item, id) => (
        <div key={id} className='bookItem'>
          <img src={item.image || defaultBookImage} alt='Book' className='bookItem__image' />
          <h4 className='bookItem__bookname'>
            {/* <Link to={{ pathname: '/book', search: `?id=${item.id}` }} target={'_blank'}>{item.book_name}</Link> */}
            {item.book_name}
          </h4>
          <h5>${item.price}</h5>
          <div className='bookItem_button'>
            <button className='bookItem__addToCart' onClick={handleAddtoCart}>
              <i className="fa-solid fa-cart-shopping"></i>
              &nbsp;Add to Cart
            </button>
            <button className='bookItem__viewDetail' onClick={handleViewDetail(item.id)}>
              View detail
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList