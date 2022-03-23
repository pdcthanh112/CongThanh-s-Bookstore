import React from 'react'
import './bookList.scss'
// import {Button} from '@mui/material'
import Button from '@mui/material/Button';
const BookList = ({ listBook }) => {
  const defaultBookImage = 'https://firebasestorage.googleapis.com/v0/b/congthanh-s-bookstore.appspot.com/o/Database%2FApp%20Image%2FDefault%20Image%2FDefault%20Book.png?alt=media&token=97effb99-873c-4858-99bc-4b46d1307d33'
  return (
    <div className='col-lg-12 col-md-12 col-sm-12 bookList'>
      {listBook.map((item, id) => (

        <div key={id} className='bookItem'>
          <img src={item.image ? item.image : defaultBookImage} alt='Book' className='bookItem__image' />
          <h4 className='bookItem__bookname'>
            <a href='#'>{item.book_name}</a>
          </h4>
          <h5>${item.price}</h5>
          <Button variant="contained">Add to Cart</Button>
        </div>
      ))}
    </div>
  )
}

export default BookList