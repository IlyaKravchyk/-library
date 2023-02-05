import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import style from './logo.module.scss'

export const Logo = () => (
   <div className={style.logo}>
      <Link to="/">
         <img src={logo} alt="logo cleverland" />
      </Link>
   </div>
)