//It is a 3rd party module.
//With the help of multer we can store files or images in database.

const multer = require('multer');
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    }
})
const upload = multer({ storage: storage })   //1st storage is a property of multer module whereas the second storage is the variablename(line5)
module.exports = upload;