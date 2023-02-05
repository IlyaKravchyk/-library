import { NavLink } from "react-router-dom";
import style from './nav-item.module.scss';

export const BooksCategories = ({ category, count, url }) => (
   <li className={style.item}>
      <NavLink to={`/books/${url}`} className={({ isActive }) => isActive ? `${style.link} ${style.click}` : style.link} >
         {category}
         <span className={style.count}>
            {(count === 'none') ? '' : count}
         </span>
      </NavLink>
   </li >
)
