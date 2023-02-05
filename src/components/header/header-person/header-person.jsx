import avatar from '../img/avatar.jpg';
import style from './header-person.module.scss';

export const HeaderPerson = () => (
   <div className={style.person}>
      <div className={style.wrapper}>
         <div className={style.greetings}>
            Привет, Иван!
         </div>
         <div className={style.avatar}>
            <img src={avatar} alt="avatar" />
         </div>
      </div>
   </div>
)