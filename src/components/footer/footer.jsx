import { FooterCopyright } from './footer-copyright/footer-copyright';
import { FooterIcons } from './footer-icons/footer-icons';
import style from './footer.module.scss';

export const Footer = () => (
   <footer className={style.footer}>
      <div className='container'>
         <div className={style.items}>
            <FooterCopyright />
            <FooterIcons />
         </div>
      </div>
   </footer>
)