export default function validateLogin(values) {
  let errors = {};

  // Email errors
  if (!values.email) {
    errors.email = "An Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your email is invalid.";
  }

  // Password errors
  if (!values.password) {
    errors.password = "A Password is required.";
  } else if (values.password.length < 6) {
    errors.password = "Password length must be above 6 characters.";
  }

  return errors;
}
