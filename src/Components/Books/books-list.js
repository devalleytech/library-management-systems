import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaPlusSquare } from "react-icons/fa";
import "./books.css";
import 'react-toastify/dist/ReactToastify.css';
import { getBook } from '../../Utility/Services/BookService';

const BookList = () => {

    const [storeBookValues, setStoreBookValues] = useState([]);
    const [searchBook, setSearchBook] = useState("");
    

    const handleSearchChange = value => {;
        setSearchBook(value);
        filterBookData(value);
   };

   const filterBookData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "")  {
      getAllBooks();
    }
    else {
      const filteredData = storeBookValues.filter(item => {
        return Object.keys(item).some(key =>
           item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setStoreBookValues(filteredData);
    }
  }

  const getAllBooks = () => {
    getBook().then(result => setStoreBookValues(result));
  }

  useEffect(()=>{
    getAllBooks();
  }, []);

    return (
        <>
       <div className="row d-flex">
        <div className="jumbotron text-center py-2">
            <h1>Book List <Link to="/dashboard/addbook" className="iconplus"><FaPlusSquare size={30} color="#333b7d" /></Link></h1>
       </div>
         <div className="container py-4">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-10 card">
                <div className="row mt-2 py-2 px-4">
                <div className="form-group col-md-4 mt-2 mb-4">
                    <input type="text"
                    className="form-control searchUsers"
                    onChange={e => handleSearchChange(e.target.value)}
                    id="searchUsers"
                    placeholder="Search Book"
                    value={searchBook} 
                    />
                </div>
               <table className="table bg-light table-striped table-responsive w-100">         
                <thead className="thead-dark">
               <tr>
                    <th>SR #</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Book status</th>       
                    <th scope="col">Created At</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {storeBookValues && storeBookValues.map((res, index) => {
                    return (<tr>
                       <td>{index+1}</td>
                      <td>{res.title}</td>
                      <td>{res.publisher}</td>
                      <td>{res.quantity}</td>
                      <td>{res.book_status}</td>
                      <td>{res.createdAt}</td>
                      <td><button style={{border:'none'}}><FaEdit size={22} /></button></td>
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

export default BookList;
