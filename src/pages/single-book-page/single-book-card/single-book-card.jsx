import { ButtonCard } from '../../all-books-page/button-card/button-card';
import { ReactComponent as CatImage } from '../../../img/cat.svg'
import style from './single-book-card.module.scss';

export const SingleBookCard = ({ imageBook, description, author, reservation, busy }) => (
   <div className={style.card}>
      <div className={style.wrapper}>
         <div className={imageBook ? style.image : style.imageCat}>
            {imageBook ? <img src={imageBook} alt="book" /> : <CatImage />}
         </div>
         <div className={style.description}>
            <div className={style.bookTitle}>
               {description}
            </div>
            <div className={style.author}>
               {author}
            </div>
            <ButtonCard
               className={style.buttonWrapper}
               reservation={reservation}
               busy={busy}
            />
         </div>
         <div className={style.aboutBook}>
            <h2 className={style.aboutBookTitle}>
               О книге
            </h2>
            <p className={style.aboutBookDescription}>
               Алгоритмы — это всего лишь пошаговы алгоритмы решения задач, и большинтсво таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, поогрузится в глубокую философию гениального Кнута, изучать многостраничные фолианты с доказательтсвами и обоснованиями, но хотите ли вы тратить на это свое время?
            </p>
            <p className={style.aboutBookDescription}>
               Откройте великолепно иллюстрированную книгу и вы сразу поймёте, что алгоритмы — это простою А грокать алгоритмы — это веселове и увлекательное занятие.
            </p>
         </div>
      </div>
   </div>
)