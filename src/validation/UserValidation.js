import validator from 'validator';

function UserValidation(data) {
  const errors = {};
  if (validator.isEmpty(data.name.trim())) errors.name = 'Please enter name.';
  else if (data.name.length > 100) errors.name = 'Name must be less than 100 characters.';

  if (validator.isEmpty(data.email.trim())) errors.email = 'Please enter email address.';
  else if (!validator.isEmail(data.email)) errors.email = 'Please enter valid email address.';
  else if (data.email.length > 100) errors.email = 'Email address must less than 100 characters.';

  if (validator.isEmpty(data.phone.trim())) errors.phone = 'Please enter phone number.';
  else if (/[a-zA-Z]/.test(data.phone.trim()))
    errors.phone = 'Please enter only numbers in phone no.';
  else if (data.phone.length > 10 || data.phone.length < 10)
    errors.phone = 'Phone number must be 10 digit.';

  return { errors, isValid: Object.keys(errors).length <= 0 };
}

export default UserValidation;
