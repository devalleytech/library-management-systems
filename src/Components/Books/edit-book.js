import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import "./books.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postBook, getBook, updateBook } from '../../Utility/Services/BookService';
import { FaRegListAlt } from "react-icons/fa";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const intialBook = {
  title: "",
  subtitle: "",
  quantity: "",
  language: "",
  publication_date: "",
  publisher: "",
  publication_place: "",
  book_status: "",
  description: "",
  price: "",
  createdAt: new Date().toString('dd/mm/yy').split(',')[0].slice(0, 15),
};

const validationRule = Yup.object({
  title: Yup.string().max(20, 'Must be 20 characters or less').required('Title Required'),
  subtitle: Yup.string().max(20, 'Must be 20 characters or less').required('Subtitle Required'),
  quantity: Yup.string().required('Quantity Required'),
  language: Yup.string().required('Quantity Required'),
  publication_date: Yup.string().required('Publication date Required'),
  publisher: Yup.string().required('Publisher Required'),
  publication_place: Yup.string().required('Publication place Required'),
  book_status: Yup.string().required('Book Status Required'),
  description: Yup.string().required('Description Required'),
  price: Yup.string().required('Price Required'),
});

const EditBook = () => {

  const navigate = useNavigate();
  const { state } = useLocation();
  const [formValues, setformValues] = useState(state);


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
          <h1>Edit Book <Link to="/dashboard/books-list" className="iconplus">
          <FaRegListAlt size={30} color="#333b7d" /></Link></h1>
       </div>
         <div className="container py-4">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-sm-8 col-md-8 card">
          <div className="row mt-4 py-4 px-4">
           <Formik
                initialValues={formValues || intialBook}
                validationSchema={validationRule}
                enableReinitialize
                onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                    updateBook(values, formValues.id).then((result) => {
                              toast.success('Book Updated Successfully!');
                              setTimeout(() => {
                                navigate("/dashboard/books-list");
                              }, 4000);
                          }).catch(e => {
                        console.log(e);
                      });
                    setSubmitting(false);
                  }, 400);
                }}
              >
             <Form className="mx-1 mx-md-6">
                  <div className="d-flex flex-row align-items-center">
                    <div className="form-outline flex-fill ">
                    <label htmlFor="title" className="form-label">Title *</label>
                      <Field name="title" type="text" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1" name="title" />
                    </div>
                    
                  </div>
                  <div className="d-flex flex-row align-items-center py-3">
                      <div className="form-outline flex-fill">
                    <label htmlFor="subtitle" className="form-label">Subtitle *</label>
                      <Field name="subtitle" type="text" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1"  name="subtitle" />
                   </div>
                    </div>
                    <div className="d-flex flex-row align-items-center py-3">
                      <div className="form-outline flex-fill">
                      <label htmlFor="quantity" className="form-label">Quantity *</label>
                        <Field name="quantity" type="text" className="form-control" />
                          <ErrorMessage component="span" className="alert alert-danger py-1"  name="quantity" />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center py-3">
                    <div className="form-outline flex-fill">
                    <label htmlFor="language" className="form-label">Language *</label>
                      <Field name="language" type="text" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1" name="language" />
                   </div>
                  </div>
                  <div className="d-flex flex-row align-items-center py-3">
                    <div className="form-outline flex-fill">
                    <label htmlFor="publication_date" className="form-label">Publication date *</label>
                    <Field name="publication_date" type="date" className="form-control" />
                        <ErrorMessage name="publication_date" component="span" className="alert alert-danger py-1" />
                   </div>
                  </div>

                  <div className="d-flex flex-row align-items-center py-3">
                    <div className="form-outline flex-fill">
                    <label htmlFor="publication_place" className="form-label">Publication place *</label>
                    <Field name="publication_place" type="text" className="form-control" />
                        <ErrorMessage name="publication_place" component="span" className="alert alert-danger py-1" />
                   </div>
                  </div>
                  
                  <div className="d-flex flex-row align-items-center py-3">
                    <div className="form-outline flex-fill">
                    <label htmlFor="publisher" className="form-label">Publisher *</label>
                    <Field name="publisher" type="text" className="form-control" />
                        <ErrorMessage name="publisher" component="span" className="alert alert-danger py-1" />
                   </div>
                  </div>
                  
                  <div className="d-flex flex-row align-items-center py-3">
                    <div className="form-outline flex-fill">
                    <label htmlFor="book_status" className="form-label">Book status *</label>
                    <Field name="book_status" type="text" className="form-control" />
                        <ErrorMessage name="book_status" component="span" className="alert alert-danger py-1" />
                   </div>
                  </div>
                  
                  <div className="d-flex flex-row align-items-center py-3">
                    <div className="form-outline flex-fill">
                    <label htmlFor="description" className="form-label">Description *</label>
                    <Field name="description" type="text" className="form-control" />
                        <ErrorMessage name="description" component="span" className="alert alert-danger py-1" />
                   </div>
                  </div>
                
                   <div className="d-flex flex-row align-items-center py-3">
                    <div className="form-outline flex-fill">
                    <label htmlFor="price" className="form-label">Price *</label>
                    <Field name="price" type="text" className="form-control" />
                        <ErrorMessage name="price" component="span" className="alert alert-danger py-1" />
                   </div>
                    </div>
                    
                  <div className="row d-flex flex-row d-flex flex-row mb-4 mt-2">
                    <div className="form-outline flex-fill  w-50 mt-4 col-md-3 buttonClass">
                      <button type="submit" className="w-100">
                      Update
                    </button>
                  </div>
                   <div className="form-outline flex-fill w-50 mt-4 col-md-3 buttonClass">
                      <button type="reset" className="w-100">
                      Reset
                    </button>
                    </div>
                </div>
                </Form>
             </Formik>
            </div>
              </div>
        </div>
          <p className="col-sm-10 mx-4 py-4 mb-4 p-4"></p>
          </div>
    </div>
  );
};

export default EditBook;
