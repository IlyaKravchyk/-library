import style from './card-raiting.module.scss';
import { ReactComponent as Star } from './img/star.svg'

export const CardRaiting = ({ raiting, visivle = false, className }) => {

   const stars = []
   for (let i = 1; i <= 5; i++) {
      stars.push(
         <div className={style.star} key={i}>
            <Star className={(i <= raiting) ? `${style.active} ${className}` : `${style.hover} ${className}`} />
         </div>)
   }
   return (
      <div className={style.raitingWrapper}>
         {raiting && stars}
         {!raiting && !visivle && <span className={style.noRaiting}>еще нет оценок</span>}
         {!raiting && visivle &&
            <>
               {stars}
               <span className={style.noRaitingText}>еще нет оценок</span>
            </>
         }
      </div>
   )
}