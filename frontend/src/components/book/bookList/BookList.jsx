import React from 'react'

const BookList = (list) => {
  return (
    <div>
        {list.map((item, id) => (
            <div>
                <img src={item.imagePath} width="60" height="60" style={{ marginBottom: '45px', borderRadius: 45}} />
                <h3>{item.book_name}</h3>
            </div>
        ))}
    </div>
  )
}

export default BookList