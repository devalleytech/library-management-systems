import { lazy } from 'react';


const AddBook = lazy(() => import('./add-book'));
const BookList = lazy(() => import('./books-list'));
export { AddBook, BookList };