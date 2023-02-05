import { Outlet } from 'react-router-dom';
import { Nav } from '../nav/nav';

import style from './main-layout.module.scss';

export const MainLayout = () => (
   <div className="main">
      <div className="container">
         <div className={style.items}>
            <Nav />
            <div className={style.item}>
               <Outlet />
            </div>
         </div>
      </div>
   </div>
)