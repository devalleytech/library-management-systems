import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserInfoContext } from "../../Utility/ContextApi/user-context";
import { postBorrowedbook } from '../../Utility/Services/BorrowBookService';
import { updateBook } from '../../Utility/Services/BookService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import "./books.css";


const BorrowBookForm = () => {

    const { state } = useLocation();
    const navigate = useNavigate();
    const { getUser } = useUserInfoContext();
    const bookBorrowenddate = {
        browwenddate: null,
    };
     const borrowbookValudation = Yup.object({
         browwenddate: Yup.string().required('Start Borrowed Book date Required')
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
                <Link className="iconplus"><h1>Borrow Book</h1></Link>
        </div>
        <div className="row py-4 px-4 card h-100 d-flex align-items-center justify-content-center">
         <Formik
                  initialValues={bookBorrowenddate}
                  validationSchema = {borrowbookValudation}
                        onSubmit={(values, { setSubmitting }) => {
                       setTimeout(() => {
                         if (state.quantity > 0) {
                            state.quantity -= 1;
                            updateBook(state, state.id).then(res => {
                            console.log(res, "res");
                            const bookInitialValue = {userId:getUser.id, bookId: res.data.id, userName: getUser.fname, title:res.data.title, browwenddate:  values.browwenddate, createdAt: (new Date()).toISOString().split('T')[0]};
                            postBorrowedbook(bookInitialValue).then((result) => {
                               toast.success('Book Borrowed Successfully!');
                            setTimeout(() => {
                                navigate("/dashboard/books-list");
                            }, 2000);
                            }).catch(e => {
                                console.log(e);
                                });
                            });
                       }
                    setSubmitting(false);
                    }, 400);
                        }}
                    >
                   <Form>
                 {/* <div className="col-md-6  py-4 ">
                                 
                    <div className="form-outline">
                    <label htmlFor="browwstartdate" className="form-label">Borrow Start Date *</label>
                      <Field name="browwstartdate" type="date" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1" name="browwstartdate" />
                    </div>
                  </div> */}
                            
                  <div className="col-md-6 py-4 ">
                    <div className="form-outline">
                    <label htmlFor="browwenddate" className="form-label">Borrow End Date *</label>
                      <Field name="browwenddate" type="date" className="form-control" />
                        <ErrorMessage component="span" className="alert alert-danger py-1" name="browwenddate" />
                    </div>
                    </div>


                  <div className="col-md-6 mt-4 form-outline flex-fill w-100 mt-4 buttonClass">
                      <button type="submit"  className="btn-large px-4">
                      Submit
                    </button> &nbsp;
                    <button type="reset"  className="btn-large px-4">
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

export default BorrowBookForm;