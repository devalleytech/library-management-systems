import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from "react-router-dom";
import { UserInfoContextProvider } from './Components/Users/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <UserInfoContextProvider>
           <BrowserRouter>
             <App />
         </BrowserRouter>
      </UserInfoContextProvider>
   
  </React.StrictMode>
);
