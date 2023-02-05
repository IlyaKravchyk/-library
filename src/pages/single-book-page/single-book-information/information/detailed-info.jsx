import style from './detailed-info.module.scss';

export const DetailedInfo = () => (
   <div className={style.wrapper}>
      <h2 className={style.titile}>
         Подробная информация
      </h2>
      <div className={style.items}>
         <div className={style.item}>
            <div className={style.property}>
               <div className={style.keys}>
                  Издательство
               </div>
               <div className={style.values}>
                  Питер
               </div>
            </div>
            <div className={style.property}>
               <div className={style.keys}>
                  Год издания
               </div>
               <div className={style.values}>
                  2019
               </div>
            </div>
            <div className={style.property}>
               <div className={style.keys}>
                  Страниц
               </div>
               <div className={style.values}>
                  288
               </div>
            </div>
            <div className={style.property}>
               <div className={style.keys}>
                  Переплет
               </div>
               <div className={style.values}>
                  Мягкая обложка
               </div>
            </div>
            <div className={style.property}>
               <div className={style.keys}>
                  Формат
               </div>
               <div className={style.values}>
                  70х100
               </div>
            </div>
         </div>
         <div className={style.item}>
            <div className={style.property}>
               <div className={style.keys}>
                  Жанр
               </div>
               <div className={style.values}>
                  Компьютерная литература
               </div>
            </div>
            <div className={style.property}>
               <div className={style.keys}>
                  Вес
               </div>
               <div className={style.values}>
                  370 г
               </div>
            </div>
            <div className={style.property}>
               <div className={style.keys}>
                  ISBN
               </div>
               <div className={style.values}>
                  978-5-4461-0923-4
               </div>
            </div>
            <div className={style.property}>
               <div className={style.keys}>
                  Изготовитель
               </div>
               <div className={style.values}>
                  ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29
               </div>
            </div>
         </div>
      </div>

   </div>
)