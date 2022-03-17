import React, { useState, useEffect } from 'react';
import Layout from '../../pages/Layout';
import bookApi from '../../api/adminApi/bookApi';

const Home = () => {

  const [listBook, setListBook] = useState([]);

  useEffect(() => { 
    const fetchListBook = async () => {
      try {
        // const params = {
        //   _page: 1,
        //   _limit: 10,
        // }
        const response = await bookApi.getAll();
        setListBook(response)
      } catch (error) {
        console.log('asfhoasnasohgfoasidshfoadso');
      }
    }
    fetchListBook();
  }, [])

  return (
    <Layout title='Home Page' description="">
      ....
      HOMEEEEEEEEEEEEEEEE {listBook}EEEEEEEEEEEEEEEEEEEEE

    </Layout>

  )
}

export default Home;