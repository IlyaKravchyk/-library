import { Title } from '../title/title';
import { CommentsItem } from './comments-item/comments-item';
import style from './single-book-comments.module.scss';

export const SingleBookComments = ({ commentsData }) => {

   const data = commentsData.map(({ image, userName, date, raiting, description, id }) =>
      <CommentsItem
         userImage={image}
         userName={userName}
         date={date}
         raiting={raiting}
         description={description}
         key={id}
      />)

   return (
      <div className={style.wrapper}>
         <Title
            textTitle='Отзывы'
            countTitle='3'
         />
         <div className={style.items}>
            {data}
         </div>
      </div>
   )
}
