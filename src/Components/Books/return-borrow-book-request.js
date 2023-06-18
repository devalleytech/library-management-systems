import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserInfoContext } from "../../Utility/ContextApi/user-context";
import { postNotification } from '../../Utility/Services/NotificationService';
import { updateBook } from '../../Utility/Services/BookService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import "./books.css";


const ReturnBorrowBookForm = () => {

  const { state } = useLocation();
  const navigate = useNavigate();
  const { getUser } = useUserInfoContext();
  const requestBook = {
    returnMessage: null,
    penalty:null
  };
     const requestBookValudation = Yup.object({
       returnMessage: Yup.string().required('Please return book!'),
       penalty: Yup.string().required('Add penalty'),
  });

return (
 <>
   <div className=" py-4 px-4">
        <ToastContainer
          position="top-center"
          theme="light"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={true}
          style={{ width: '500px' }}
      />
        <div className="jumbotron text-center py-4  py-4 px-4">
                <Link className="iconplus"><h1>Request Borrow Book</h1></Link>
        </div>
        <div className="row py-4 px-4 card h-100 d-flex align-items-center justify-content-center">
         <Formik
                  initialValues={requestBook}
                  validationSchema = {requestBookValudation}
                  onSubmit={(values, { setSubmitting }) => { 
                setTimeout(() => {
                  const combineObj = { ...state, ...values };
                  console.log(combineObj, "combineObj");
                            postNotification(combineObj).then((result) => {
                               toast.success('User notification sent Successfully!');
                            setTimeout(() => {
                                navigate("/dashboard/users-borrow-book-list");
                            }, 2000);
                            }).catch(e => {
                                console.log(e);
                                });
                    setSubmitting(false);
                    }, 400);
                        }}
                    >
                   <Form className="mx-1 mx-md-6">
                  <div className="col-md-6 py-4 ">
                    <div className="form-outline">
                    <label htmlFor="returnMessage" className="form-label">Request Borrow Book *</label>
                      <Field  name="returnMessage" type="text" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1" name="returnMessage" />
                    </div>
                 </div>
                 <div className="col-md-6">
                    <div className="form-outline">
                    <label htmlFor="penalty" className="form-label">Penalty*</label>
                      <Field  name="penalty" type="number" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1" name="penalty" />
                    </div>
                    </div>
                  <div className="col-md-6 mt-4 form-outline flex-fill w-100 mt-4 buttonClass">
                      <button type="submit"  className="btn-large px-4">
                      Submit
                    </button> &nbsp;
                    <button type="reset" className="btn-large px-4">
                      Reset
                    </button>
                  </div>

            
                </Form>
              </Formik>
               

          <p className="col-sm-10 mx-4 py-4 mb-4 p-4"></p>
          </div> 
       </div>
       

      </>
    )
   
}

export default ReturnBorrowBookForm;