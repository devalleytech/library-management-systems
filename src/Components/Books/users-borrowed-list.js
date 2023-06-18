import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { getBorrowedBook } from '../../Utility/Services/BorrowBookService';
import "./books.css";
import { useUserInfoContext } from "../../Utility/ContextApi/user-context";

const UserBorrowedBookList = () => {

   const navigate = useNavigate();
   const { getUser } = useUserInfoContext();
    const [storeUserBookValues, setstoreUserBookValues] = useState([]);


  const getAllgetBorrowedBooks = () => {
    getBorrowedBook().then(result => {
      console.log(result);
      // const borroerUser = result.filter(res => res.userId === getUser.id);
      setstoreUserBookValues(result)
    })
  }
  useEffect(()=>{
    getAllgetBorrowedBooks();
  }, []);

  const returningRequest = (userId, userName) => {
    const userObj = { userId, userName };
    navigate("/dashboard/return-borrow-book-request", {state:userObj});
  }

    return (
     <>
       <div className="row d-flex">
        <div className="jumbotron text-center py-2">
            <Link  className="iconplus"><h1>Users Borrowed Book List
            </h1></Link>
       </div>
         <div className="container py-4">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-10 card">
                <div className="row mt-2 py-2 px-4">
                
               <table className="table bg-light table-striped table-responsive w-100">         
                <thead className="thead-dark">
               <tr>
                    <th>SR #</th>
                    <th scope="col">Title</th>
                    <th scope="col">Borrowed Start Date</th>
                    <th scope="col">Borrowed End Date</th>
                     <th scope="col">User Name</th>
                        <th scope="col">Action</th>  
                  </tr>
                </thead>
                <tbody>
                  {storeUserBookValues && storeUserBookValues.map((res, index) => {
                    return (<tr>
                       <td>{index+1}</td>
                      <td>{res.title}</td>
                      <td>{res.createdAt}</td>
                      <td>{res.browwenddate}</td>
                      <td>{res.userName}</td>
                       <td><button className="btn btn-secondary btn-sm" onClick={()=> returningRequest(res.userId, res.userName)}>Return Request</button></td>
                  </tr>)
                    })
                  }
                 </tbody>
              </table>
              </div>
              </div>
        </div>
          <p className="col-sm-10 mx-4 py-4 mb-4 p-4"></p>
          </div>
    </div>
      </>
   
  );
};

export default UserBorrowedBookList;
