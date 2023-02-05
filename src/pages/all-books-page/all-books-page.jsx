import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { booksData } from '../../json-data/books-data';
import { Search } from './search/search';
import { Card } from './card/card';

import style from './all-books-page.module.scss';

export const AllBooksPage = () => {

   const [active, setActive] = useState(true)
   const setTrue = () => setActive(true)
   const setFalse = () => setActive(false)

   const navigate = useNavigate()
   const { category } = useParams()


   const redirectToSingleCard = (bookId) => {
      navigate(`/books/${category}/${bookId}`)
   }

   const itemCard = booksData.map(item =>
      <Card
         item={item}
         key={item.id}
         active={active}
         redirectToSingleCard={redirectToSingleCard}
      />
   )

   return (
      <div className={style.wrapper}>
         <Search
            active={active}
            setTrue={setTrue}
            setFalse={setFalse}
         />
         <div className={style.card}>
            <div className={active ? style.items : `${style.items} ${style.itemsList}`}>
               {itemCard}
            </div>
         </div>
      </div>

   )
}