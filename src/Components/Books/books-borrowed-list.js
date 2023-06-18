import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaPlusSquare, FaRegTrashAlt } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { getBorrowedBook } from '../../Utility/Services/BorrowBookService';
import "./books.css";
import { useUserInfoContext } from "../../Utility/ContextApi/user-context";

const BorrowedBookList = () => {

   const navigate = useNavigate();
   const { getUser } = useUserInfoContext();
    const [storeBookValues, setStoreBookValues] = useState([]);


  const getAllgetBorrowedBooks = () => {
    getBorrowedBook().then(result => {
      console.log(result);
      const borroerUser = result.filter(res => res.userId === getUser.id);
      setStoreBookValues(borroerUser)
    })
  }
  useEffect(()=>{
    getAllgetBorrowedBooks();
  }, []);

    return (
     <>
       <div className="row d-flex">
        <div className="jumbotron text-center py-2">
            <Link  className="iconplus"><h1>Borrowed Book List</h1></Link>
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
                    <th scope="col">Brrowed start Date</th>
                    <th scope="col">Brrowed end Date</th>
                    <th scope="col">User name</th>       
                  </tr>
                </thead>
                <tbody>
                  {storeBookValues.length > 0 && storeBookValues.map((res, index) => {
                    return (<tr>
                      <td>{index+1}</td>
                      <td>{res.title}</td>
                      <td>{res.createdAt}</td>
                      <td>{res.browwenddate}</td>
                      <td>{res.userName}</td>
                  </tr>)
                    })
                      }
                {storeBookValues.length===0 && <tr><td colSpan={5} className="mt-4"><h4 align="center">Sorry no any book borrowed</h4></td></tr>}     
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

export default BorrowedBookList;
