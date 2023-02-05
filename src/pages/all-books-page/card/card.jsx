
import { ReactComponent as CatImage } from '../../../img/cat.svg';
import { CardRaiting } from '../card-raiting/card-raiting';
import { ButtonCard } from '../button-card/button-card';

import style from './card.module.scss';

export const Card = ({ item, active, redirectToSingleCard }) => {

   const clickHandler = () => {
      redirectToSingleCard(item.id)
   }

   return (
      <div className={active ? style.wrapper : `${style.wrapper} ${style.wrapperList}`} data-test-id='card' role='presentation' onClick={clickHandler}>
         <div className={item.book ? (active ? style.image : `${style.image} ${style.imageList}`) : style.imageCat}>
            {item.book ? <img src={item.book} alt="book" /> : <CatImage />}
         </div>
         <div className={active ? style.raiting : `${style.raiting} ${style.raitingList}`}>
            <CardRaiting
               className={style.starSize}
               raiting={item.raiting}
               active={active}
            />
         </div>
         <div className={active ? style.description : `${style.description} ${style.descriptionList}`}>
            <div className={active ? style.bookName : `${style.bookName} ${style.bookNameList}`}>
               {item.description}
            </div>
            <div className={style.author}>
               {item.author}
            </div>
         </div>
         <div className={active ? style.button : `${style.button} ${style.buttonList}`}>
            <ButtonCard
               className={active ? style.buttonWrapper : `${style.buttonWrapper} ${style.buttonWrapperList}`}
               reservation={item.reservation}
               busy={item.busy}
            />
         </div>
      </div >
   )
}