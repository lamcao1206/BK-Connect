const handleError = (err) => {
  let statusCode = 500;
  let message;

  // Contain duplicate value in username or email
  if (err.code === 11000) {
    statusCode = 409;

    // TODO: fixed dummy code in future
    Object.entries(err.keyValue).forEach(([field, value]) => {
      message = field + ": " + value + " already exists";
    });
  }

  // Unauthorized (Invalid Login or Password) or Not Found
  if (err.statusCode) {
    statusCode = err.statusCode;
    message = err.message;
  }

  return { message, statusCode };
};

export default handleError;
