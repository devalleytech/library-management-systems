import React from "react";
import { Routes, Route } from "react-router-dom";
import { UserLogin, UserSignup, Userlist, UserEditrole } from "./Components/Users";
import { Header, Footer } from "./Layout";
import { Home, Notfound, About, Service, Contact } from "./Components/Pages";
import { Dashboard } from './Components/Dashboard';
import { AddBook, BookList,BookEdit, userPenaltyList, BorrowBookForm,BorrowedBookList, UserBorrowedBookList, ReturnBorrowBookForm } from "./Components/Books";
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
             <Route path='users-list' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={Userlist}  />
            </React.Suspense>} />
             <Route path='addbook' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={AddBook} />
            </React.Suspense>} />

            <Route path='books-list' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={BookList} />
            </React.Suspense>} />

               <Route path='edit-book' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={BookEdit} />
            </React.Suspense>} />

            <Route path='borrow-book' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={BorrowBookForm} />
            </React.Suspense>} />

             <Route path='borrow-book-list' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={BorrowedBookList} />
            </React.Suspense>} />

            <Route path='users-borrow-book-list' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={UserBorrowedBookList} />
             
             </React.Suspense>} />

            <Route path='users-penalty-list' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={userPenaltyList} />
          </React.Suspense>} />    
                      
                      

            <Route path='return-borrow-book-request' element={<React.Suspense  fallback={<>...</>}>
                <ProtectedRoute comp={ReturnBorrowBookForm} />
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
