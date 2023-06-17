import { lazy } from 'react';

const AddBook = lazy(() => import('./add-book'));
const BookList = lazy(() => import('./books-list'));
const BookEdit = lazy(() => import('./edit-book'));
const BorrowBookForm = lazy(() => import('./borrowbook-form'));
const BorrowedBookList = lazy(() => import('./books-borrowed-list'));

export { AddBook, BookList, BookEdit, BorrowBookForm, BorrowedBookList };