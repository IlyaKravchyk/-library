import style from './button-card.module.scss';

export const ButtonCard = ({ reservation, busy, className }) => {

   const handleClick = (e) => {
      e.stopPropagation()
   }

   const classes = reservation ? `${style.buttonReservation}` :
      busy ? `${style.buttonBusy}` : `${style.buttonDefault} ${style.buttonTile}`;

   return (
      <div className={className}>
         <button type='submit' className={`${style.buttonDefault} + ${classes}`} onClick={handleClick} >
            {reservation ? 'забронирована' : (busy ? `занята до ${busy}` : 'забронировать')}
         </button>
      </div>
   )
}
