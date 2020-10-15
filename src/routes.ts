// Requition response and request 
//Route
//Resouse = users

//Methods HTTP 
//Parameter 

//Three parameter types:
//Query: with "?" in page link ex:"localhost:3333/users?page=2"
//Routes: Use to identify somethings with id. Ex:"localhost:3333/usrs/3"
//Body: Use with form

//Note: To use the routes, have put "app.get('/users/:id ...."

import { Router } from 'express';

import  multer from 'multer';//update images
import uploadConfig from './config/upload';

import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//index, show, created, update, delete

routes.get('/orphanages/:id', OrphanagesController.show);
routes.get('/orphanages', OrphanagesController.index);
routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;