class ApiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        errors=[],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}


export {ApiError}


// this is nothing but a way how we want to handle errorsso we make a class of APiError which sets some rules and properties 
//of how to set the erros and nodeJS provides us with Error class which has all the build in things in it
// we extend that and make our own ApiError clas and just override some properties of Error (parent class) and make our own
// custom error class so using this class whenerv we make a error object
// we pass statuscode,message,errors,stack to it and this is used by contructor of class to create some instances and override some
// instances of parent in this case message is overriden

// we make this class just to standardize the error handling part of our backend