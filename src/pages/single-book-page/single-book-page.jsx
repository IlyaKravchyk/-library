import { useParams } from 'react-router-dom';
import { booksData } from '../../json-data/books-data';
import { menuData } from '../../json-data/menu-data';
import { BreadCrumbs } from './bread-crumbs/bread-crumbs';
import { SingleBookCard } from './single-book-card/single-book-card';
import { SingleBookInformation } from './single-book-information/single-book-information';
import { commentsData } from '../../json-data/comments-data';

export const SingleBookPage = () => {

   const { category, bookId } = useParams()

   const dataSingleBook = booksData.find(item => +item.id === +bookId)
   const categoryRuLang = menuData.find(item => item.url === category);

   const { book, description, author, raiting, reservation, busy, comments } = dataSingleBook

   return (
      <main className='main'>
         <BreadCrumbs
            category={categoryRuLang.category}
            description={description}
         />
         <div className='container'>
            <SingleBookCard
               imageBook={book}
               description={description}
               author={author}
               reservation={reservation}
               busy={busy}
            />
            <SingleBookInformation
               raiting={raiting}
               comments={comments}
               commentsData={commentsData}
            />
         </div>
      </main>
   )
}