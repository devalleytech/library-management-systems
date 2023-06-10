
const BookFormValidation = (values) => {

  let errors = {};
   if (!values.author) {
     errors.author = "Author is required";
   }
   if (!values.title) {
     errors.title = "Title is required";
  }
  if (!values.subtitle) {
     errors.subtitle = "Subtitle is required";
  } 
  if (!values.quantity) {
    errors.quantity = "Quantity is required";
   } 
   if (!values.language) {
    errors.language = "Language is required";
  } 
  if (!values.publication_date) {
     errors.publication_date = "Publication date is required";
   }
   
   if (!values.publication_place) {
     errors.publication_place = "Publication place is required";
   }
   
    if (!values.image) {
     errors.image = "Image is required";
   }
   
    if (!values.publisher) {
     errors.publisher = "Publisher is required";
   }
   
    if (!values.book_status) {
     errors.book_status = "Book status is required";
   }
   
  if (!values.description) {
     errors.description = "Description is required";
   }
   
   if (!values.price) {
     errors.price = "Price is required";
  }
  return errors;
};



export default BookFormValidation;