import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import bookApi from "./api/userApi/bookApi";

import Layout from "./components/core/layout/Layout";
import BookList from "./components/features/user/book/bookList/BookList";
import Pagination from "./pages/pagination/Pagination";

const App = () => {
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
};

export default App;
