import facebook from '../img/facebook.svg';
import inst from '../img/inst.svg';
import vk from '../img/vk.svg'
import linkedin from '../img/linkedin.svg'

import style from './footer-icons.module.scss';

export const FooterIcons = () => (
   <div className={style.icons}>
      <li className={style.icon}>
         <a href="https://m.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="facebook" />
         </a>
      </li>
      <li className={style.icon}>
         <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={inst} alt="instagramm" />
         </a>
      </li>
      <li className={style.icon}>
         <a href="https://vk.com/" target="_blank" rel="noreferrer">
            <img src={vk} alt="vk" />
         </a>
      </li>
      <li className={style.icon}>
         <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="linkedin" />
         </a>
      </li>
   </div>
)