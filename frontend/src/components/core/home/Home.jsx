import React, { useState, useEffect } from 'react';
import './home.scss'
import Layout from '../../core/layout/Layout';
import bookApi from '../../../api/userApi/bookApi';
import BookList from '../../features/user/book/bookList/BookList';
import Pagination from '../../../pages/pagination/Pagination';

const Home = () => {

  const [listBook, setListBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(24);
  const [totalResult, setTotalResult] = useState([]);

  useEffect(() => { 
    const fetchRequest = async () => {
      try {     
        const params = {
          _page: currentPage,
          _size: pageSize,
        }
        const response = await bookApi.getAll(params);  
        setListBook(response);
      } catch (error) {
        console.log('Error: ', error);
      }
    }
    fetchRequest(); 
  }, [currentPage, pageSize])


  return (
    <Layout>
      <BookList listBook={listBook}/>
     
      <Pagination resultPerPage={10} totalResult={88}/>

    </Layout>
  )
}
export default Home;