import { lazy } from 'react';

const Home = lazy(() => import('./home'));
const Notfound = lazy(() => import('./notfound'));
const About = lazy(() => import('./about'));
const Service = lazy(() => import('./service'));
const Contact = lazy(() => import('./contact'));

export { Home, Notfound, About, Service, Contact };