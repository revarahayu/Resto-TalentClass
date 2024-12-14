const multer = require('multer');

const configStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './menu-image');  
    },
    filename: (request, file, callback) => {
        callback(null, `image-${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage: configStorage,
    fileFilter: (request, file, callback) => {
        const allowedTypes = ['image/jpg', 'image/png', 'image/jpeg'];
        if (!allowedTypes.includes(file.mimetype)) {
            return callback(new Error('Invalid type of file'), false);  
        }

        const maxSize = 1 * 1024 * 1024;  
        if (file.size > maxSize) {
            return callback(new Error('File size is too large'), false);  
        }

        callback(null, true);
    }
});

module.exports = upload;
