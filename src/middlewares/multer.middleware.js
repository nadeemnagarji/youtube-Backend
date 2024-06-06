import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");

    console.log(file, "uploaded files");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage,
});

// we define storage where multer can use either disk or memory to store the files here we use disk
// inside that storage we define destination and filename both are functions

//the destination has 3 parameters req,file,cb
// the cb i.e. callback function has 2 para first is null second is the destination where file is stored in the server

//the file name function also has 3 parameters
//the callback will name the file which is uploaded
