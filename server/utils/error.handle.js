const handleError = (err) => {
  let errors = {};
  let statusCode = 500;

  // Contain duplicate value in username of email
  if (err.code === 11000) {
    statusCode = 409;
    Object.entries(err.keyValue).forEach(([field, value]) => {
      errors[field] = value + " already exists";
    });
  }

  return { errors, statusCode };
};

export default handleError;
