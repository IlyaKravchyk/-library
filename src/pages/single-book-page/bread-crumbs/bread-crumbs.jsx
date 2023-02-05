import style from './bread-crumbs.module.scss';

export const BreadCrumbs = ({ category, description }) => (
   <div className={style.wrapper}>
      <div className="container">
         <div className={style.items}>
            <span className={style.category}>
               {category}
            </span>
            <span className={style.slash}>
               /
            </span>
            <span className={style.description}>
               {description}
            </span>
         </div>
      </div>
   </div>
)