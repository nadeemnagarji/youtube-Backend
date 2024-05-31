
//this is a sort of wrapper function we use when we want to perform some async tasks on req or responses so instead 
//of writting an entire async function with try and catch all the time we made a higher order function called as 
//async handler which takes any function as a paramter and executes it asynchronously
// so whenever we want to run a function asynchronously we use this asyncHandler function 

const asyncHandleer = (func)=>{

   return async(req,res,next)=>{

        try {
            await func(req,res,next)
        } catch (error) {
            res.status(error.code || 500).json({
                success:false,
                message:error.message
            })
        }
    }
}

export {asyncHandleer}

