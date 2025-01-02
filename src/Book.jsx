import React from 'react'
import { useParams } from 'react-router-dom'
import { getBook } from './data/data'

const Book = () => {
    const params= useParams()
    const book= getBook(params.bookId)

  if(book){
    return (
        <ul>
          <li>{book.name}</li>
          <li>{book.price}</li>
          <li>{book.author}</li>
          <li>{book.description}</li>
        </ul>
      )
  }else{
    return(
        <div>گشتم نبود, نگرد نیست</div>
    )
  }
}

export default Book
