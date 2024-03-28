const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(() => next(err));
  };
};

export { asyncHandler };

// const asyncHandler =(fn)=>async(req, res ,next) =>{
//     try {
//         await fn(req ,res ,next)
//     } catch (error) {
//         res.status(err.code|| 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

// for understanding

// const asyncHandler = () =>{}
// const asyncHansler = (func) =>() =>{};
//const asyncHandler = (func) => {async()=>{}}