/**
 * Logging Errors
 * @param {String} name - To identify error
 * @param {Object} err - Err obj from catch block
 */
const logError = (name, err) => {
  console.log(`${name} error: `, err);
  console.log(`${name} error: (BE) `, err?.response);
  console.log(`${name} error: (BE Data) `, err?.response?.data);
};

export default logError;
