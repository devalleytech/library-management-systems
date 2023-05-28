const validateUserForm = (values) => {

  let errors = {};
  let validRegexEmail = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
  let phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

  if (!values.email) {
    errors.email = "email is required";
  } else if (values.email.length < 5) {
    errors.email = "email length should not be less than 5";
  } else if (!values.email.match(validRegexEmail)) {
    errors.email = "Please enter valid email Id";
  }
  if (!values.phone) {
    errors.phone = "phone is required";
  } else if (!values.phone.match(phoneNum)) {
    errors.phone = "Please enter valid phone number";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (!values.password.match(passwordRegExp)) {
    errors.password = "Password must contains atleast- 1 Uppercase, 1 Numeric, 1 Special Charactor, 8 Charactors Long";
  }
  return errors;
};

export default validateUserForm;  