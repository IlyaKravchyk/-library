import style from './title.module.scss';

export const Title = ({ textTitle, countTitle = '' }) => (
   <div className={style.wrapperTitle}>
      <h2 className={style.title}>{textTitle}</h2>
      <span className={style.countTitle}>
         {countTitle}
      </span>
   </div>
)