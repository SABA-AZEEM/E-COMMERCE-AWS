// asyncHandler is a function that takes another function (fn) as input
//the purpose of asyncHandler is to create a middleware that can wrap asynchronous route handlers
//If the asynchronous function (fn) resolves successfully, the middleware moves to the next middleware in the stack (next()).
// If the asynchronous function rejects (throws an error), the catch(next) part catches the error and passes it to the Express error-handling mechanism (next(error)), allowing global error-handling middleware or the default Express error handler to deal with it.
//It avoid the use of try, catch block
const asyncHandler = (fn) => {
    // The returned function is a middleware that takes req, res, and next as parameters
    return (req, res, next) => {
      // Inside this middleware, we use Promise.resolve to handle both synchronous and asynchronous functions
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };
  
  export default asyncHandler;
  