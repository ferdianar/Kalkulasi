import React from 'react'
import '../stylesheets/Cards.css'

function ListBook () {
     const books = [
       {
           "id": 12,
           "name": 'Magazine Book',
           "genre": 'Technology',
           "price": 55000,
           "creator": 'Carl Braga',
           "description": 'This license only applies if you downloaded this content as license only applies if you downloaded this content as license only applies if you downloaded this content as'
       },
       {
           "id": 33,
           "name": 'The Design of Everyday Things',
           "genre": 'Design',
           "price": 77500,
           "creator": 'Don Norman',
           "description": 'This license only applies if you downloaded this content as license only applies if you downloaded this content as license only applies if you downloaded this content as'
       },
       {
           "id": 53,
           "name": 'Dont Make Me Think',
           "genre": 'Design',
           "price": 45000,
           "creator": 'Steve Krug',
           "description": 'This license only applies if you downloaded this content as license only applies if you downloaded this content as license only applies if you downloaded this content as'
       },
       {
           "id": 42,
           "name": 'Think and Growth Rich',
           "genre": 'Self Development',
           "price": 122000,
           "creator": 'Napoleon Hill',
           "description": 'This license only applies if you downloaded this content as license only applies if you downloaded this content as license only applies if you downloaded this content as'
       },
       {
           "id": 24,
           "name": 'Sprint Book',
           "genre": 'Design',
           "price": 38000,
           "creator": 'Jake Knapp',
           "description": 'This license only applies if you downloaded this content as license only applies if you downloaded this content as license only applies if you downloaded this content as'
       }
   ];
   const BookReview = books.map((BookItems) => {
     return(
     <div className="bookCard">
       <h3 className="bookTitle">{BookItems.name}</h3>
       <div className="data">
       <p className="creator">{BookItems.creator}</p>
       <p className="price">{BookItems.price}</p>
       </div>
       <p className="description">{BookItems.description}</p>
     </div>
     )
   });
   return(
     <div className="result">
        {BookReview}
     </div>
   )
 }

 export default ListBook;