import React, { useState, useEffect } from 'react';
import './home.scss'
import Layout from '../../core/layout/Layout';
import bookApi from '../../../api/userApi/bookApi';
import BookList from '../../features/user/book/bookList/BookList';
import Pagination from '../../../pages/pagination/Pagination';

const Home = () => {

  const [listBook, setListBook] = useState([]);
  const [pagination, setPagination] = useState({currentPage: 1, pageSize: 24, totalResult: 100000000});
  const [filter, setFilter] = useState({});

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        const params = {
          _page: pagination.currentPage,
          _size: pagination.pageSize,
        }
        const response = await bookApi.getAll(params);
        setListBook(response);
      } catch (error) {
        console.log('Error: ', error);
      }
    };
    fetchRequest();
  }, [pagination, filter])


  return (
    <Layout>
      <BookList listBook={listBook} />
      <Pagination resultPerPage={10} totalResult={88} paginate={pagination.currentPage}/>
    </Layout>
  )
}
export default Home;