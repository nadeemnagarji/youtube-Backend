class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }


// we also make our customized ApiResponse class so that whever we want to send a response it should have following things in it 
// as properties 
// statusCode ,data,message,success
// thats why we create a standard class which sets this properties and then we can send the response object 
// this is made for code consistency i.e. we should be able to send same responses everytime