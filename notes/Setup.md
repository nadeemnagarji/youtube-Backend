Process of setting up a professional project
first we do git init then we initialize the git repo and make a git ignore file to let git know which files to ignore 


we create a public folder and add a temp file inside it add a .gitkeep

.gitkeep =>> this will make sure that this file is pushed on github

we make an .env file to hold environment variables


.env ==. this file has some protected variables which wont be pushed on github and are only taken from system 

dev dependancy =>> this are dependancy used while develpment and are not taken in production

we then add the scripts in package.json mainly the run script afterr installing nodemon 




then we create a src folder and make 3 files 
app.js
constants.js
index.js

the src folder then will further have many sub folders mainly 

1} controllers  ==> functionality
2} Db ==> database connections
3} middlewares ==>> 
4} model 
5} routes
6} utils ==> utilities ==> a thing or functionality which will be used repeatedly 


the nodemon and prettier aredevdependancy i.e we only use it while development and not in production or when we deploy so while installing them we can use the command 

npm i -D nodemon 
npm i -D prettier 

so that they are mentioned as devdependancies in package.json


we also install prettier for better formating of code and professionalism and code steructure stays same across the platform when we are collaborating with multiple team

after installing pretteier we make a .prettierrc file to write custom
formating of how code formating will work 

and we also make a .pretteirignore file to let prettier know which files to ignore while checking for the custom formatting that we mentioned in .prettierrc file 
