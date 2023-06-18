import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaPlusSquare, FaSearch, FaRegUserCircle } from "react-icons/fa";
import { useUserInfoContext } from "../../Utility/ContextApi/user-context";
import Modal from 'react-modal';
import './dashboard.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:'50%'
  },
};

const Dashboard = () => {

  const location = useLocation();
  const { getUser } = useUserInfoContext();
  const checkForoutlet = location.pathname;

  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);
  const [borrowedbooks, setBorrowedbooks] = useState([]);
  const [usersborrowedbooks, setUsersborrowedbooks] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
 
  useEffect(() => {
      
        fetch('http://localhost:3030/user')
        .then(response => response.json()) 
        .then(data => {
          setUsers(data);
        })
        .catch(error => console.error(error));
    }, []);
  
    useEffect(() => {
        fetch('http://localhost:3131/book')
        .then(response => response.json()) 
        .then(data => {
          setBooks(data);
        })
        .catch(error => console.error(error));
    }, []);
  
  useEffect(() => {
        fetch('http://localhost:3132/borrowedBook')
        .then(response => response.json()) 
          .then(data => {
          const borroerUser = data.filter(res => res.userId === getUser.id);
          setBorrowedbooks(borroerUser);
        })
        .catch(error => console.error(error));
  }, []);
  

   useEffect(() => {
        fetch('http://localhost:3132/borrowedBook')
        .then(response => response.json()) 
          .then(data => {
          setUsersborrowedbooks(data);
        })
        .catch(error => console.error(error));
    }, []);
  
  
    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    return (
      <>
       
         {(checkForoutlet === "/dashboard") && <div className="mb-4">
            <div className="jumbotron text-center py-4 mb-4 mt-4">
            <h1 className="userInfo">Welcome</h1><span className="username">{getUser?.fname+" "+getUser?.lname}</span>
        </div>
      
       <div className="card card-body mt-4">  
          <div className="row col-centered px-4">
            <div className="col">
              <div className="title">
                  <Link onClick={openModal}><h3>Profile</h3></Link>
                  <span className="px-2"><FaRegUserCircle size={22} color="#333b7d" /></span>
              </div>
            </div>
              {getUser.role === "Librarian" && <div className="col ">
                <div className="title">
                  <Link to="/dashboard/users-list"><h3>Users</h3></Link>
                  <span className="badge bg-primary badge-pill">{users && users.length}</span>
                </div>
              </div>}
            <div className="col ">
              <div className="title">
                    <Link to="/dashboard/books-list"><h3>Books</h3></Link>
                    <span className="badge bg-primary badge-pill">{books && books.length}</span>
                </div>
            </div>
              {getUser.role === "Member" && <div className="col ">
                <div className="title">
                  <Link to="/dashboard/borrow-book-list"><h3>Borrowed Books</h3></Link>
                  <span className="badge bg-primary badge-pill">{borrowedbooks && borrowedbooks.length}</span>
                </div>
              </div>}
          </div>
          <div className="row mt-4 pt-4 px-4">
              {getUser.role === "Librarian" && <div className="col ">
                <div className="title">
                  <Link to="/dashboard/addbook"><h3>Add Book</h3></Link>
                  <span className="px-2"><FaPlusSquare size={25} color="#333b7d" /></span>
                </div>
              </div>}
            <div className="col ">
               <div className="title">
                  <Link to="/dashboard/books-list"><h3>Search Book</h3></Link>
                  <span className="px-2"><FaSearch size={25} color="#333b7d" /></span>
                </div>
            </div>
             {getUser.role === "Librarian" && <div className="col">
                <div className="title">
                    <Link to="/dashboard/users-borrow-book-list"><h3>Users Borrowed Books</h3></Link>
                    <span className="badge bg-primary badge-pill">{usersborrowedbooks && usersborrowedbooks.length}</span>
                </div> 
            </div>}
           
          </div>
          </div>
          </div>}

        {/* {(checkForoutlet==="/dashboard") && <div className="py-2 mt-2">
          <div className="jumbotron text-center py-2 mt-4">
            <h1 className="userInfo">Welcome</h1><span className="username">{getUser?.fname+" "+getUser?.lname}</span>
          </div>
          <div className="container py-4 mt-4">
             <p className="col-sm-10 mx-4 py-2 mb-2 p-4"></p> 
            <div className="row">
              <div className="col-sm-3 col-md-3">
                  <div className="title">
                  <Link onClick={openModal}><h3>Profile</h3></Link>
                  <span className="px-2"><FaRegUserCircle size={22} color="#333b7d" /></span>
                </div>
              </div>
              {getUser.role === "Librarian" && <div className="col-sm-3 col-md-3">
                <div className="title">
                  <Link to="/dashboard/users-list"><h3>Users</h3></Link>
                  <span className="badge bg-primary badge-pill">{users && users.length}</span>
                </div>
              </div>}
              <div className="col-sm-3 col-md-3">
                  <div className="title">
                    <Link to="/dashboard/books-list"><h3>Books</h3></Link>
                    <span className="badge bg-primary badge-pill">{books && books.length}</span>
                </div>
              </div>
              <div className="col-sm-3 col-md-3">
                  <div className="title">
                    <Link to="/dashboard/borrow-book-list"><h3>Borrowed Books</h3></Link>
                    <span className="badge bg-primary badge-pill">{books && books.length}</span>
                </div>
              </div>

              <div className="col-sm-3 col-md-3">
                  <div className="title">
                    <Link to="/dashboard/users-borrow-book-list"><h3>Users Borrowed Books</h3></Link>
                    <span className="badge bg-primary badge-pill">{books && books.length}</span>
                </div>
              </div>

             
              {getUser.role === "Librarian" && <div className="col-sm-3 col-md-3">
                <div className="title">
                  <Link to="/dashboard/addbook"><h3>Add Book</h3></Link>
                  <span className="px-2"><FaPlusSquare size={25} color="#333b7d" /></span>
                </div>
              </div>}
              
            </div>
            <div className="row mt-4 pt-4">
              <div className="col-sm-3 col-md-3">
                  <div className="title">
                  <Link to="/dashboard/books-list"><h3>Search Book</h3></Link>
                  <span className="px-2"><FaSearch size={25} color="#333b7d" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>} */}

        {(checkForoutlet!=="/dashboard") && <div className="py-4">
             <Outlet /> 
        </div>}

         <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles} contentLabel="User information">
                <div className="table-responsive">  
                <div className="usertitle"><h2>User Profile</h2>
                 <button type="button" class="btn-close" aria-label="Close" onClick={closeModal}></button></div>   
                    <table className="table bgCustom table-responsive w-100 d-block d-md-table">
                    <tbody>
                    <tr>
                        <th>Name</th><td>{getUser?.fname+" "+getUser?.lname}</td>
                    </tr>
                    <tr>
                        <th>Email</th><td>{getUser?.email}</td>
                    </tr>
                    <tr>
                        <th>Phone</th><td>{getUser?.phone}</td>
                    </tr>
                    <tr>
                        <th>Role</th><td>{getUser?.role}</td>
                    </tr>
                    <tr>
                        <th>Created At</th><td>{getUser?.createdAt}</td>
                    </tr>
                    </tbody>
                  </table>
            </div>     
           </Modal>
</>
    )
}
export default Dashboard;