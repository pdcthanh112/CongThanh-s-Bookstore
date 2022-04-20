import React, { useState, useEffect } from 'react'
import './bookDetail.scss'
import bookApi from '../../../../../api/userApi/bookApi';
import Layout from '../../../../core/layout/Layout';
import { Rating } from '@mui/material/';

const BookDetail = () => {

  const bookId = new URLSearchParams(window.location.search).get("id");
  const defaultBookImage = 'https://firebasestorage.googleapis.com/v0/b/congthanh-s-bookstore.appspot.com/o/Database%2FApp%20Image%2FDefault%20Image%2FDefault%20Book.png?alt=media&token=97effb99-873c-4858-99bc-4b46d1307d33';

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchRequest = async () => {
      try {
        const response = await bookApi.getById(bookId);
        setBook(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRequest();
  }, [bookId])


  const handleAddtoCart = () => {

  }
  const handleBuyNow = () => {

  }

  return (
    <Layout>
      <div className='bookInformation'>
        <div className='bookInformation__image'>
          <img src={book.image || defaultBookImage} alt='Book' />
          <div className='bookInformation__image-button'>
            <button className='bookInformation__image-button__addToCart' onClick={() => handleAddtoCart}>
              <i className="fa-solid fa-cart-shopping"></i>
              &nbsp;Add to Cart
            </button>
            <button className='bookInformation__image-button__buyNow' onClick={() => handleBuyNow}>
              <i className="fa-solid fa-sack-dollar"></i>
              &nbsp;Buy now
            </button>
          </div>
        </div>
        <div className='bookInformation__detail'>
          <div className='bookInformation__detail-bookname'>{book.book_name}</div>
          <div className='bookInformation__detail-view-one'>
            <div className='bookInformation__detail-publisher'>Publisher: <b>{book.publisher || 'Unknown'}</b></div>
            <div className='bookInformation__detail-author'>Author: <b>{book.author}</b></div>
          </div>
          <div className='bookInformation__detail-view-two'>
            <div className='bookInformation__detail-quantity'>Quantity: <b>{book.quantity}</b></div>
            <div className='bookInformation__detail-country'>Country: <b>{book.country || 'Unknown'}</b></div>
          </div>
          <div className='bookInformation__detail-rating'>
            {loading ? 'Loading...' : <Rating name="half-rating-read" defaultValue={book.rating} readOnly precision={0.1} size='medium'/>}
            <h4 className='bookInformation__detail-rating__ratingPoint'>{book.rating}</h4>
          </div>
          <div className='bookInformation__detail-price'>${book.price}</div>
          <div className='bookInformation__detail-quantity'>

          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BookDetail;
