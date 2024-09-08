const handleError = (err) => {
  let error = {};
  let statusCode = 500;

  // Contain duplicate value in username or email
  if (err.code === 11000) {
    statusCode = 409;

    // TODO: fixed dummy code in future
    Object.entries(err.keyValue).forEach(([field, value]) => {
      error["message"] = field + ": " + value + " already exists";
    });
  }

  // Unauthorized (Invalid Login or Password)
  if (err.statusCode) {
    statusCode = err.statusCode;
    error["message"] = err.message;
  }

  return { error, statusCode };
};

export default handleError;
