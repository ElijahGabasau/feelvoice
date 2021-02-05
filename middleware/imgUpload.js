const multer  = require('multer');
const path = require('../paths').imgStorage;

const storage = multer.diskStorage({ 
  destination: (req, file, cb) => {
    cb(null, path);
  }, 
  filename: (req, file, cb) => {
    cb(null, file.fieldname + Date.now() + '.' + file.mimetype.match(/(?<=image\/).*$/));
  },
  });
const imgUpload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.includes('image/')) {
     req.fileValidationError = 'An image has been expected';
     return cb(null, false, new Error('An image has been expected'));
    }
    cb(null, true);
   }
});

module.exports = imgUpload;