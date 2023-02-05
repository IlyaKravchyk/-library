import { Logo } from './logo/logo';
import { HeaderTitle } from './header-title/header-title';
import { HeaderPerson } from './header-person/header-person';
import style from './header.module.scss';

export const Header = () => (
   <header className={style.header}>
      <div className="container">
         <div className={style.items}>
            <div className={style.burger}>
               <span className={style.burgerLine}> </span>
            </div>
            <Logo />
            <HeaderTitle />
            <HeaderPerson />
         </div>
      </div>
   </header>
)