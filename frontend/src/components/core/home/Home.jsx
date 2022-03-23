import React, { useState, useEffect } from 'react';
import './home.scss'
import Layout from '../../layout/Layout';
import bookApi from '../../../api/adminApi/bookApi';
import BookList from '../../features/user/book/bookList/BookList';

const Home = () => {

  const [listBook, setListBook] = useState([]);

  useEffect(() => { 
    const fetchRequest = async () => {
      try {
        // const params = {
        //   _page: 1,
        //   _limit: 10,
        // }
        const response = await bookApi.getAll();     
        setListBook(response.data);
      } catch (error) {
        console.log('asfhoasnasohgfoasidshfoadso', error);
      }
    }
    fetchRequest(); 
  }, [])

  return (
    <Layout title='Home Page' description="">
 
      <BookList listBook={listBook}/>

    </Layout>

  )
}
export default Home;