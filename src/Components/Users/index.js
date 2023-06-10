import { lazy } from 'react';

const Userlist = lazy(() => import('../Users/List'));
const UserLogin = lazy(() => import('../Users/SignIn'));
const UserSignup = lazy(() => import('../Users/SignUp'));
const UserEditrole = lazy(() => import('../Users/Editrole'));

export { UserSignup, UserLogin, Userlist, UserEditrole };