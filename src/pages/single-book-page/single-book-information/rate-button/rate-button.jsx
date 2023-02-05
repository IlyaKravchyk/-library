import style from './rate-button.module.scss';

export const RateButton = () => (
   <div className={style.buttonWrapper}>
      <button type='submit' className={style.rateButton}>
         оценить книгу
      </button>
   </div>
)