so after setting up the db we then move on to setup our app and some common middlewares which we required in the project
and we install the following files first 

cookieParser and cors this both are used as a middlewares 

then we setup aur app and export that but before exporting we add few middlewares they are as follows

this cors middleware is used to setup the cross origin platform i.e. which urls can access this backend server are configured in this middleware in origin:process.env.CORS_ORIGIN

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true,

}))

app.use(express.json({limit:"16kb"})) //middleware for accepting json and maximum size of request body
app.use(urlencoded({extended:true,limit:"16kb"})) // middleware for accepting data from url  the extended:true lets u get nested objects
app.use(express.static("public"))  // used to store some files on the server such as images or pdfs and can be accessed in this public folder
app.use(cookieParser) // used to store cookies in users browser and access cookies from the browser 


WHAT ARE MIDDLEWARES 

as soon as the user sends a request that request in first taken to the middlewares the middlewares are nothing but functions which do some work before request is sent to that particular route
whenever a user sends a request in backend any middleware of function has access to 4 things 
(err,req,res,next) => err for error
                      req for request
                      res for response
                      next for moving to next command or middleware or route
 
