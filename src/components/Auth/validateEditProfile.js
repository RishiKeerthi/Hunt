export default function validateEditProfile(values) {
  let errors = {};

  // Name errors
  if (!values.name) {
    errors.name = "A username is required.";
  }

  // Email errors
  if (!values.email) {
    errors.email = "An Email is required.";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Your email is invalid.";
  }

  // Cueernt Password errors
  if (!values.currentPassword) {
    errors.currentPassword = "Your Current Password is required.";
  } else if (values.currentPassword.length < 6) {
    errors.currentPassword =
      "Current Password length must be above 6 characters.";
  }

  // New Password errors
  if (values.newPassword.length < 6) {
    errors.newPassword = "New Password length must be above 6 characters.";
  }

  return errors;
}
