import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserLogin, UserSignup, Userlist, UserEditrole } from "./Components/Users";
import { Header, Footer } from "./Layout";
import { Home, Notfound, About, Service, Contact } from "./Components/Pages";
import { Dashboard } from './Components/Dashboard';
import { AddBook } from "./Components/Books";
import ProtectedRoute from './Utility/Auth/protected';
import './App.css';


function App() {  
  return (
    <>  
     <Header />
      <div className="container main">
        <Routes>          
            <Route path='/' element={<React.Suspense  fallback={<>...</>}>
                <Home />
          </React.Suspense>} />
          <Route path='/about' element={<React.Suspense  fallback={<>...</>}>
                <About />
          </React.Suspense>} />
           <Route path='/service' element={<React.Suspense  fallback={<>...</>}>
                <Service />
          </React.Suspense>} />
          <Route path='/contact' element={<React.Suspense  fallback={<>...</>}>
                <Contact />
            </React.Suspense>} />
           <Route path='/register' element={<React.Suspense  fallback={<>...</>}>
                <UserSignup />
            </React.Suspense>} />
            <Route path='/login' element={<React.Suspense  fallback={<>...</>}>
                <UserLogin />
            </React.Suspense>} />
          <Route exact path="/dashboard"  element={<ProtectedRoute comp={Dashboard}  />} >
             <Route  path='list' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={Userlist}  />
            </React.Suspense>} />
             <Route path='/dashboard/addbook' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={AddBook} />
            </React.Suspense>} />
             <Route path='/dashboard/editrole' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={UserEditrole} />
            </React.Suspense>} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
       </div> 
     <Footer />
    </>
  );
}

export default App;
