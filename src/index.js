import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/layout';

import { MainLayout } from './components/main-layout/main-layout';
import { AllBooksPage } from './pages/all-books-page/all-books-page';
import { Terms } from './pages/terms/terms';

import './index.css';
import { SingleBookPage } from './pages/single-book-page/single-book-page';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <HashRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route path='/' element={<MainLayout />}>
                  <Route path='/' element={<Navigate to="/books/all" />} />
                  <Route path='books/:category' element={<AllBooksPage />} />
                  <Route path='terms' element={<Terms title='Правила пользования' />} />
                  <Route path='contract' element={<Terms title='Договор оферты' />} />
               </Route>
               <Route path='books/:category/:bookId' element={<SingleBookPage />} />
            </Route>
         </Routes>
      </HashRouter>
   </React.StrictMode>
);
