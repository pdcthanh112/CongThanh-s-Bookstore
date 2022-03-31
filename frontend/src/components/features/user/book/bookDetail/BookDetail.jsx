import React, { useState, useEffect } from 'react'
import bookApi from '../../../../../api/userApi/bookApi';
import Layout from '../../../../core/layout/Layout';
import './bookDetail.scss'

const BookDetail = ({ id }) => {
  //const queryString = window.location.search;
  //console.log(queryString);
  const [bookId, setBookId] = useState(id);       //////////////////////////////////////////////////////////////////
  const [book, setBook] = useState();
  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const response = await bookApi.getById(bookId);
        console.log('RRRRRRRRRR', response.book_name);
        setBook(response)
      } catch (error) {
        console.log(error);
      }
    }
    fetchRequest();
  }, [bookId])




  return (
    <Layout>
      {/* {book.book_name}a */}a {book.book_name}
    </Layout>
  )
}

export default BookDetail;