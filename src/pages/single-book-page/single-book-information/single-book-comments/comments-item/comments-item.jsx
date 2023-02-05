import { CardRaiting } from '../../../../all-books-page/card-raiting/card-raiting';
import style from './comments-item.module.scss';

export const CommentsItem = ({ userImage, userName, date, raiting, description }) => (

   <div className={style.item}>
      <div className={style.container}>
         <div className={style.userImage}>
            <img src={userImage} alt="avatar" />
         </div>
         <div className={style.wrapper}>
            <div className={style.userName}>
               {userName}
            </div>
            <div className={style.date}>
               {date}
            </div>
         </div>
      </div>
      <CardRaiting
         raiting={raiting}
         className={style.starSize}
      />
      {description &&
         <div className={style.description}>
            {description}
         </div>}
   </div>

)

