// asyncHandler is a function that takes another function (fn) as input
const asyncHandler = (fn) => {
    // The returned function is a middleware that takes req, res, and next as parameters
    return (req, res, next) => {
      // Inside this middleware, we use Promise.resolve to handle both synchronous and asynchronous functions
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };
  
  export default asyncHandler;
  