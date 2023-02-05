import { ReactComponent as Square } from './img/square.svg';
import { ReactComponent as Burger } from './img/burger.svg';
import glass from './img/glass.svg';
import arrowDown from './img/arrow-down.svg';
import style from './search.module.scss';



export const Search = ({ active, setTrue, setFalse }) => (
   <div className={style.wrapper}>
      <form className={style.form} method="get">
         <div className={style.author}>
            <img className={style.image} src={glass} alt="glass" />
            <input className={style.inputAuthor} type="text" placeholder='Поиск книги или автора…' />
         </div>
         <div className={style.rating}>
            <img className={style.image} src={arrowDown} alt="sqare" />
            <input className={style.inputRaiting} type="text" placeholder='По рейтингу' />
         </div>
      </form>
      <div className={style.buttons}>

         <button type='submit' className={active ? `${style.buttonTile} ${style.active}` : style.buttonTile} data-test-id='button-menu-view-window' onClick={setTrue}>
            <Square className={active ? style.active : ''} />
         </button>


         <button type='submit' className={active ? style.buttonList : `${style.buttonList} ${style.active}`} data-test-id='button-menu-view-list' onClick={setFalse}>
            <Burger className={active ? '' : style.active} />
         </button>

      </div>
   </div >
)