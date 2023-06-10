import { lazy } from 'react';

const Userlist = lazy(() => import('./users-list'));
const UserLogin = lazy(() => import('./sign-in'));
const UserSignup = lazy(() => import('./sign-up'));
const UserEditrole = lazy(() => import('./edit-role'));

export { UserSignup, UserLogin, Userlist, UserEditrole };