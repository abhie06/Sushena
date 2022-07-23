const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegex = /^[0-9\s]*$/;

const validateEmail = (email) => {
  let isValid = true;

  if (!emailRegex.test(email)) {
    isValid = false;
  }

  return isValid;
};

const validatePhone = (number) => {
  let isValid = true;

  if (!phoneRegex.test(number) || number.length !== 10) {
    isValid = false;
  }

  return isValid;
};

export { validateEmail, validatePhone };
