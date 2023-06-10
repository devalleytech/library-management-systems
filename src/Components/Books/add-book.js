import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./books.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  BookFormValidation  from '../../Utility/Validations/book-validation';



const AddBook = () => {

  const navigate = useNavigate();

  const initialbookFormState = {
    id: null,
    author: "",
    title: "",
    subtitle: "",
    quantity: "",
    language: "",
    publication_date: "",
    publisher: "",
    publication_place: "",
    image: "",
    book_status:"",
    description: "",
    price: "",
    createdAt: new Date().toString('dd/mm/yy').split(',')[0].slice(0,15),
  };

  const [bookForm, setbookForm] = useState(initialbookFormState);
  const [errors, setErrors] = useState({});

  const handleOnInputChange = (event) => {
       const { name, value } = event.target;
       setbookForm({ ...bookForm, [name]: value });
  };

  const navigateToHome = () => {
    setbookForm(initialbookFormState);
    setErrors({});
  }

 

  const handleOnFormSubmit =  async (event) => {
    event.preventDefault();
    setErrors(BookFormValidation(bookForm));
    if (
      !bookForm.author ||
      !bookForm.title ||
      !bookForm.subtitle ||
      !bookForm.quantity ||
      !bookForm.language ||
      !bookForm.publication_date ||
      !bookForm.publisher ||
      !bookForm.image ||
      !bookForm.publication_place ||
      !bookForm.book_status ||
      !bookForm.description ||
      !bookForm.price
    )
     return;
    {

      fetch('http://localhost:3030/book', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookForm)
          }).then((result) => {
            setbookForm(initialbookFormState);
            setErrors({});
            toast.success('Bookn have been done added Successfully!');
            setTimeout(() => {
              navigate("/list");
            }, 4000);
          }).catch(e => {
            console.log(e);
          });
      }
  };



   
  return (
    <div className="row d-flex">
      <ToastContainer
          position="top-center"
          theme="light"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={true}
          style={{ width: '500px' }}
      />
        <div className="jumbotron text-center py-2">
            <Link><h1>Add Book</h1></Link>
      </div>
      

         <div className="container py-4">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-10 card">
               <div className="row mt-2 py-2 px-4">
                   <form className="mx-1 mt-4 mx-md-6" onSubmit={handleOnFormSubmit}>
                  <div className="row d-flex flex-row mb-4">
                    <div className="form-outline flex-fill w-50 col-md-3">
                      <label className="form-label" htmlFor="fname">
                        Author *
                      </label>
                      <input
                        type="text"
                        name="author"
                        value={bookForm.author}
                        onChange={handleOnInputChange}
                        id="author"
                        className="form-control"
                      />
                      {errors.author && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.author}
                        </div>
                      )}
                    </div>
                    <div className="form-outline flex-fill w-50 col-md-3">
                      <label className="form-label" htmlFor="title">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={bookForm.title}
                        onChange={handleOnInputChange}
                        id="title"
                        className="form-control"
                      />
                      {errors.title && (
                        <div className="alert alert-danger  py-1" role="alert">
                          {errors.title}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row d-flex flex-row d-flex flex-row  mb-4">
                    <div className="form-outline flex-fill  w-50 col-md-3">
                      <label className="form-label" htmlFor="subtitle">
                        Subtitle *
                      </label>
                      <input
                        type="text"
                        name="subtitle"
                        value={bookForm.subtitle}
                        onChange={handleOnInputChange}
                        id="subtitle"
                        className="form-control"
                      />
                      {errors.subtitle && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.subtitle}
                        </div>
                      )}
                    </div>
                    <div className="form-outline  w-50 col-md-3 flex-fill">
                      <label className="form-label" htmlFor="quantity">
                        Quantity *
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={bookForm.quantity}
                        onChange={handleOnInputChange}
                        id="quantity"
                        className="form-control"
                      />
                      {errors.quantity && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.quantity}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row d-flex flex-row d-flex flex-row  mb-4">
                    <div className="form-outline flex-fill  w-50 col-md-3">
                      <label className="form-label" htmlFor="language">
                        Language *
                      </label>
                      <input
                        type="text"
                        name="subtitle"
                        value={bookForm.language}
                        onChange={handleOnInputChange}
                        id="language"
                        className="form-control"
                      />
                      {errors.language && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.language}
                        </div>
                      )}
                    </div>
                    <div className="form-outline flex-fill  w-50 col-md-3">
                      <label className="form-label" htmlFor="publication_date">
                        Publication Date *
                      </label>
                      <input
                        type="text"
                        name="publication_date"
                        value={bookForm.publication_date}
                        onChange={handleOnInputChange}
                        id="publication_date"
                        className="form-control"
                      />
                      {errors.publication_date && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.publication_date}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row d-flex flex-row d-flex flex-row  mb-4">
                    <div className="form-outline flex-fill  w-50 col-md-3">
                      <label className="form-label" htmlFor="publisher">
                        Publisher *
                      </label>
                      <input
                        type="text"
                        name="subtitle"
                        value={bookForm.publisher}
                        onChange={handleOnInputChange}
                        id="publisher"
                        className="form-control"
                      />
                      {errors.publisher && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.publisher}
                        </div>
                      )}
                    </div>
                    <div className="form-outline flex-fill  w-50 col-md-3">
                      <label className="form-label" htmlFor="image">
                        Image *
                      </label>
                      <input
                        type="text"
                        name="image"
                        value={bookForm.image}
                        onChange={handleOnInputChange}
                        id="image"
                        className="form-control"
                      />
                      {errors.image && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.image}
                        </div>
                      )}
                    </div>
                  </div>


                  <div className="row d-flex flex-row d-flex flex-row  mb-4">
                    <div className="form-outline flex-fill  w-50 col-md-3">
                      <label className="form-label" htmlFor="publication_place">
                        Publication Place *
                      </label>
                      <input
                        type="text"
                        name="publication_place"
                        value={bookForm.publication_place}
                        onChange={handleOnInputChange}
                        id="publication_place"
                        className="form-control"
                      />
                      {errors.publication_place && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.publication_place}
                        </div>
                      )}
                    </div>
                    <div className="form-outline flex-fill  w-50 col-md-3">
                      <label className="form-label" htmlFor="book status">
                        Book status *
                      </label>
                      <input
                        type="text"
                        name="book_status"
                        value={bookForm.book_status}
                        onChange={handleOnInputChange}
                        id="book_status"
                        className="form-control"
                      />
                      {errors.book_status && (
                        <div className="alert alert-danger py-1" role="alert">
                          {errors.book_status}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="row d-flex flex-row d-flex flex-row  mb-4">
                    <div className="form-outline flex-fill  w-50 col-md-3">
                      <label className="form-label" htmlFor="description">
                        Description *  
                      </label>
                      <input
                        type="text"
                        value={bookForm.description}
                        name="description"
                        onChange={handleOnInputChange}
                        id="description"
                        className="form-control"
                      />
                      {errors.description && (
                        <div className="alert alert-danger  py-1" role="alert">
                          {errors.description}
                        </div>
                      )}
                </div>
                  <div className="form-outline flex-fill  w-50 col-md-3">
                      <label className="form-label" htmlFor="price">
                        Price
                      </label>
                      <select
                        className="form-select"
                        name="price"
                        aria-label="price"
                        onChange={handleOnInputChange}
                      >
                        <option defaultValue={"Member"}>Member</option>
                        <option value={"Librarian"}>Librarian</option>
                      </select>
                    </div>
                  </div>

                  <div className="row d-flex flex-row d-flex flex-row  mb-4">
                    <div className="form-outline flex-fill  w-50 mt-4 col-md-3 buttonClass">
                      <button type="submit" className="w-100">
                      Submit
                    </button>
                </div>
                <div className="form-outline flex-fill w-50 mt-4 col-md-3 buttonClass">
                      <button type="button" className="w-100" onClick={() => navigateToHome()}>
                      Reset
                    </button>
                    </div>
                </div>
            </form>
            </div>
             <p className="col-sm-10 mx-2 py-2"></p>
              </div>
        </div>
          <p className="col-sm-10 mx-4 py-4 mb-4 p-4"></p>
          </div>


    </div>
  );
};

export default AddBook;
