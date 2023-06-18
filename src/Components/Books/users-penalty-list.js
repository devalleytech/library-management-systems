import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "./books.css";
import { useUserInfoContext } from "../../Utility/ContextApi/user-context";

const UserPenaltyList = () => {

    const { getUser } = useUserInfoContext();
    const [userPenalty, setuserPenalty] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3133/notification')
        .then(response => response.json()) 
          .then(data => {
            const pennaltyUser = data.filter(res => res.userId === getUser.id);
            console.log(pennaltyUser);
            setuserPenalty(pennaltyUser);
        })
        .catch(error => console.error(error));
  }, []);



    return (
     <>
       <div className="row d-flex">
        <div className="jumbotron text-center py-2">
            <Link  className="iconplus"><h1>User Penalty List
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
                    <th scope="col">Book Title</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Message</th>
                    <th scope="col" >Penalty Amount</th>
                    {/* <th scope="col">Action</th>   */}
                  </tr>
                </thead>
                <tbody>
                  {userPenalty && userPenalty.map((res, index) => {
                    return (<tr>
                      <td>{index + 1}</td>
                      <td>{res.bookTitle}</td>
                      <td>{res.userName}</td>
                      <td style={{color:'green'}}>{res.returnMessage}</td>
                      <td style={{ color: '#fa3a00' }}>{res.penalty}</td>
                      
                      
                      {/* <td >fdfdsf</td> */}
                     
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

export default UserPenaltyList;
