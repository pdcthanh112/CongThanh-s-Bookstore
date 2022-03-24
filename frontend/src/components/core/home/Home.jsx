import React, { useState, useEffect } from 'react';
import './home.scss'
import Layout from '../../layout/Layout';
import bookApi from '../../../api/adminApi/bookApi';
import BookList from '../../features/user/book/bookList/BookList';
import Pagination from '../../../pages/pagination/Pagination';

const Home = () => {

  const [listBook, setListBook] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalResult, setTotalResult] = useState([]);

  useEffect(() => { 
    const fetchRequest = async () => {
      try {
        
        const params = {
          _page: currentPage,
          _size: pageSize,
        }
        const response = await bookApi.getAll(params);     
        setListBook(response.data);
      } catch (error) {
        console.log('asfhoasnasohgfoasidshfoadso', error);
      }
    }
    fetchRequest(); 

  
  }, [currentPage])


  return (
    <Layout title='Home Page' description="">
 
      <BookList listBook={listBook}/>
      {/* <Pagination resultPerPage={_size} totalResult={} paginate={currentPage}/> */}
      <Pagination resultPerPage={10} totalResult={88}/>

    </Layout>

  )
}
export default Home;