import { lazy } from 'react';


const AddBook = lazy(() => import('./add-book'));
const BookList = lazy(() => import('./books-list'));
const BookEdit= lazy(() => import('./edit-book'));
export { AddBook, BookList, BookEdit };