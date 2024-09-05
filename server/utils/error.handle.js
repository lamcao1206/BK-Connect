const handleError = (err) => {
  let errors = {};

  // Contain duplicate value in username of email
  if (err.code === 11000) {
    Object.entries(err.keyValue).forEach(([field, value]) => {
      errors[field] = value + " already exists";
    });
  }

  return errors;
};

export default handleError;
