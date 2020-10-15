import { request } from 'express';
import multer from 'multer'; //Package upload of images, This package is added for terminal
import path from 'path';//way, back to file or going to file

export default {
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {// Giving name images
            const fileName = `${Date.now()}-${file.originalname}`;

            cb(null, fileName);
        }
    })
}