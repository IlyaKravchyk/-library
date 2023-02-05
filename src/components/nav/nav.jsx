import { NavLink, useParams } from 'react-router-dom';
import { menuData } from '../../json-data/menu-data';
import { BooksCategories } from './books-categories/books-categories';
import style from './nav.module.scss';

export const Nav = () => {

   const bookCategory = menuData.map(({ category, count, id, url }) =>
      <BooksCategories
         key={id}
         category={category}
         count={count}
         url={url}
      />)

   const { category } = useParams()

   return (
      <nav className={style.nav}>
         <ul className={style.items}>
            <li className={style.item}>
               <NavLink to={`/books/${category || 'all'}`} className={({ isActive }) => isActive ? `${style.link} ${style.click}` : style.link}>
                  Витрина книг
               </NavLink>
               <ul className={style.booksCategories}>
                  {bookCategory}
               </ul>
            </li>
            <li className={style.item}>
               <NavLink to="/terms" className={({ isActive }) => isActive ? `${style.link} ${style.click}` : style.link}>
                  Правила пользования
               </NavLink>
            </li>
            <li className={style.item}>
               <NavLink to="/contract" className={({ isActive }) => isActive ? `${style.link} ${style.click}` : style.link}>
                  Договор оферты
               </NavLink>
            </li>
         </ul>
      </nav>
   )
}