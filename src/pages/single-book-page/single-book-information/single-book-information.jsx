import { CardRaiting } from '../../all-books-page/card-raiting/card-raiting';
import { DetailedInfo } from './information/detailed-info';
import { Title } from './title/title';
import { RateButton } from './rate-button/rate-button';
import style from './single-book-information.module.scss';
import { SingleBookComments } from './single-book-comments/single-book-comments';

export const SingleBookInformation = ({ raiting, comments, commentsData }) => (
   <div className={style.wrapper}>
      <div className={style.raiting}>
         <Title
            textTitle='Рейтинг'
         />
         <div className={style.informationRaiting}>
            <CardRaiting
               raiting={raiting}
               visivle={true}
               className={style.starSize}
            />
            <span className={style.raitingCoutn}>
               {raiting}
            </span>
         </div>
      </div>
      <DetailedInfo />
      {comments && <SingleBookComments commentsData={commentsData} />}
      {!comments &&
         <div className={style.titleWrapper}>
            <h2 className={style.title}>Отзывы</h2>
            <span className={style.commentCount}>0</span>
         </div>}
      <RateButton />
   </div>
)